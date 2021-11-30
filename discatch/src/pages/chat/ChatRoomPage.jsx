// LIBRARY
import React from "react";

// COMPONENTS
import { Template, ChatRoom } from "../../components";

const ChatRoomPage = (props) => {
  const location = props.location.state?.location
  const roomId = props.match.params.roomId;
  
  return (
    <Template props={props} page="map">
      <ChatRoom roomId={roomId} location={location}/>
    </Template>
  );
};

export default ChatRoomPage;
