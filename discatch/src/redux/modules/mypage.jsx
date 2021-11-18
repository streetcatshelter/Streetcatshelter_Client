// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import instance, { myPageApi } from "../../shared/axios";

// REUDX
import { userActions } from "../modules/user";
import { imgActions } from "./image";

const _getUserInfo =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(loading(true));
      const { data } = await myPageApi.getUserInfo();
      dispatch(setUserInfo(data));
    } catch (e) {
      console.log(e);
      dispatch(userActions._logout());
    }
  };
const _getLevelUp =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getLevelUp();
    } catch (e) {
      console.log(e);
      dispatch(userActions._logout());
    }
  };
const _getCalender =
  (year, month) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getCalendar(year, month);
      dispatch(setCalendar(data));
    } catch (e) {
      console.log(e);
    }
  };
const _getCalenderDetail =
  (year, month, elm) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await myPageApi.getCalendarDetail(year, month, elm);
      if (data.length === 0) {
        return;
      } else {
        return dispatch(setCalendarDetail(data));
      }
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
    try {
      const { data } = await myPageApi.getOneNotice(id);
      dispatch(setOneNotice(data));
    } catch (e) {
      console.log(e);
    }
  };

const _editMyInfo = (NickName, Village) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;

          const userInfo = {
            location: Village,
            nickname: NickName,
            profileUrl: imageUrl,
          };
          instance
            .put("/mypage/user/information", userInfo)
            .then((res) => {
              dispatch(imgActions.setInitialState());
              window.alert("사용자 정보가 수정됐습니다.");
              history.push("/mypage");
            })
            .catch((err) => {
              console.error(err);
              window.alert(
                "사용자 정보 수정에 실패하였습니다. 다시 시도해주시길 바랍니다."
              );
            });
        })
      );
    } else {
      const userInfo = {
        location: Village,
        nickname: NickName,
        profileUrl: null,
      };
      instance
        .put("/mypage/user/information", userInfo)
        .then((res) => {
          dispatch(imgActions.setInitialState());
          window.alert("사용자 정보가 수정됐습니다.");
          history.push("/mypage");
        })
        .catch((err) => {
          console.error(err);
          window.alert(
            "사용자 정보 수정에 실패하였습니다. 다시 시도해주시길 바랍니다."
          );
        });
    }
  };
};

// INITIAL STATE
const initialState = {
  noticelist: [],
  noticedetail: [],
  likedAllCat: [],
  userInfo: [],
  calendar: [],
  calendardetail: [
    { catId: null, catName: null, food: false, snack: false, water: false },
  ],
  userVillage: [],
  isLoaded: false,
};

// REDUCER
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
      const Village = [...action.payload.locationList];
      state.userVillage = Village;
      state.isLoaded = false;
    },
    setCalendar: (state, action) => {
      state.calendar = action.payload;
    },
    setCalendarDetail: (state, action) => {
      state.calendardetail = action.payload;
    },
    saveVillage: (state, action) => {
      const Village = action.payload;
      state.userVillage.unshift(Village);
    },
    deleteVillage: (state, action) => {
      return {
        ...state,
        userVillage: state.userVillage.filter(
          (village) => village !== action.payload
        ),
      };
    },
    loading: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const mypageActions = {
  _getNotice,
  _getOneNotice,
  _getCalender,
  _getCalenderDetail,
  _getLikedAllCat,
  _getUserInfo,
  _editMyInfo,
  _getLevelUp,
};

export const {
  setNotice,
  setOneNotice,
  setLikedAllCat,
  setUserInfo,
  setCalendar,
  setCalendarDetail,
  saveVillage,
  deleteVillage,
  loading,
} = mypage.actions;
export default mypage;
