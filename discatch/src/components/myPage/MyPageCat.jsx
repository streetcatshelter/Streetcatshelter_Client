// LIBRARY
import React from "react";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

// ELEMENTS
import { Image } from "../../elements";
import { FileText, MessageCircle } from "react-feather";

// REDUX
import { useSelector } from "react-redux";
import { history } from "../../redux/configureStore";
import nocatimage from "../../styles/images/nocatimage.jpg";

const MyPageCat = () => {
  const LikedAllCat = useSelector((state) => state.mypage.likedAllCat);
  let location = LikedAllCat.location;

  const userVillage0 = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]?.split("(")[0]
  );
  const userVillageA = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[1]?.split("(")[0]
  );

  const userVillage1 = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[0]?.split("(")[0]
  );
  const userVillageB = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[1]?.split("(")[0]
  );

  const userVillage2 = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[0]?.split("(")[0]
  );
  const userVillageC = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[1]?.split("(")[0]
  );

  if (location === userVillageA + " ") {
    location = userVillage0;
  } else if (location === userVillageB + " ") {
    location = userVillage1;
  } else if (location === userVillageC + " ") {
    location = userVillage2;
  }

  return (
    <>
      {LikedAllCat.length > 0 ? (
        <div>
          {LikedAllCat.map((LikedCat, idx) => {
            const lastActivity = moment(LikedCat.lastActivity).format(
              "YYYY-M-D hh:mm"
            );
            const myActivity = moment(LikedCat.myActivity).format(
              "YYYY-M-D hh:mm"
            );

            return (
              <CatPost
                key={idx}
                onClick={() => {
                  // history.push(`/catdetail/${LikedCat.catId}`);
                  history.push({
                    pathname: `/catdetail/${location}/${LikedCat.catId}`,
                    state: { location },
                  });
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
      ) : (
        <NoCatBox>
          <div>
            <span>앗 !</span>
          </div>
          <div style={{ width: "90%", marginTop: "20px" }}>
            <p>아직 좋아요를 누른 고양이가 없다옹! 😹</p>
            <p>
              <span>홈</span>에서 애정하는 고양이에게 <span>❤</span>를 누르면
            </p>
            <p>내정보에서 따로 모아 볼 수 있다옹! </p>
          </div>
          <img src={nocatimage} alt="nocatimage" />
        </NoCatBox>
      )}
    </>
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

const NoCatBox = styled.div`
  min-width: 240px;
  min-height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 60px;
    font-weight: 900;
  }
  p {
    font-size: 16px;
    margin: 5px auto;
    text-align: center;
    span {
      font-size: 16px;
      font-weight: 900;
      :nth-child(2) {
        color: red;
      }
    }
  }
`;
export default MyPageCat;
