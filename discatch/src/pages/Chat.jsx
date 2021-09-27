import React from "react";
import { Template, ChatBoxs } from "../components";
const Chat = (props) => {
  return (
    <Template props={props} page="map">
      <ChatBoxs />
    </Template>
  );
};

export default Chat;
