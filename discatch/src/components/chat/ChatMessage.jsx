// LIBRARY
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// MOMENT
import "moment/locale/ko";
import moment from "moment";

// STYLE
import styled from "styled-components";

const ChatMessage = () => {
  const commentsEndRef = useRef(null);
  const lastMessages = useSelector((state) => state.chat.chatmessage);
  const nickName = useSelector((state) => state.mypage.userInfo.nickname);
  // 댓글 스크롤 밑으로 이동
  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [lastMessages]);

  return (
    <div>
      {lastMessages ? (
        <ChatBox>
          {lastMessages.map((lastmessage, idx) => {
            console.log(lastmessage);
            // const createdAt = moment(lastmessage.time).format(
            //   "YYYY-MM-DD hh:mm"
            // );
            // const hourDiff = moment(createdAt).diff(moment(), "hours");
            // // format 1, 수정한 지 하루 경과했을 경우 : YYYY.MM.DD hh:mm
            // const updated = moment(createdAt).format(" YYYY-M-D hh:mm");
            // // format 2, 수정한 지 하루 이내일 경우 : 'n 분 전, n 시간 전'
            // const recentlyUpdated = moment(createdAt).fromNow();
            // const sendtime = hourDiff > -22 ? recentlyUpdated : updated;
            return (
              <div key={idx}>
                {lastmessage.sender === nickName ? (
                  <div>
                    <BubbleTop user="my">{lastmessage.sender}</BubbleTop>
                    <BubbleBox user="my">
                      <p>{lastmessage.time}</p>
                      <Bubble user="my">{lastmessage.message} </Bubble>
                    </BubbleBox>
                  </div>
                ) : (
                  <div>
                    <BubbleTop>{lastmessage.sender}</BubbleTop>
                    <BubbleBox user="friend">
                      <Bubble user="friend">{lastmessage.message} </Bubble>
                      <p>{lastmessage.time}</p>
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

  margin: 0px;
  font-weight: 900;
  font-size: 12px;
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
    @media screen and (max-width: 320px) {
      font-size: 8px;
    }
  }
  @keyframes fadeIn {
    from {
      tranform: translateX(10px);
      opacity: 0;
    }
    to {
      transfrom: none;
      opacity: 1;
    }
  }
  animation: fadeIn 0.3s linear;
`;
const Bubble = styled.div`
  margin: 5px 0;
  display: inline-block;
  max-width: 300px;
  font-size: 12px;
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
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
