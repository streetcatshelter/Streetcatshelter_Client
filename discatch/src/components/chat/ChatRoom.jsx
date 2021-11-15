import React from "react";
import { ChatEx, ChatTest } from "..";

const ChatRoom = (props) => {
  const roomId = props.roomId;

  return (
    <div>
      <ChatTest roomId={roomId} />
      <ChatEx roomId={roomId} />
    </div>
  );
};

export default ChatRoom;
