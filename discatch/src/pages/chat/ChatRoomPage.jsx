// LIBRARY
import React, { useEffect } from "react";

// COMPONENTS
import { Template, ChatRoom, ChatMessage } from "../../components";
import { useDispatch } from "react-redux";

// REDUX
import { chatActions } from "../../redux/modules/chat";

const ChatRoomPage = (props) => {
  const dispatch = useDispatch();
  const location = props.location.state?.location;
  const roomId = props.match.params.roomId;
  useEffect(() => {
    dispatch(chatActions._getAllMessage(roomId));
    dispatch(chatActions._getRoomInfo(roomId));
  }, []);
  return (
    <Template props={props} page="map">
      <ChatRoom roomId={roomId} location={location}>
        <ChatMessage />
      </ChatRoom>
    </Template>
  );
};

export default ChatRoomPage;
