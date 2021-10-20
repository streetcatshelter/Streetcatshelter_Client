import React from "react";
import { Template, ChatBoxs, ChatWrite, ChatTest } from "../components";
import styled from "styled-components";
const Chat = (props) => {
  return (
    <Template props={props} page="map">
      <Wrapper>
        <ChatTest />
      </Wrapper>
    </Template>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
`;

export default Chat;
