// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import { Template, ChatMain, SecondHeader, Spinner } from "../../components";

const ChatMainPage = (props) => {
  const isLoaded = useSelector((state) => state.mypage.isLoaded);

  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props} page="map">
        <SecondHeader title="채팅" />
        <ChatMain props={props} />
      </Template>
    </>
  );
};

export default ChatMainPage;
