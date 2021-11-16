import React from "react";
import { Template, ChatEx } from "../../components";
const ChatRoomPage = (props) => {
  const roomId = props.match.params.roomId;
  console.log(roomId);
  return (
    <Template props={props} page="map">
      <ChatEx roomId={roomId} />
    </Template>
  );
};

export default ChatRoomPage;
