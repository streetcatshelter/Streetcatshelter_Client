import React from "react";
import styled from "styled-components";
const ChatWrite = () => {
  return (
    <InputWrap>
      <InputForm>
        <Input />

        <InputBtn type="summit">저장</InputBtn>
      </InputForm>
    </InputWrap>
  );
};
const InputWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  min-height: 15px;
  margin: 8px;
  border-radius: 20px;
  border: 1px solid #cbcf52;
  overflow-x: hidden;
  overflow-y: auto;
`;
const InputForm = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
`;

const Input = styled.textarea`
  border: none;
  min-height: 15px;
  margin-left: 10px;
  width: 80%;
  position: relative;
  outline: none;
  resize: none;
`;

const InputBtn = styled.button`
  font-size: 16px;
  height: 38px;
  width: 80px;
  background: #cbcf52;
  border-radius: 20px;
  color: #fff;
  border: none;
`;

export default ChatWrite;
