// LIBRARY
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import {
  Template,
  ChatMain,
  SecondHeader,
  SecondSpinner,
} from "../../components";

// REDUX
import { useDispatch } from "react-redux";
import { chatActions } from "../../redux/modules/chat";

const ChatMainPage = (props) => {
  const isLoaded = useSelector((state) => state.chat.isLoaded);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chatActions._getRooms());
  }, []);

  return (
    <>
      <SecondSpinner visible={isLoaded} />
      <Template props={props} page="map">
        <SecondHeader title="채팅" />
        <ChatMain props={props} />
      </Template>
    </>
  );
};

export default ChatMainPage;
