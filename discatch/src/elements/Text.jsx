// LIBRARY
import React from "react";
import styled from "styled-components";

const Text = ({ children, clickEvent, ...props }) => {
  return (
    <TextStyle onClick={clickEvent} {...props}>
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  color: "black",
  size: "14px",
  addstyle: () => {},
  clickEvent: () => {},
};

const TextStyle = styled.p`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  cursor: ${(props) => props.cursor};
  word-break: break-all;
  white-space: pre-line;
  ${(props) => props.addstyle()};
`;

export default Text;
