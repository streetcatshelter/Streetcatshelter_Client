import React from "react";
import { Template, ChatMain } from "../components";

const Chat = (props) => {
  return (
    <Template props={props} page="map">
      <ChatMain />
    </Template>
  );
};

export default Chat;
