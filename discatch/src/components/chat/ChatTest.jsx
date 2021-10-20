import React, { useState } from "react";
import "./ChatTest.css";
import { Image } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/modules/chat";
import { Send } from "react-feather";
const ChatTest = () => {
  const ChatMessage = useSelector((state) => state.chat.chatlist);
  const dispatch = useDispatch();
  const [message, SetMessage] = useState("");

  const ChangeMessage = (e) => {
    SetMessage(e.target.value);
  };

  const SendMessage = () => {
    if (message === " ") {
      window.alert("메세지를 입력해주세요!");
      return;
    }
    dispatch(setMessage(message));
    SetMessage(" ");
  };

  const SendMessageByEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      SendMessage();
      e.preventDefault();
    }
  };

  return (
    <div class="container">
      <div class="header">
        {/* <button class="back-btn">
            <img src="imgs/left-arrow.png" width="30" height="30">  
          </button> */}
        <Image width="40px" height="40px" borderRadius="20px" />
        <div class="info-block">
          <p class="username">치치누나</p>
          <p class="status">1시간 전에 활동</p>
        </div>
        <div class="call-box"></div>
      </div>

      <div id="chat-box">
        <div class=" bubble friend-bubble">자니?</div>
        <div class=" bubble friend-bubble">자나보네..ㅎ</div>
        <div class=" bubble friend-bubble">잘 자 :)</div>
        {ChatMessage.map((chat, idx) => {
          return <div class=" bubble my-bubble">{chat}</div>;
        })}
      </div>

      <div class="footer">
        <textarea
          onKeyPress={SendMessageByEnter}
          id="input"
          placeholder="메시지를 입력하세요..."
          autofocus="true"
          onChange={ChangeMessage}
          value={message}
        ></textarea>
        <button id="send" type="summit" onClick={SendMessage}>
          <Send class="sendBtn" />
        </button>
      </div>
    </div>
  );
};

export default ChatTest;
