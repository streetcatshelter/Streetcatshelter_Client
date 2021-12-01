// LIBRARY
import React from "react";
import styled from "styled-components";

// STYLE
import { borderBox } from "../shared/style";

const Button = ({ is_float, children, clickEvent, ...props }) => {
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButtonOut>
          <FloatButton onClick={clickEvent}>{children}</FloatButton>{" "}
        </FloatButtonOut>
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
`;

const FloatButton = styled.button`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
  width: 50px;
  height: 50px;
  background-color: #b5bb19;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  border: none;
  border-radius: 50%;
  position: relative;
  margin-left: 300px;
`;

const FloatButtonOut = styled.div`
  position: fixed;
  height: 80%;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-height: 400px) {
    height: 50%;
  }
`;
export default Button;
