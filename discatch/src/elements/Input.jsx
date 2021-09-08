import React from 'react';
import styled from 'styled-components';

const Input = ({
  id,
  type,
  placeholder,
  value,
  changeEvent,
  keyPress,
  ...props
}) => {
  return (
    <InputStyle
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeEvent}
      onKeyPress={keyPress}
      {...props}
    />
  );
};

const InputStyle = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => `rgb(${props.theme.theme[props.color]})`};
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: 1px solid #cbcf5e;
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  ${(props) => props.addstyle()}

  &:focus {
    color: ${(props) => `rgb(${props.theme.theme.black})`};
    background: ${(props) => `rgb(${props.theme.theme.white})`};
    outline: none;

    &::placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }

    &::-webkit-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }

    &:-ms-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
  }

  &::placeholder {
    color: ${(props) => `rgb(${props.theme.theme.ivory})`};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => `rgb(${props.theme.theme.ivory})`};
  }

  &:-ms-input-placeholder {
    color: ${(props) => `rgb(${props.theme.theme.ivory})`};
  }
`;

Input.defaultProps = {
  width: '100%',
  padding: '6px',
  color: 'black',
  bgColor: 'none',
  fontSize: '14px',
  type: 'text',
  addstyle: () => {},
  changeEvent: () => {},
  keyPress: () => {},
};

export default Input;
