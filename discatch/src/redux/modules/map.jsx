// LIBRARY
import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  villageList: [],
  keywordList: [],
  typeKeywordList: [],
  resultList: [],
  itemLoaded: [],
};

// REDUCER
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
      state.typeKeywordList.unshift(keyword);
    },
    searchResult: (state, action) => {
      const ResultList = action.payload;
      state.resultList.unshift(ResultList);
    },
    itemLoading: (state, action) => {
      state.itemLoaded = action.payload;
    },
  },
});

export const mapActions = {};
export const { searchMap, searchKeywordMap, searchResult, itemLoading } =
  map.actions;
export default map;
