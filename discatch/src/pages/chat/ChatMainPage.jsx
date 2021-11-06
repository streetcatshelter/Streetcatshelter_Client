import React from "react";
import { Template, ChatMain } from "../../components";

const ChatMainPage = (props) => {
  return (
    <Template props={props} page="map">
      <ChatMain />
    </Template>
  );
};

export default ChatMainPage;
