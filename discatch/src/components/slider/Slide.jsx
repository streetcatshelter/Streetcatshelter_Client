// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";

// ICON
import onboadingImg from "../../styles/images/onboadingImg(1).svg";

// REDUX
import { history } from "../../redux/configureStore";

const Slide = (props) => {
  return (
    <Background>
      {props.number === "3" ? (
        <InnerBox>
          <SlideImage src={onboadingImg} alt={onboadingImg} />
          <p
            style={{
              left: "250%",
            }}
          >
            우리동네 집사로 취직하기!
          </p>
          <Button onClick={props.GoHome}>disCATch Start!</Button>
        </InnerBox>
      ) : props.number === "2" ? (
        <InnerBox>
          <SlideImage src={onboadingImg} alt={onboadingImg} />
          <p
            style={{
              left: "150%",
            }}
          >
            우리동네 고양이의 집사가 되어보세요!
          </p>
        </InnerBox>
      ) : (
        <InnerBox>
          <SlideImage src={onboadingImg} alt={onboadingImg} />
          <p
            style={{
              left: "50%",
            }}
          >
            우리동네 고양이를 기록해보세요!
          </p>
        </InnerBox>
      )}
    </Background>
  );
};
const Background = styled.div`
  width: 300%;
  height: 100%;
`;
const Button = styled.button`
  position: absolute;
  top: 85%;
  left: 250%;
  transform: translate(-50%, 0%);
  font-weight: 700;
  width: 240px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background: #fbd986;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  border: 2px dashed #d19b61;
  &:hover {
    background: #b5bb19;
    color: #ffffff;
  }
`;

const SlideImage = styled.img`
  width: 100vw;
  height: 100%;
  max-width: 420px;
`;
const InnerBox = styled.div`
  width: 100%;
  height: 80vh;
  background: #fefdf8;
  p {
    position: absolute;
    top: 72%;
    font-weight: 700;
    text-align: center;
    width: 300px;
    font-size: 14px;
    transform: translate(-50%, 0%);
  }
`;
export default Slide;
