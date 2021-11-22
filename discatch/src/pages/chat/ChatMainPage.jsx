// LIBRARY
import React from "react";
import { Template, ChatMain, SecondHeader } from "../../components";

const ChatMainPage = (props) => {
  return (
    <Template props={props} page="map">
      <SecondHeader title="채팅" />
      <ChatMain props={props} />
    </Template>
  );
};

export default ChatMainPage;
