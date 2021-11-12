import React, { useEffect } from "react";
import { chatActions } from "../../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import { ChatEx } from "..";
const ChatRoom = (props) => {
  const dispatch = useDispatch();
  const RoomDetail = useSelector((state) => state.chat.room);
  console.log(RoomDetail);
  const roomId = props.roomId;

  useEffect(() => {
    dispatch(chatActions._getRoom(roomId));
  }, []);
  return (
    <div>
      채팅방입니다!
      <ChatEx roomId={roomId} />
    </div>
  );
};

export default ChatRoom;
