// LIBRARY
import React, { useEffect } from "react";

// STYLE
import styled from "styled-components";

import { textareaHeightHandler } from "utils";
const TextArea = ({
  value,
  placeholder,
  changeEvent,
  keyPress,
  onInput,
  textareaRef,
  ...props
}) => {
  useEffect(() => {
    textareaHeightHandler(textareaRef);
  }, [value, textareaRef]);

  return (
    <TextAreaStyle
      value={value}
      placeholder={placeholder}
      onChange={changeEvent}
      onKeyPress={keyPress}
      ref={textareaRef}
      {...props}
    />
  );
};

const TextAreaStyle = styled.textarea`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-height: 100px;
  resize: none;
  background: ${(props) => props.bgColor};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  ${(props) => props.addstyle()};
`;

TextArea.defaultProps = {
  width: "100%",
  height: "100px",
  bgColor: "none",
  color: "black",
  padding: "6px 3px 3px 3px",
  radius: "12px",
  fontSize: "12px",
  keyPress: () => {},
  changeEvent: () => {},
  addstyle: () => {},
};

export default TextArea;
