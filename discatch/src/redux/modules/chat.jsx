import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatlist: [],
};

// 리듀서
const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const Message = action.payload;
      state.chatlist.push(Message);
    },
  },
});

export const chatActions = {};
export const { setMessage } = chat.actions;
export default chat;
