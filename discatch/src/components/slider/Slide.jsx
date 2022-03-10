// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";

// IMAGES
import onboadingImg1 from "styles/images/map_list.gif";
import onboadingImg2 from "styles/images/CommunityOnboarding.png";
import onboadingImg3 from "styles/images/ChatOnboarding.png";
import onboadingImg4 from "styles/images/ProfileOnboarding.png";
import onboadingImg5 from "styles/images/TitleOnboarding.png";

const Slide = (props) => {
  return (
    <Background>
      {props.number === 1 ? (
        <WrapperBox>
          <InnerBox style={{ left: "50%" }}>
            <img src={onboadingImg1} alt="map_list" />
            <p>
              지도와 동네별 리스트틑 통해
              <br /> <span>동네 고양이를 한눈에!</span>
            </p>{" "}
          </InnerBox>
        </WrapperBox>
      ) : props.number === 2 ? (
        <WrapperBox>
          <InnerBox style={{ left: "150%" }}>
            <img src={onboadingImg2} alt="onboadingImg2" />
            <p>
              다양한 커뮤니티 공간으로 <br />
              <span>고양이 정보와 동네 정보를 한번에!</span>
            </p>{" "}
          </InnerBox>
        </WrapperBox>
      ) : props.number === 3 ? (
        <WrapperBox>
          <InnerBox style={{ left: "250%" }}>
            <img src={onboadingImg3} alt="onboadingImg3" />
            <p>
              채팅기능을 이용하여 <br />
              <span> 다른 집사와 소통을!</span>
            </p>{" "}
          </InnerBox>
        </WrapperBox>
      ) : props.number === 4 ? (
        <WrapperBox>
          <InnerBox style={{ left: "350%" }}>
            <img src={onboadingImg4} alt="onboadingImg4" />
            <p>
              활동별 레벨 시스템으로
              <br /> <span>더 활발한 활동을 독려!</span>
            </p>{" "}
          </InnerBox>
        </WrapperBox>
      ) : (
        props.number === 5 && (
          <WrapperBox>
            <LastBox style={{ left: "450%" }}>
              <MainText>
                <p>
                  디<span>스</span>
                  <br />
                  <span>캐</span>치
                </p>
              </MainText>
              <img src={onboadingImg5} alt="onboadingImg5" />
              <GoHomeBox>
                <p>이제 동네집사를 통해</p>
              </GoHomeBox>
              <Button onClick={props.GoHome}>우리동네 집사로 취직하기 !</Button>
            </LastBox>
          </WrapperBox>
        )
      )}
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const WrapperBox = styled.div`
  width: 100%;
  height: 80vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBox = styled.div`
  position: absolute;
  transform: translate(-50%, 0%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    margin: -10px auto 5px auto;
    width: 280px;
    height: 530px;
    @media screen and (max-width: 375px) {
      width: 230px;
      height: 436px;
    }
    @media screen and (max-width: 320px) {
      width: 210;
      height: 398px;
    }
  }
  p {
    margin: 5px auto;
    font-weight: 700;
    text-align: center;
    width: 300px;
    font-size: 16px;
    color: #000000;
    line-height: 25px;
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    span {
      font-size: 20px;
      font-weight: 900;
      @media screen and (max-width: 320px) {
        font-size: 18px;
      }
    }
  }
`;
const LastBox = styled.div`
  position: absolute;
  transform: translate(-50%, 0%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    margin: -10px auto 5px auto;
  }
`;

const GoHomeBox = styled.div`
  p {
    margin: 5px auto;
    font-weight: 700;
    text-align: center;
    width: 300px;
    font-size: 16px;
    color: #000000;
    line-height: 25px;
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    span {
      font-size: 20px;
      font-weight: 900;
      @media screen and (max-width: 320px) {
        font-size: 18px;
      }
    }
  }
`;
const MainText = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  z-index: 1000;
  margin: 0px auto;
  p {
    margin: 0px auto;
    font-size: 80px;
    font-weight: 900;
    color: #fbd986;
    span {
      color: #cbcf52;
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
  font-weight: 900;
  width: 240px;
  height: 50px;
  border-radius: 20px;
  background: #fbd986;
  color: #000000;
  font-size: 18px;
  border: 2px dashed #d19b61;
  &:hover {
    background: #b5bb19;
    color: #ffffff;
    border: 2px dashed #ffffff;
  }
`;
export default Slide;
