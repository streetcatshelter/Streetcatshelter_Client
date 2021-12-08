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
      dispatch(itemLoading(true));
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
      dispatch(itemLoading(true));
      const { data } = await myPageApi.getLikedAllCat();
      dispatch(setLikedAllCat(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getMoreLikedAllCat =
  (page) =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(itemLoading(true));
      const { data } = await myPageApi.getMoreLikedAllCat(page);
      dispatch(setMoreLikedAllCat(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getNotice =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(itemLoading(true));
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
      dispatch(itemLoading(true));
      const { data } = await myPageApi.getOneNotice(id);
      dispatch(setOneNotice(data));
    } catch (e) {
      console.log(e);
    }
  };

const _getUserProfile =
  (userRandomId) =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(userLoading(true));
      const { data } = await myPageApi.getUserProfile(userRandomId);
      dispatch(setUserProfile(data));
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
  pageLoaded: false,
  itemLoaded: false,
  userLoaded: false,
  userRandomProfile: [],
};

// REDUCER
const mypage = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    setNotice: (state, action) => {
      state.noticelist = action.payload;
      state.itemLoaded = false;
    },
    setOneNotice: (state, action) => {
      state.noticedetail = action.payload;
      state.itemLoaded = false;
    },
    setLikedAllCat: (state, action) => {
      state.likedAllCat = action.payload;
      state.itemLoaded = false;
    },
    setMoreLikedAllCat: (state, action) => {
      return {
        ...state,
        likedAllCat: [...state.likedAllCat, ...action.payload],
        itemLoaded: false,
      };
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      const Village = [...action.payload.locationList];
      state.userVillage = Village;
    },

    setUserProfile: (state, action) => {
      state.userRandomProfile = action.payload;
      state.userLoaded = false;
    },
    setCalendar: (state, action) => {
      state.calendar = action.payload;
      state.itemLoaded = false;
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
    pageLoading: (state, action) => {
      state.pageLoaded = action.payload;
    },
    userLoading: (state, action) => {
      state.userLoaded = action.payload;
    },
    itemLoading: (state, action) => {
      state.itemLoaded = action.payload;
    },

    deleteUserLikedCat: (state, action) => {
      console.log(" 호출됨");
      return {
        ...state,
        likedAllCat: state.likedAllCat.filter(
          (cat) => cat.catId !== action.payload
        ),
      };
    },
    resetList: (state, action) => {
      state.likedAllCat = [];
    },
  },
});

export const mypageActions = {
  _getNotice,
  _getOneNotice,
  _getCalender,
  _getCalenderDetail,
  _getLikedAllCat,
  _getMoreLikedAllCat,
  _getUserInfo,
  _getUserProfile,
  _editMyInfo,
  _getLevelUp,
};

export const {
  setNotice,
  setOneNotice,
  setLikedAllCat,
  setMoreLikedAllCat,
  setUserInfo,
  setCalendar,
  setCalendarDetail,
  saveVillage,
  deleteVillage,
  pageLoading,
  userLoading,
  itemLoading,
  deleteUserLikedCat,
  setUserProfile,
  resetList,
} = mypage.actions;

export default mypage;
