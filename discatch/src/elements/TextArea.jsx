import React from 'react';
import styled from 'styled-components';

const TextArea = ({ value, placeholder, changeEvent, keyPress, ...props }) => {
  return (
    <TextAreaStyle
      value={value}
      placeholder={placeholder}
      onChange={changeEvent}
      onKeyPress={keyPress}
      {...props}
    />
  );
};

const TextAreaStyle = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bgColor};
  color: ${(props) => `rgb(${props.theme.theme[props.color]})`};
  font-size: ${(props) => props.fontSize};
  border: 1px solid #cbcf5e;
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  ${(props) => props.addstyle()};

  &:focus {
    outline: none;
  }
`;

TextArea.defaultProps = {
  width: '100%',
  height: '100px',
  bgColor: 'none',
  color: 'black',
  padding: '12px',
  radius: '12px',
  fontSize: '12px',
  keyPress: () => {},
  changeEvent: () => {},
  addstyle: () => {},
};

export default TextArea;
