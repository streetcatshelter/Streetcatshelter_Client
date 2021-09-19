// LIBRARY
import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  villageList: ["망원동", "합정동", "평창동"],
  keywordList: ["망원동"],
};

// 리듀서
const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    searchMap: (state, action) => {
      const keyword = action.payload;
      console.log(keyword);
      state.keywordList.unshift(keyword);
    },
  },
});

export const mapActions = {};
export const { searchMap } = map.actions;
export default map;
