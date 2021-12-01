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
  color: #fff;
  padding: 0;
  font-size: 30px;
  width: 60px;
  height: 60px;
  display: inline-block;
  outline: 0;
  border: none;
  text-decoration: none;
  background-color: #b5bb19;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: fixed;
`;

const FloatButtonOut = styled.div`
  position: absolute;
  top: 80%;
  height: 100%;
  width: 100%;
  min-height: 300px;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
`;
export default Button;
