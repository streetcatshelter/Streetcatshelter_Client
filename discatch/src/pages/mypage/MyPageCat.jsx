// LIBRARY
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// COMPONENTS
import {
  MyPageDetail,
  Profile,
  Template,
  MyPageCatPost,
  SecondSpinner,
  EmptyPost,
} from "../../components";

// STYLE
import styled from "styled-components";

// REDUX

import { useDispatch, useSelector } from "react-redux";
import { mypageActions, resetList } from "../../redux/modules/mypage";

const MyPage = (props) => {
  const location = props.location.state?.location;
  const dispatch = useDispatch();
  const likedAllCat = useSelector((state) => state.mypage.likedAllCat);
  const isLoaded = useSelector((state) => state.mypage.itemLoaded);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    dispatch(resetList());
    setPage(1);
    dispatch(mypageActions._getLikedAllCat());
  }, []);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고 catList의 length가 10의 배수인 경우
    if (inView && likedAllCat.length > 9 && likedAllCat.length / 10 === page) {
      setPage((prevState) => prevState + 1);
      dispatch(mypageActions._getMoreLikedAllCat(page + 1));
    } else {
      return;
    }
  }, [inView]);

  return (
    <>
      <Template props={props}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ margin: "10px auto" }}>
            <Profile location={location} />
          </div>

          <MyPageDetail menu="myCat" location={location} />
          <CatPostStyle>
            <div>
              {likedAllCat && likedAllCat.length > 0 ? (
                likedAllCat.map((LikedCat, idx) => {
                  return (
                    <div style={{ width: "100%" }} key={idx} ref={ref}>
                      <MyPageCatPost LikedCat={LikedCat} location={location} />
                    </div>
                  );
                })
              ) : (
                <EmptyPost path="mypage" />
              )}
            </div>
          </CatPostStyle>
          <SecondSpinner visible={isLoaded} path="scroll" />
        </div>
      </Template>
    </>
  );
};

const CatPostStyle = styled.div`
  height: 80%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default MyPage;
