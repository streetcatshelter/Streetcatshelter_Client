// LIBRARY
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// SOCKET
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

// ELEMENTS
import { Image, Grid } from "../../elements";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { EditModalSlide, ChatMessage } from "..";

// REDUX
import { chatActions } from "../../redux/modules/chat";
import { pushChatMessage } from "../../redux/modules/chat";

// MOMENT
import moment from "moment";

const ChatRoom = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const ChatInfo = useSelector((state) => state.chat.chatinfo);
  const username = useSelector((state) => state.mypage.userInfo.username);

  const client = useRef({});
  const [message, setMessage] = useState("");

  //header 마지막 활동 시간
  const LastActivity = moment(ChatInfo.lastActivity).format(
    "YYYY-M-D HH:mm:ss"
  );
  const hourDiff = moment(LastActivity).diff(moment(), "hours");
  // format 1, 수정한 지 하루 경과했을 경우 : YYYY.MM.DD hh:mm
  const updated = moment(LastActivity).format(" YYYY. M. D hh:mm");
  // format 2, 수정한 지 하루 이내일 경우 : 'n 분 전, n 시간 전'
  const recentlyUpdated = moment(LastActivity).fromNow();
  const sendtime = hourDiff < 22 ? recentlyUpdated : updated;

  useEffect(() => {
    dispatch(chatActions._getAllMessage(props.roomId));
    dispatch(chatActions._getRoomInfo(props.roomId));
  }, []);

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
    client.current.subscribe(
      `/sub/chat/room/${props.roomId}`,
      function (response) {
        const res = JSON.parse(response.body);
        const message = {
          message: res.message,
          sender: res.userName,
          time: res.time,
          mine: null,
        };

        dispatch(pushChatMessage(message));
      }
    );
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }
    if (message.length > 0) {
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
    } else {
      alert("메세지를 입력해주세요!");
    }
  };

  return (
    <ChatWrap>
      <Header>
        <InfoBox>
          <Image
            width="40px"
            height="40px"
            borderRadius="20px"
            src={ChatInfo.opponentImage}
            alt={ChatInfo.opponentImage}
          />
          <InfoBlock>
            <p>{ChatInfo.opponent}</p>
            {ChatInfo.lastActivity ? <p>{sendtime}에 활동</p> : ""}
          </InfoBlock>
        </InfoBox>

        <CallBox>
          <EditModalSlide
            FirstBtn="상대방 프로필보기"
            SecondBtn="채팅방 삭제하기"
            FirstClick={() => {}}
            SecondClick={() => {
              dispatch(chatActions._deleteRoom(props.roomId));
            }}
          />
        </CallBox>
      </Header>
      <Grid style={{ height: "60%" }}>
        <ChatMessage props={props.roomId} />
      </Grid>

      <ChatSendBox>
        <ChatInput
          type={"text"}
          placeholder={"Please Enter for send message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <SendButton onClick={() => publish(message)}>
          <SendText>
            <p>전송</p>
          </SendText>
        </SendButton>
      </ChatSendBox>
    </ChatWrap>
  );
};

const ChatWrap = styled.div`
  position: relative;
  left: 7px;
  width: 95%;
  height: 76vh;
  margin: -1vh 0 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    height: 70vh;
  }
  @media screen and (max-width: 1024px) {
    height: 85vh;
  }
  @media screen and (max-width: 1024px) and (min-height: 800px) {
    height: 75vh;
  }
  @media screen and (max-width: 1024px) and (min-height: 1366px) {
    height: 83vh;
  }
  @media screen and (max-width: 1024px) and (max-height: 600px) {
    height: 65vh;
  }
  @media screen and (max-width: 768px) {
    height: 78vh;
  }
  @media screen and (max-width: 768px) and (min-height: 800px) {
    height: 74vh;
  }
  @media screen and (max-width: 540px) {
    height: 70vh;
  }
  @media screen and (max-width: 375px) {
    height: 68vh;
  }
  @media screen and (max-width: 375px) and (min-height: 812px) {
    height: 71vh;
  }
  @media screen and (max-width: 360px) {
    height: 65vh;
  }
  @media screen and (max-width: 320px) {
    height: 63vh;
  }
  @media screen and (max-width: 280px) {
    height: 65vh;
  }
`;

const Header = styled.div`
  position: fixed;
  background: #fefdf8;
  width: 390px;
  display: flex;
  height: 60px;
  padding: 5px;
  z-index: 1000;
  justify-content: space-between;
  border-bottom: 0.2px solid #d19b61;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBlock = styled.div`
  margin-left: 12px;
  margin-right: 95px;
  p {
    :nth-child(1) {
      margin: 0 0 3px;
      font-size: 16px;
    }
    :nth-child(2) {
      margin: 0;
      font-size: 12px;
      color: #999999;
    }
  }
`;

const CallBox = styled.div`
  display: flex;
  width: 60px;
  align-items: center;
  @media screen and (max-width: 375px) {
    position: relative;
    right: 30px;
  }
`;

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
  z-index: 1200;
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

export default ChatRoom;
