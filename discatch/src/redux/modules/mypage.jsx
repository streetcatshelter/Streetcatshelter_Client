// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { myPageApi } from "../../shared/axios";

const _setNotice =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getNotice();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
  list: [],
};

// 리듀서
const mypage = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    // loginKaKao: (state, action) => {
    //   const keyword = action.payload;
    //   state.list.unshift(keyword);
    // },
  },
});

export const mypageActions = { _setNotice };

export default mypage;
