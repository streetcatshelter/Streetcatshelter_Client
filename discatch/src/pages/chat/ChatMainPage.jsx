// LIBRARY
import React from "react";
import { Template, ChatMain } from "../../components";

const ChatMainPage = (props) => {
  return (
    <Template props={props} page="map">
      <ChatMain props={props}/>
    </Template>
  );
};

export default ChatMainPage;
