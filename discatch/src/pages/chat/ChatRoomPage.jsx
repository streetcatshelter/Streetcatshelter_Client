import React from "react";
import { Template, ChatEx, ChatRoom } from "../../components";
const ChatRoomPage = (props) => {
  const roomId = props.match.params.roomId;
  return (
    <Template props={props} page="map">
      <ChatRoom roomId={roomId} />
    </Template>
  );
};

export default ChatRoomPage;
