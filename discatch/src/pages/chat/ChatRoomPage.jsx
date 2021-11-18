// LIBRARY
import React from "react";

// COMPONENTS
import { Template, ChatRoom } from "../../components";

const ChatRoomPage = (props) => {
  const roomId = props.match.params.roomId;
  return (
    <Template props={props} page="map">
      <ChatRoom roomId={roomId} />
    </Template>
  );
};

export default ChatRoomPage;
