// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { myPageApi } from "../../shared/axios";

const _setNotice =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getNotice();
      dispatch(setNotice(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getOneNotice =
  (id) =>
  async (dispatch, getState, { history }) => {
    console.log(id);
    try {
      const { data } = await myPageApi.getOneNotice(id);
      dispatch(getNoticeDetail(data));
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
  noticelist: [],
  noticedetail: [],
};

// 리듀서
const mypage = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    setNotice: (state, action) => {
      state.noticelist = action.payload;
    },
    getNoticeDetail: (state, action) => {
      state.noticedetail = action.payload;
    },
  },
});

export const mypageActions = { _setNotice, _getOneNotice };
export const { setNotice, getNoticeDetail } = mypage.actions;
export default mypage;
