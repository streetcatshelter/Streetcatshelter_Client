// LIBRARY
import React, { useState, useEffect, useRef } from "react";

// COMPONENTS
import { Slide, Template } from "../../components";

// STYLE
import styled from "styled-components";
import { ChevronLeft, ChevronRight, X } from "react-feather";

// REDUX
import { history } from "../../redux/configureStore";

const TOTAL_SLIDES = 4;

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  //슬라이드 조작 함수
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

  //로그인페이지로 가는 함수
  const GoHome = () => {
    const Onboarding = localStorage.getItem("onboarding");
    history.push("/login");
    if (!Onboarding) localStorage.setItem("onboarding", "saw");
  };

  return (
    <Template props={props} page="slider">
      <Container>
        <ButtonWrap>
          <CloseButton onClick={GoHome}>
            <X />
          </CloseButton>
        </ButtonWrap>
        <SliderContainer ref={slideRef}>
          <Slide number="1" />
          <Slide number="2" />
          <Slide number="3" />
          <Slide number="4" />
          <Slide GoHome={GoHome} number="5" />
        </SliderContainer>
      </Container>
      <BtnWrap>
        <Button style={{ padding: "3px" }} onClick={prevSlide}>
          <ChevronLeft />
        </Button>
        <Dot background={currentSlide === 0 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 1 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 2 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 3 ? "#D19B61" : "#FBD986"} />
        <Dot background={currentSlide === 4 ? "#D19B61" : "#FBD986"} />
        <Button style={{ padding: "3px 4px" }} onClick={nextSlide}>
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
  overflow: hidden; 
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
  cursor: pointer;
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
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: #fbd986;
  padding: 3px;
  z-index: 999;
  margin: 10px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #cbcf52;
    color: #fff;
  }
`;

export default Slider;