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
  bottom: 145px;
  margin-left: 350px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 22.5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  @media (max-width: 420px) {
    left: auto;
    right: 20px;
  }
  @media screen and (max-height: 1366px) {
    bottom: 145px;
  }
  @media screen and (max-height: 823px) {
    bottom: 205px;
  }
  @media screen and (max-height: 812px) {
    bottom: 195px;
  }
  @media screen and (max-height: 800px) {
    bottom: 170px;
  }
  @media screen and (max-height: 736px) {
    bottom: 141px;
  }
  @media screen and (max-height: 720px) {
    bottom: 140px;
  }
  @media screen and (max-height: 640px) {
    bottom: 142px;
  }
  @media screen and (max-height: 600px) {
    bottom: 145px;
  }
  @media screen and (max-height: 568px) {
    bottom: 141px;
  }
`;
export default Button;
