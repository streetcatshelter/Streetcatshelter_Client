// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/axios";

const initialState = {
  list: [],
};

// 리듀서
const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    searchMap: (state, action) => {
      const keyword = action.payload;
      state.list.unshift(keyword);
    },
  },
});

export const { searchMap } = map.actions;
export default map;
