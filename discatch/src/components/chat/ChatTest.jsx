import React, { useEffect } from "react";

import { Image } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/modules/chat";
import styled from "styled-components";

const ChatTest = (props) => {
  const dispatch = useDispatch();
  const ChatInfo = useSelector((state) => state.chat.chatinfo);
  const NickName = useSelector((state) => state.mypage.userInfo.nickname);
  console.log(NickName);
  useEffect(() => {
    dispatch(chatActions._getRoomInfo(props.roomId));
  }, []);

  return (
    <ChatWrap>
      <Header>
        {/* <button class="back-btn">
            <img src="imgs/left-arrow.png" width="30" height="30">  
          </button> */}
        <Image width="40px" height="40px" borderRadius="20px" />
        <InfoBlock>
          <p>치치누나</p>
          <p>1시간 전에 활동</p>
        </InfoBlock>
        <CallBox></CallBox>
      </Header>

      <ChatBox>
        {ChatInfo.map((chat, idx) => {
          return (
            <div key={idx}>
              {chat.userName === NickName ? (
                <BubbleBox user="my">
                  <p>{chat.modifiedAt}</p>
                  <Bubble user="my">{chat.message} </Bubble>
                </BubbleBox>
              ) : (
                <BubbleBox user="friend">
                  <Bubble user="friend">{chat.message}</Bubble>
                  <p>{chat.modifiedAt}</p>
                </BubbleBox>
              )}
            </div>
          );
        })}
      </ChatBox>
    </ChatWrap>
  );
};

const ChatWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 540px;
  background-color: #ffffff;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 12px 5px 8px;
  align-items: center;
  box-shadow: 0 0 1px #999999;
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
  justify-content: space-between;
`;

const ChatBox = styled.div`
  height: 400px;
  padding: 12px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const BubbleBox = styled.div`
  margin: 5px 0px;
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
export default ChatTest;
