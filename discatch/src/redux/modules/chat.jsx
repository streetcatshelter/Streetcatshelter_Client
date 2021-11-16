import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../../shared/axios";

const _getRooms =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getRooms();
      console.log(data);
      dispatch(setRooms(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getRoomInfo =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getRoomInfo(roomId);
      dispatch(setChatInfo(data));
    } catch (e) {
      console.log(e);
    }
  };

const _createRoom =
  (chatuser) =>
  async (dispatch, getState, { history }) => {
    console.log(chatuser);
    try {
      const { data } = await chatApi.createRoom(chatuser);
      history.push(`/api/chat/enter/${data.roomId}`);
    } catch (e) {
      console.log(e);
      alert("채팅방 만들기에 실패하였습니다😹다시 시도해주세요!");
    }
  };

const _getAllMessage =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getAllMessage(roomId);
      console.log(data);
      dispatch(setChatMessage(data));
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
  roomlist: [],
  chatinfo: [],
  chatmessage: [],
};

// 리듀서
const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.roomlist = action.payload;
    },
    setChatInfo: (state, action) => {
      state.chatinfo = action.payload;
    },
    setChatMessage: (state, action) => {
      state.chatmessage = action.payload;
    },
    pushChatMessage: (state, action) => {
      state.chatmessage.push(action.payload);
    },
  },
});

export const chatActions = {
  _getRooms,
  _createRoom,
  _getRoomInfo,
  _getAllMessage,
};
export const { setChatInfo, setRooms, setChatMessage, pushChatMessage } =
  chat.actions;
export default chat;
