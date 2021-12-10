// LIBRARY
import React, { useEffect } from "react";

// COMPONENTS
import {
  Template,
  ChatRoom,
  ChatMessage,
  SecondSpinner,
} from "../../components";

// REDUX
import { chatActions } from "../../redux/modules/chat";

import { useDispatch, useSelector } from "react-redux";

const ChatRoomPage = (props) => {
  const dispatch = useDispatch();
  const location = props.location.state?.location;
  const cntChat = props.location.state?.cntChat;
  const roomId = props.match.params.roomId;
  const isLoaded = useSelector((state) => state.chat.isLoaded);

  useEffect(() => {
    dispatch(chatActions._getRoomInfo(roomId));
  }, [roomId, dispatch]);

  return (
    <Template props={props} page="map">
      <ChatRoom roomId={roomId} location={location} props={props}>
        <ChatMessage roomId={roomId} cntChat={cntChat} />
        <SecondSpinner visible={isLoaded} />
      </ChatRoom>
    </Template>
  );
};

export default ChatRoomPage;
