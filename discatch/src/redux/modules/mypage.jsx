// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { myPageApi } from "../../shared/axios";

const _getUserInfo =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getUserInfo();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
const _editUserInfo =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.putUserInfo();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
const _getCalender =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getCalendar();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

const _getLikedAllCat =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getLikedAllCat();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
const _getNotice =
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
      dispatch(setOneNotice(data));
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
    setOneNotice: (state, action) => {
      state.noticedetail = action.payload;
    },
  },
});

export const mypageActions = {
  _getNotice,
  _getOneNotice,
  _getCalender,
  _getLikedAllCat,
  _getUserInfo,
  _editUserInfo,
};
export const { setNotice, setOneNotice } = mypage.actions;
export default mypage;
