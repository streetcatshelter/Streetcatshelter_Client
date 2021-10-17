// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { myPageApi } from "../../shared/axios";

const _getUserInfo =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getUserInfo();
      dispatch(setUserInfo(data));
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
      dispatch(setCalendar(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getLikedAllCat =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getLikedAllCat();
      dispatch(setLikedAllCat(data));
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
  likedAllCat: [],
  userInfo: [],
  calendar: [],
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
    setLikedAllCat: (state, action) => {
      state.likedAllCat = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setCalendar: (state, action) => {
      state.calendar = action.payload;
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
export const {
  setNotice,
  setOneNotice,
  setLikedAllCat,
  setUserInfo,
  setCalendar,
} = mypage.actions;
export default mypage;
