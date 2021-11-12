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

const _getRoom =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getRoom(roomId);
      console.log(data);
      dispatch(setRoom(data));
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
      console.log(data);
      dispatch(setRoom(data));
      history.push(`/chat/room/${data.roomId}`);
    } catch (e) {
      console.log(e);
    }
  };

const _getAllMessage =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getAllMessage(roomId);
      console.log(data);
      // dispatch(setRoom(data));
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
  chatlist: [],
  roomlist: [],
};

// 리듀서
const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // setMessage: (state, action) => {
    //   const Message = action.payload;
    //   state.chatlist.push(Message);
    // },
    setRooms: (state, action) => {
      state.roomlist = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const chatActions = { _getRooms, _createRoom, _getRoom, _getAllMessage };
export const { setMessage, setRooms, setRoom } = chat.actions;
export default chat;
