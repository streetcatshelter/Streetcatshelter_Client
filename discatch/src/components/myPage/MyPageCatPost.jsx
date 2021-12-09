// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

// ELEMENTS
import { FileText, MessageCircle } from "react-feather";

// REDUX
import { history } from "../../redux/configureStore";

const MyPageCatPost = ({ LikedCat, location }) => {
  const userInfo = useSelector((state) => state.mypage.userInfo);

  // 최근 활동
  const lastActivity =
    LikedCat && moment(LikedCat.lastActivity).format("YYYY-MM-DD hh:mm");

  // 내 활동
  const myActivity =
    LikedCat && moment(LikedCat.myActivity).format("YYYY-MM-DD hh:mm");

  // 동네 이름
  let userLocation = LikedCat.location;
  if (
    userLocation !== userInfo.locationList[0]?.split(" ")[2] &&
    userLocation !== userInfo.locationList[1]?.split(" ")[2] &&
    userLocation !== userInfo.locationList[2]?.split(" ")[2]
  ) {
    userLocation = location;
  }

  return (
    <CatPost
      onClick={() => {
        history.push({
          pathname: `/catdetail/${LikedCat.location}/${LikedCat.catId}/1`,
          state: { location: userLocation },
        });
      }}
    >
      <div style={{ width: "20%", minWidth: "85px" }}>
        <img
          style={{
            width: "80px",
            height: "80px",
          }}
          src={LikedCat.catImage}
          alt="LikedCatImage"
        />
      </div>
      <CatInfo>
        <p
          style={{
            fontWeight: "900",
            fontSize: "14px",
            marginBottom: "3px",
          }}
        >
          이름 : {LikedCat.catName}
        </p>
        <p>최근활동: {lastActivity}</p>
        <p>나의 최근활동: {myActivity === null ? "-" : myActivity}</p>
        <InfoIcon>
          <FileText width="15px" height="15px" /> <p>{LikedCat.cntCatDetail}</p>
          <MessageCircle width="15px" height="15px" />{" "}
          <p>{LikedCat.cntComment}</p>
        </InfoIcon>
      </CatInfo>
    </CatPost>
  );
};

const CatPost = styled.div`
  background: rgb(252, 246, 222);
  width: 100%;
  height: 80px;
  display: flex;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
`;
const CatInfo = styled.div`
  width: 80%;
  p {
    margin: 2px;
    font-size: 12px;
  }
`;
const InfoIcon = styled.div`
  justify-content: flex-end;
  display: flex;
  margin: auto;
  width: 90%;
  p {
    font-size: 12px;
    margin: auto 5px auto 2px;
  }
`;

export default MyPageCatPost;
