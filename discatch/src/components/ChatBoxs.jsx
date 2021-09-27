import React from "react";
import styled from "styled-components";
const ChatBoxs = () => {
  return (
    <Wrapper>
      <ChatSend>
        <span>보내는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatSend>
      <ChatRve>
        <span>받는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatRve>
      <ChatSend>
        <span>보내는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatSend>
      <ChatRve>
        <span>받는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatRve>
      <ChatSend>
        <span>보내는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatSend>
      <ChatRve>
        <span>받는사람 </span>
        안녕하세여~반갑습니다.
        <small>2021-09-27 23:55</small>
      </ChatRve>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  span {
    font-weight: 900;
  }
  small {
    text-align: right;
  }
`;

const ChatSend = styled.div`
  height: auto;
  width: 250px;
  background: #fbd986;
  margin: 10px 0px 10px 100px;
  border-radius: 20px;
  padding: 15px 10px;

  font-size: 12px;
  display: flex;
  flex-direction: column;
`;

const ChatRve = styled.div`
  height: auto;
  width: 250px;
  background: #cbcf52;
  margin: 10px 0px;
  border-radius: 20px;
  padding: 15px 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
`;

export default ChatBoxs;
