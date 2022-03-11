// LIBRARY
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import {
  Template,
  ChatMain,
  SecondHeader,
  SecondSpinner,
  EmptyPost,
} from "components";

// REDUX
import { useDispatch } from "react-redux";
import { chatActions } from "redux/modules/chat";

// utils
import { checkedOverDay } from "utils";

const ChatMainPage = (props) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.chat.isLoaded);
  const rooms = useSelector((state) => state.chat.roomlist);
  //채팅리스트가져오기
  useEffect(() => {
    dispatch(chatActions._getRooms());
  }, [dispatch]);

  return (
    <>
      <SecondSpinner visible={isLoaded} />
      <Template props={props} page="map">
        <SecondHeader title="채팅" />
        <div>
          {rooms && rooms.length > 0 ? (
            <>
              {rooms.map((room, idx) => {
                return (
                  <ChatMain
                    props={props}
                    sendtime={checkedOverDay(room.lastActivity)}
                    room={room}
                    key={idx}
                  />
                );
              })}
            </>
          ) : (
            <EmptyPost path="chat" />
          )}
        </div>
      </Template>
    </>
  );
};

export default ChatMainPage;
