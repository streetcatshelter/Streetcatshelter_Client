import React, { useEffect, useState } from "react";
import { Template, ChatBoxs } from "../../components";
import { chatActions } from "../../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "../../redux/configureStore";

const ChatMain = () => {
  const dispatch = useDispatch();
  const Rooms = useSelector((state) => state.chat.roomlist);
  console.log(Rooms);

  useEffect(() => {
    dispatch(chatActions._getRooms());
  }, []);
  return (
    <React.Fragment>
      <Wrapper>
        <Header>채팅</Header>

        {Rooms.map((room, idx) => {
          return (
            <ChatRoom
              key={idx}
              onClick={() => {
                history.push(`/chat/room/${room.roomId}`);
              }}
            >
              <InnerBox>
                <ProfileImg src="http://placeimg.com/100/100/any" alt="any" />
                <ChatInfo>
                  <InfoInner>
                    <p>{room.name}</p>
                    <p>2021-11-01 22:37</p>
                  </InfoInner>
                  <ChatMsg>
                    오늘 한강에 밥주러 언제 가시나요?오늘 한강에 밥주러 언제
                    가시나요?오늘 한강에 밥주러 언제 가시나요?오늘 한강에 밥주러
                    언제 가시나요?오늘 한강에 밥주러 언제 가시나요?오늘 한강에
                    밥주러 언제 가시나요?오늘 한강에 밥주러 언제 가시나요?오늘
                    한강에 밥주러 언제 가시나요?오늘 한강에 밥주러 언제
                    가시나요?오늘 한강에 밥주러 언제 가시나요?오늘 한강에 밥주러
                    언제 가시나요?오늘 한강에 밥주러 언제 가시나요?
                  </ChatMsg>
                </ChatInfo>
              </InnerBox>
            </ChatRoom>
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  height: 30px;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  border-bottom: 0.2px solid rgba(203, 207, 94, 1);
`;

const ChatRoom = styled.div`
  background: rgba(203, 207, 94, 0.3);
  width: 100%;
  height: 80px;
  display: flex;
  margin: 15px 0px;
  cursor: pointer;
  p {
    line-height: 2px;
  }
  &:hover {
    filter: brightness(90%);
  }
`;
const InnerBox = styled.div`
  display: flex;
  height: 70px;
  width: 90%;
  margin: auto;
`;

const ChatInfo = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const InfoInner = styled.div`
  display: flex;
  height: 25px;

  p {
    :nth-child(1) {
      font-weight: 900;
      font-size: 14px;
      margin-right: 10px;
    }
    :nth-child(2) {
      font-size: 12px;
    }
  }
`;

const ChatMsg = styled.div`
  margin: auto 0px;
  display: flex;
  align-items: center;
  height: 2.4em;
  line-height: 1.2em;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProfileImg = styled.img`
  border-radius: 32.5px;
  width: 65px;
  height: 65px;
  margin-right: 15px;
`;

export default ChatMain;
