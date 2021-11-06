import React, { useEffect } from "react";
import { chatActions } from "../../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import { ChatEx } from "..";
const ChatRoom = () => {
  const dispatch = useDispatch();
  const Rooms = useSelector((state) => state.chat.roomlist);
  console.log(Rooms);

  useEffect(() => {
    dispatch(chatActions._getRooms());
  }, []);

  return (
    <div>
      <ChatEx />
    </div>
  );
};

export default ChatRoom;
