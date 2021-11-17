// LIBRARY
import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  villageList: ["망원동", "합정동", "평창동"],
  keywordList: ["망원동"],
  typeKeywordList: [],
  resultList: [],
};

// 리듀서
const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    searchMap: (state, action) => {
      const keyword = action.payload;
      state.keywordList.unshift(keyword);
    },
    searchKeywordMap: (state, action) => {
      const keyword = action.payload;
      console.log(keyword);
      state.typeKeywordList.unshift(keyword);
      console.log(keyword);
    },
    searchResult: (state, action) => {
      const ResultList = action.payload;
      state.resultList.unshift(ResultList);
    },
  },
});

export const mapActions = {};
export const { searchMap, searchKeywordMap, searchResult } = map.actions;
export default map;
