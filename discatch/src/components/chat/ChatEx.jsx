import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/modules/chat";
import styled from "styled-components";

import { Send } from "react-feather";

const ChatEx = (props) => {
  const dispatch = useDispatch();
  const ROOM_SEQ = 1;
  const token = localStorage.getItem("token");
  const username = useSelector((state) => state.mypage.userInfo.username);
  const client = useRef({});

  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState([]);
  console.log(chatMessages);
  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);
  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://localhost:8080/ws-stomp/websocket", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS("http://52.78.241.50/ws-stomp"), // proxy를 통한 접속
      connectHeaders: {
        token: token,
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/chat/${props.roomId}`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/api/chat/message",
      headers: { token: token },
      body: JSON.stringify({
        message: message,
        roomId: props.roomId,
        userName: username,
      }),
    });

    setMessage("");
  };

  return (
    <ChatSendBox>
      {/* {chatMessages && chatMessages.length > 0 && (
        <ul>
          {chatMessages.map((_chatMessage, index) => (
            <li key={index}>{_chatMessage.message}</li>
          ))}
        </ul>
      )} */}

      <ChatInput
        type={"text"}
        placeholder={"message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.which === 13 && publish(message)}
      />
      <SendButton onClick={() => publish(message)}>
        <Send />
      </SendButton>
    </ChatSendBox>
  );
};
const ChatSendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  padding: 10px;
  overflow: auto;
`;
const ChatInput = styled.input`
  display: flex;
  width: 80%;
  height: 50px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #cbcf52;
  border-radius: 10px;
  resize: none;
`;

const SendButton = styled.div`
  display: flex;
  width: 20%;
  svg {
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
    stroke: #cbcf52;
  }
`;

export default ChatEx;
