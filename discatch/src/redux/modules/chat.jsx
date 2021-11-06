import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../../shared/axios";
const _getRooms =
  (year, month) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await chatApi.getRooms(year, month);
      console.log(data);
      dispatch(setRooms(data));
    } catch (e) {
      console.log(e);
    }
  };

const _createRoom =
  (ChatUser) =>
  async (dispatch, getState, { history }) => {
    console.log(ChatUser);
    try {
      const { data } = await chatApi.createRoom(ChatUser);
      console.log(data);
      // dispatch(setRooms(data));
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
  },
});

export const chatActions = { _getRooms, _createRoom };
export const { setMessage, setRooms } = chat.actions;
export default chat;
