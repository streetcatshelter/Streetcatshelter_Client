// LIBRARY
import React from "react";
import styled from "styled-components";
import { Edit } from "react-feather";
// STYLE
import { borderBox } from "shared/style";

const Button = ({ is_float, children, clickEvent, ...props }) => {
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={clickEvent}>
          <Edit />
        </FloatButton>
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
  cursor: "pointer",
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
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`;

const FloatButton = styled.button`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
  min-width: 50px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  border: none;
  border-radius: 50%;
  position: fixed;
  margin-left: 300px;
  bottom: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    right: 50px;
  }
`;

export default Button;
