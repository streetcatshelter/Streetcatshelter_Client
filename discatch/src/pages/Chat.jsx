import React from "react";
import { Template, ChatEx, ChatRoom } from "../components";

const Chat = (props) => {
  return (
    <Template props={props} page="map">
      <ChatRoom />
    </Template>
  );
};

export default Chat;
