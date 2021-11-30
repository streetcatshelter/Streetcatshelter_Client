// LIBRARY
import React, { useEffect } from "react";

// COMPONENTS
import {
  MyPageDetail,
  Profile,
  Template,
  MyPageCat,
  Spinner,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
const MyPage = (props) => {
  const dispatch = useDispatch();
  const location = props.location.state?.location;
  const isLoaded = useSelector((state) => state.mypage.pageLoaded);
  useEffect(() => {
    dispatch(mypageActions._getLikedAllCat());
  }, [dispatch]);
  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props}>
        <div
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ margin: "10px auto" }}>
            <Profile location={location} />
          </div>
          <MyPageDetail menu="myCat" location={location} />
          <MyPageCat location={location} />
        </div>
      </Template>
    </>
  );
};

export default MyPage;
