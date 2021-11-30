// LIBRARY
import React from "react";
import styled from "styled-components";

// STYLE
import { borderBox } from "../shared/style";

const Button = ({ is_float, children, clickEvent, ...props }) => {
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={clickEvent}>{children}</FloatButton>
      </React.Fragment>
    );
  }
  return (
    <ButtonStyle onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  color: "black",
  bgColor: "white",
  fontSize: "14px",
  padding: "12px 0px",
  addstyle: () => {},
  clickEvent: () => {},
};

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  background: ${(props) => `rgb(${props.theme.palette[props.bgColor]})`};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  border: none;
  cursor: pointer;
  ${(props) => borderBox(props.radius, props.padding)}
  ${(props) => props.addstyle()};
  align-items: ${(props) => props.alignItems};
`;

const FloatButton = styled.button`
  z-index: 100;
  width: 45px;
  height: 45px;
  background-color: #b5bb19;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 700;
  position: fixed;
  bottom: 80px;
  right:180px;
  margin-left: 350px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 22.5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 1750px) {
    right: 45vw;
  }
  @media screen and (max-width: 1750px) {
    right: 41vw;
  }
  @media screen and (max-width: 1340px) {
    right: 670px;
  }
  @media screen and (max-width: 1280px) {
    right: 570px;
  }
  @media screen and (max-width: 1280px) and (max-height: 800px) {
    right: 510px;
  }
  @media screen and (max-width: 1024px) {
    right: 380px;
  }
  @media screen and (max-width: 1024px) and (max-height: 600px) {
    right: 405px;
  }
  @media screen and (max-width: 812px) {
    right: 300px;
  }
  @media screen and (max-width: 812px) and (max-height: 800px) {
    right: 160px;
  }
  @media screen and (max-width: 768px) {
    right: 238px;
  }
  @media screen and (max-width: 720px) {
    right: 200px;
  }
  @media screen and (max-width: 720px) and (max-height: 800px) {
    right: 160px;
  }
  @media screen and (max-width: 540px) {
    right: 122px;
  }
  @media screen and (max-width: 414px) {
    right: 65px;
  }
  @media screen and (max-width: 375px) {
    right: 60px;
  }
  @media screen and (max-width: 280px) {
    right: 55px;
  }
`;
export default Button;
