// API
import { createSlice } from "@reduxjs/toolkit";
import instance, { catApi } from "../../shared/axios";

// REDUX
import { imgActions } from "./image";

// 기본 정보 작성
export const __createCatInfo = (
  catName,
  catTag,
  neutering,
  location,
  NickName,
  latitude,
  longitude,
  pathLocation
) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          const catInfo = {
            catImage: imageUrl,
            catName: catName,
            catTag: catTag,
            latitude: latitude,
            location: location,
            longitude: longitude,
            neutering: neutering,
            username: NickName,
          };
          instance
            .post("/cat/create", catInfo)
            .then((res) => {
              dispatch(imgActions.setInitialState());
              dispatch(setInitialState([]));
              history.push({
                pathname: "/",
                state: { location: pathLocation },
              });
              history.go(0);
            })
            .catch((err) => {
              console.error(err);
            });
        })
      );
    }
  };
};

// 상세 정보 작성
export const __createCatDetailInfo = (
  catTags,
  diary,
  food,
  latitude,
  longitude,
  snack,
  water,
  catId
) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length < 4) {
      dispatch(
        imgActions.uploadImagesDB(() => {
          const imageUrl = getState().image.imageUrls;

          const detailInfo = {
            catImages: imageUrl,
            catTags: catTags,
            diary: diary,
            food: food,
            latitude: latitude,
            longitude: longitude,
            snack: snack,
            water: water,
            catId: catId,
          };
          instance
            .post(`/cat/detail/${catId}`, detailInfo)
            .then((res) => {
              dispatch(imgActions.setInitialState());
            })
            .catch((err) => {
              console.error(err);
            });
        })
      );
    } else if (imgFile.length > 3) {
      alert("사진은 최대 3장까지 등록할 수 있어요!");
    } else {
      return;
    }
  };
};

// 지역에 따라 모든 게시물 불러오기
export const __getAllCatLocation =
  (location, limit = 99999) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatLocation(location, limit);
      dispatch(getCatLocation(data, limit));
    } catch (err) {
      console.error(err);
    }
  };

// 지역에 따라 게시물 불러오기
export const __getCatLocation =
  (location, limit = 10) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatLocation(location, limit);
      if (data.length < limit + 1) {
        dispatch(getCatLocation(data, null));
        return;
      }
      dispatch(getCatLocation(data, limit));
    } catch (err) {
      console.error(err);
    }
  };

// 게시물 더보기
export const __getMoreCat =
  (location, limit = 11) =>
  async (dispatch, getState, { history }) => {
    let start = getState().cat.start;

    if (start === null) {
      return;
    } else {
      start += 1;
    }

    try {
      const { data } = await catApi.getMoreCat(location, start, limit);
      if (data.length < limit + 1) {
        dispatch(getMoreCat(data, null));
        return;
      }
      data.content.pop();
      dispatch(getMoreCat(data, start + limit));
    } catch (err) {
      console.error(err);
    }
  };

// 상세 정보
export const __getCatDetail =
  (catDetailId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatDetail(catDetailId);
      dispatch(getCatDetail(data));
    } catch (err) {
      console.error(err);
    }
  };

export const __getCatInfo =
  (catId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatInfo(catId);
      dispatch(getCatInfo(data));
    } catch (err) {
      console.error(err);
    }
  };

// 상세 페이지(캘린더)
export const __getCalendar =
  (catId, month, year) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatCalendar(catId, month, year);
      dispatch(getCalendar(data.date));
    } catch (err) {
      console.error(err);
    }
  };

// 상세 페이지(집사일기)
export const __getDiary =
  (catId, size = 30) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatDiary(catId, size);
      dispatch(getDiary(data));
    } catch (err) {
      console.error(err);
    }
  };

// 상세 페이지(갤러리)
export const __getGallery =
  (catId, size = 30) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatGallery(catId, size);
      dispatch(getGallery(data));
    } catch (err) {
      console.error(err);
    }
  };

// 기본 정보 좋아요
export const __catLike =
  (catId, location, path) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.catLike(catId);
      path === "detail"
        ? dispatch(__getCatInfo(catId))
        : dispatch(__getCatLocation(location));
    } catch (err) {
      console.error(err);
    }
  };

// 상세 정보 좋아요
export const __catDetailLike =
  (catDetailId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.catDetailLike(catDetailId);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세정보 삭제 💩
export const __deleteCatDetail =
  (catDetailId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.deleteCatDetail(catDetailId);
      window.alert("게시물 삭제 완료!");
      history.goBack();
    } catch (err) {
      console.error(err);
    }
  };

const initialState = {
  list: [],
  detail: [],
  calendar: [],
  gallery: [],
  diary: [],
  page: 0,
  start: 0,
  catinfo: [],
  hashtag: [],
};

const cat = createSlice({
  name: "cat",
  initialState,
  reducers: {
    createCatInfo: (state, action) => {
      const catInfo = {
        image: action.payload.catImage,
        catName: action.payload.catName,
        catTag: action.payload.catTag,
        latitude: action.payload.latitude,
        location: action.payload.location,
        longitude: action.payload.longitude,
        neutering: action.payload.neutering,
        username: action.payload.username,
      };
      state.list.push(catInfo);
    },

    createCatDetailInfo: (state, action) => {
      const detailInfo = {
        image: action.payload.catImages,
        catTag: action.payload.catTags,
        diary: action.payload.diary,
        food: action.payload.food,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        snack: action.payload.snack,
        water: action.payload.water,
      };
      state.detail.push(detailInfo);
    },

    getCatLocation: (state, action) => {
      state.list = action.payload;
    },

    getMoreCat: (state, action) => {
      return {
        ...state,
        list: [...state.list, ...action.payload],
        start: state.start + 1,
      };
    },

    getCatDetail: (state, action) => {
      state.detail = action.payload;
    },
    getCatInfo: (state, action) => {
      state.catinfo = action.payload;
    },

    getCalendar: (state, action) => {
      state.calendar = action.payload;
    },

    getDiary: (state, action) => {
      state.diary = action.payload;
    },

    getGallery: (state, action) => {
      state.gallery = action.payload;
    },

    deleteCatDetail: (state, action) => {
      console.log("삭제 요청 완료");
    },

    addHashTag: (state, action) => {
      state.hashtag.push(action.payload);
    },

    deleteHashTag: (state, action) => {
      return {
        ...state,
        hashtag: state.hashtag.filter((tag) => tag !== action.payload),
      };
    },
    setInitialState: (state, action) => {
      state.hashtag = initialState.hashtag;
    },
  },
});

export const {
  createCatInfo,
  createCatDetailInfo,
  createCatDetailComment,
  getCatAllLocation,
  getCatLocation,
  getMoreCat,
  getCatDetail,
  getCatInfo,
  getCalendar,
  getDiary,
  getGallery,
  deleteCatDetail,
  addHashTag,
  deleteHashTag,
  setInitialState,
} = cat.actions;

export default cat;
