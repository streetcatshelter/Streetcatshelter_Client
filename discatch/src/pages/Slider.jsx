import React, { useState, useEffect, useRef } from "react";

/* == components*/
import { Slide, Template } from "../components";

/* == Library - style */
import styled from "styled-components";
import { ChevronLeft, ChevronRight, X } from "react-feather";

/* == Redux  */
import { history } from "../redux/configureStore";

const TOTAL_SLIDES = 2;

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Template props={props} page="slider">
      <Container>
        <ButtonWrap>
          <CloseButton
            onClick={() => {
              history.push("/");
            }}
          >
            <X />
          </CloseButton>
        </ButtonWrap>
        <SliderContainer ref={slideRef}>
          <Slide />
          <Slide number="2" />
          <Slide number="3" />
        </SliderContainer>
      </Container>
      <BtnWrap>
        <Button onClick={prevSlide}>
          <ChevronLeft />
        </Button>
        <Dot background={currentSlide === 0 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 1 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 2 ? "#D19B61" : "#FBD986"} />
        <Button onClick={nextSlide}>
          <ChevronRight />
        </Button>
      </BtnWrap>
    </Template>
  );
};

const ButtonWrap = styled.div`
  max-width: 420px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: #fbd986;
  margin: auto;
  padding: 2px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #cbcf52;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${(props) => props.background};
  margin: 5px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items:"

  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: #fbd986;
  padding: 2px;
  z-index: 999;
  margin: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #cbcf52;
    color: #fff;
  }
`;
export default Slider;
