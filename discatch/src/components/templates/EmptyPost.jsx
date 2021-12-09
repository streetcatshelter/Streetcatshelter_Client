// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";
import nocatimage from "../../styles/images/nocatimage.jpg";

const EmptyPost = ({ path }) => {
  return (
    <NoCatBox>
      {path === "mypage" ? (
        <>
          <div>
            <span>야옹 !</span>
          </div>
          <div style={{ width: "90%", marginTop: "20px" }}>
            <p>아직 좋아요를 누른 고양이가 없다옹! 😹</p>
            <p>
              <span>홈</span>에서 애정하는 고양이에게 <span>❤</span>를 누르면
            </p>
            <p>내정보에서 따로 모아 볼 수 있다옹! </p>
          </div>
          <CatImage src={nocatimage} alt="nocatimage" />
        </>
      ) : path === "home" ? (
        <>
          {" "}
          <div>
            <span>야옹 !</span>
          </div>
          <div style={{ width: "100%", marginTop: "20px" }}>
            <p>아직 등록된 고양이가 없다옹! 😹</p>
            <p>
              <span>"아래 등록 버튼"</span>을 눌러
            </p>
            <p>동네의 고양이를 등록하면 </p>

            <p>우리 동네 고양이를 동네 집사들과</p>
            <p>함께 사랑할 수 있다옹! </p>
          </div>
          <CatImage src={nocatimage} alt="nocatimage" />
          <p style={{ fontSize: "25px", fontWeight: "900" }}>등록해다옹!!! </p>
        </>
      ) : path === "chat" ? (
        <>
          <div>
            <span>야옹 !</span>
          </div>
          <div style={{ width: "100%", marginTop: "20px" }}>
            <p>아직 시작한 채팅이 없다옹! 😹</p>
            <p>
              <span>상대방 프로필을 클릭해 </span>
            </p>
            <p>우리 동네 멋진 집사들과 </p>
            <p> 고양이에 대해 즐겁게 이야기해보자옹!</p>
          </div>
          <CatImage src={nocatimage} alt="nocatimage" />
        </>
      ) : (
        <>
          <div>
            <span>야옹 !</span>
          </div>
          <div style={{ width: "100%", marginTop: "20px" }}>
            <p>아직 등록된 커뮤니티 글이 없다옹! 😹</p>
            <p>
              <span>최초로 글을 등록해 </span>{" "}
            </p>
            <p>고양이를 위한 활동을 해보자옹!</p>
            <p>우리 동네 고양이를 동네 집사들과</p>{" "}
            <p>함께 사랑할 수 있다옹!❤ </p>
          </div>
          <CatImage src={nocatimage} alt="nocatimage" />
          <p style={{ fontSize: "25px", fontWeight: "900" }}>등록해다옹!!! </p>
        </>
      )}
    </NoCatBox>
  );
};

const CatImage = styled.img`
  animation: motion 0.5s linear 0s infinite alternate;
  margin-top: 0;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 5px;
    }
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

export default EmptyPost;
