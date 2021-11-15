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
      console.log(data);
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
      history.push(`/chat/room/${data.roomId}`);
    } catch (e) {
      console.log(e);
    }
  };

const _getAllMessage =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    console.log(roomId.roomId);
    try {
      const { data } = await chatApi.getAllMessage(roomId);
      console.log(data);
      // dispatch(setRoom(data));
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
  roomlist: [],
  chatinfo: [],
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
  },
});

export const chatActions = {
  _getRooms,
  _createRoom,
  _getRoomInfo,
  _getAllMessage,
};
export const { setChatInfo, setRooms } = chat.actions;
export default chat;
