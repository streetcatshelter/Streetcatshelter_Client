// LIBRARY
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "moment/locale/ko";
import moment from "moment";


// REDUX
import { chatActions } from "../../redux/modules/chat";

// STYLE
import styled from "styled-components";

const ChatMessage = (props) => {
  const dispatch = useDispatch();
  const commentsEndRef = useRef(null);
  const LastMessages = useSelector((state) => state.chat.chatmessage);
  const username = useSelector((state) => state.mypage.userInfo.username);
  const NickName = useSelector((state) => state.mypage.userInfo.nickname);
  // 댓글 스크롤 밑으로 이동
  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [LastMessages]);

  useEffect(() => {
    dispatch(chatActions._getAllMessage(props.roomId));
  }, []);
  return (
    <div>
      {LastMessages ? (
        <ChatBox>
          {LastMessages.map((lastmessage, idx) => {
            const ChatTime = moment(lastmessage.time).format(
              "YYYY-M-D hh:mm:ss"
            );
            const MinuteDiff = moment(ChatTime).diff(moment(), "minutes");
            // format 1, 전송한 지 하루 경과했을 경우 : YYYY.MM.DD hh:mm
            const SendMsg = moment(ChatTime).format(" YYYY- M-D hh:mm:ss");
            // format 2, 전송한 지 하루 이내일 경우 : 'n 분 전, n 시간 전'
            const RecentlySendChat = moment(ChatTime).fromNow();
            const SendTime = MinuteDiff < 24 * 60 ? RecentlySendChat : SendMsg;
            return (
              <div key={idx}>
                {lastmessage.sender === NickName ? (
                  <div>
                    <BubbleTop user="my">{lastmessage.sender}</BubbleTop>
                    <BubbleBox user="my">
                      <p>{SendTime}</p>
                      <Bubble user="my">{lastmessage.message} </Bubble>
                    </BubbleBox>
                  </div>
                ) : (
                  <div>
                    <BubbleTop>{lastmessage.sender}</BubbleTop>
                    <BubbleBox user="friend">
                      <Bubble user="friend">{lastmessage.message} </Bubble>
                      <p>{SendTime}</p>
                    </BubbleBox>
                  </div>
                )}
              </div>
            );
          })}
        </ChatBox>
      ) : (
        ""
      )}
      <div ref={commentsEndRef} />
    </div>
  );
};
const ChatBox = styled.div`
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 60%;
  margin-top: 65px;
`;

const BubbleTop = styled.div`
  ${(props) =>
    props.user === "my"
      ? `
    text-align:right;
  `
      : ` text-align:left`}
  font-size:12px;
  margin: 0px;
  font-weight: 900;
`;

const BubbleBox = styled.div`
  margin-bottom: 5px;
  display: flex;
  ${(props) =>
    props.user === "my"
      ? `
      justify-content:flex-end;
    `
      : ``}
  p {
    display: flex;
    font-size: 10px;
    margin: 10px 5px;
    align-items: end;
  }
`;

const Bubble = styled.div`
  margin: 5px 0;
  display: inline-block;
  max-width: 300px;
  font-size: 14px;
  position: relative;
  ${(props) =>
    props.user === "my"
      ? `
      background-color: #cbcf52;
      border-radius: 14px 14px 14px 0;
      padding: 7px 15px 7px 15px;
      float: right;
      clear: both;
      color: #000000;`
      : `
      background-color: #fbd986;
      border-radius: 14px 14px 14px 0;
      padding: 7px 15px 7px 15px;
      float: left;
      clear: both;
      color: #000000;`}
`;
export default ChatMessage;
