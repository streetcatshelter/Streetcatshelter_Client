import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// STYLE

// COMPONENTS
import { Toast } from "../";
import styled from "styled-components";
const ChatSend = ({ sendMessage }) => {
  //토스트모달 (공백, 특수문자 입력시  경고창)
  const [toastState, setToastState] = useState(false);
  useEffect(() => {
    if (toastState) {
      setTimeout(() => {
        setToastState(false);
      }, 1500);
    }
  }, [toastState]);

  // 메세지 state
  const [message, setMessage] = useState("");

  const sendBtn = () => {
    //공백정규식
    let tmp = message.replace(/\s|　/gi, "");
    //공백일때 워닝 토스트 띄움
    if (tmp === "") {
      setToastState(true);
    } else {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <ChatSendBox>
        <ChatInput
          type={"text"}
          placeholder={""}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendBtn();
            }
          }}
        />
        <SendButton onClick={sendBtn}>
          <SendText>
            <p>전송</p>
          </SendText>
        </SendButton>
      </ChatSendBox>
      {toastState && <Toast message="메세지를 입력해주세요!" />}
    </div>
  );
};

const ChatSendBox = styled.div`
  position: fixed;
  bottom: 80px;
  display: flex;
  align-items: flex-end;
  background: #fefdf8;
  width: 380px;
  height: 80px;
  padding: 10px;
  border: 1px solid #cbcf52;
  border-radius: 10px;
  margin: auto;
  z-index: 500;
  @media screen and (max-width: 1024px) {
    bottom: 70px;
  }
  @media screen and (max-width: 1024px) and (min-height: 800px) {
    bottom: 80px;
  }
  @media screen and (max-width: 768px) {
    bottom: 85px;
  }
  @media screen and (max-width: 540px) {
    bottom: 70px;
  }
  @media screen and (max-width: 540px) and (min-height: 800px) {
    bottom: 80px;
  }
  @media screen and (max-width: 414px) {
    bottom: 80px;
  }
  @media screen and (max-width: 411px) {
    bottom: 90px;
  }
  @media screen and (max-width: 411px) and (max-height: 731px) {
    bottom: 80px;
  }
  @media screen and (max-width: 375px) {
    bottom: 75px;
    width: 90%;
  }
  @media screen and (max-width: 375px) and (min-height: 812px) {
    bottom: 85px;
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    bottom: 60px;
    width: 88%;
  }
  @media screen and (max-width: 320px) and (min-height: 800px) {
    bottom: 80px;
    width: 88%;
  }
  @media screen and (max-width: 280px) {
    bottom: 70px;
    width: 87%;
  }
  @media screen and (max-width: 280px) and (min-height: 800px) {
    bottom: 85px;
    width: 88%;
  }
`;
const ChatInput = styled.textarea`
  position: relative;
  display: flex;
  width: 85%;
  height: 60px;
  margin: auto;
  background: #fefdf8;
  resize: none;
  border: none;
  outline: none;
`;
const SendText = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  background: #fbd986;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  p {
    font-size: 14px;
    font-weight: 900;
    margin: auto;
    text-align: center;
  }
`;
const SendButton = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
`;

export default ChatSend;
