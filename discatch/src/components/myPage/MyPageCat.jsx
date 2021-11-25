// LIBRARY
import React, { useEffect } from "react";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

// ELEMENTS
import { Image } from "../../elements";
import { FileText, MessageCircle } from "react-feather";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
import { history } from "../../redux/configureStore";

const MyPageCat = () => {
  const LikedAllCat = useSelector((state) => state.mypage.likedAllCat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mypageActions._getLikedAllCat());
  }, [dispatch]);
  
  return (
    <div>
      {LikedAllCat.map((LikedCat, idx) => {
        const lastActivity = moment(LikedCat.lastActivity).format(
          "YYYY-M-D hh:mm"
        );
        const myActivity = moment(LikedCat.myActivity).format("YYYY-M-D hh:mm");
        return (
          <CatPost
            key={idx}
            onClick={() => {
              history.push(`/catdetail/${LikedCat.catId}`);
              // history.push(`/catdetail/${LikedCat.location}/${LikedCat.catId}`);
            }}
          >
            <Image
              width="80px"
              height="80px"
              margin="0px 20px 0px 0px"
              src={LikedCat.catImage}
            />
            <CatInfo>
              <p style={{ fontWeight: "800", fontSize: "14px" }}>
                {LikedCat.catName}
              </p>
              <p>최근활동:{lastActivity}</p>
              <p>나의 최근활동:{myActivity}</p>
              <InfoIcon>
                <FileText width="15px" height="15px" />{" "}
                <p>{LikedCat.cntCatDetail}</p>
                <MessageCircle width="15px" height="15px" />{" "}
                <p>{LikedCat.cntComment}</p>
              </InfoIcon>
            </CatInfo>
          </CatPost>
        );
      })}
    </div>
  );
};

const CatPost = styled.div`
  background: rgba(255, 232, 188, 0.3);
  width: 100%;
  display: flex;
  margin: 10px 0px;
  cursor: pointer;
  p {
    font-size: 12px;
    line-height: 2px;
  }
  &:hover {
    filter: brightness(90%);
  }
`;

const CatInfo = styled.div`
  height: 80px;
`;

const InfoIcon = styled.div`
  display: flex;
  p {
    font-size: 12px;
    margin: auto 5px auto 2px;
  }
`;
export default MyPageCat;
