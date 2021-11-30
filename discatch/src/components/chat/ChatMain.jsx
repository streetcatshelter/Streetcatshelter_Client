// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { EditModalSlide } from "../../components";

// MOMENT
import moment from "moment";

// REDUX
import { history } from "../../redux/configureStore";
import { chatActions } from "../../redux/modules/chat";

const ChatMain = (props) => {
  const dispatch = useDispatch();
  const location = props.props.location.state.location;
  const Rooms = useSelector((state) => state.chat.roomlist);

  useEffect(() => {
    dispatch(chatActions._getRooms());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Wrapper>
        {Rooms.map((room, idx) => {
          const LastActivity = moment(room.lastActivity).format(
            "YYYY-M-D hh:mm"
          );
          return (
            <ChatRoom key={idx}>
              <InnerBox>
                <ProfileImg
                  onClick={() => {
                    history.push(`api/chat/enter/${room.roomId}`);
                  }}
                  src={room.opponentImage}
                  alt={room.opponentImage}
                />
                <ChatInfo>
                  <InfoHead>
                    {" "}
                    <InfoInner
                      onClick={() => {
                        history.push(`api/chat/enter/${room.roomId}`);
                      }}
                    >
                      <p>{room.opponent}</p>
                      {room.lastActivity ? <p>{LastActivity}</p> : ""}
                    </InfoInner>
                    <EditModalSlide
                      FirstBtn="상대방 프로필보기"
                      SecondBtn="채팅방 삭제하기"
                      FirstClick={() => {}}
                      SecondClick={() => {
                        dispatch(chatActions._deleteRoom(room.roomId));
                      }}
                    />
                  </InfoHead>

                  <ChatMsg
                    onClick={() => {
                      history.push({
                        pathname: `api/chat/enter/${room.roomId}`,
                        state: { location },
                      });
                    }}
                  >
                    {room.lastMessage === "메세지가없어요"
                      ? `${room.opponent}와 채팅을 시작해보세요!`
                      : room.lastMessage}
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
const InfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 14px;
  align-items: center;
`;
const InfoInner = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  p {
    :nth-child(1) {
      font-weight: 900;
      font-size: 14px;
      margin: auto 10px auto 0px;
    }
    :nth-child(2) {
      font-size: 12px;
      margin: 0px;
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
