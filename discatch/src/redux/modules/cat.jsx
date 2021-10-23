// library
import { createSlice } from '@reduxjs/toolkit';
// api
import instance, { catApi } from '../../shared/axios';
// redux
import { imgActions } from './image';

// Cat 기본 정보 작성 ✅
export const __createCatInfo = (
  catName,
  catTag,
  neutering,
  location,
  username,
  latitude,
  longitude,
) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          // console.log(imageUrl);

          const catInfo = {
            catImage: imageUrl,
            catName: catName,
            catTag: catTag,
            latitude: latitude,
            location: location,
            longitude: longitude,
            neutering: neutering,
            username: username,
          };
          instance
            .post('/cat/create', catInfo)
            .then((res) => {
              dispatch(createCatInfo(catInfo));
              dispatch(imgActions.setInitialState());
              history.push('/');
            })
            .catch((err) => {
              console.error(err);
            });
        }),
      );
    }
  };
};

// Cat 상세 정보 작성 ✅
export const __createCatDetailInfo = (
  catTags,
  diary,
  food,
  latitude,
  longitude,
  snack,
  water,
  catId,
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
            .post(`/cat/detail/${catId}`, { detailInfo })
            .then((res) => {
              dispatch(createCatDetailInfo(detailInfo));
              dispatch(imgActions.setInitialState());
              history.push('/');
              // history.push(`/catdetailinfo/${catId}`);
              // window.location.replace(`/catdetailinfo/${catId}`);
            })
            .catch((err) => {
              console.error(err);
            });
        }),
      );
    } else if (imgFile.length > 3) {
      alert('사진은 최대 3장까지 등록할 수 있어요!');
    } else {
      return;
    }
  };
};

// 지역에 따라 catPost 가져오기 ✅
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

// ✅
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
      const data = await catApi.getMoreCat(location, start, limit);
      const catList = data.data;
      if (catList.length < limit + 1) {
        dispatch(getMoreCat(catList, null));
      }
    } catch (err) {
      console.error(err);
    }
  };

// catPost 상세 정보 ✅
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

// Cat 상세 페이지(캘린더)
export const __getCalendar =
  (catId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatCalendar(catId);
      console.log(data);
      dispatch(getCalendar());
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세 페이지(집사일기)
export const __getDiary =
  (catId, size = 15) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatDiary(catId, size);
      console.log(data);
      dispatch(getDiary(data));
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세 페이지(갤러리)
export const __getGallery =
  (catId, size = 15) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatGallery(catId, size);
      console.log(data);
      dispatch(getCalendar(data));
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세정보 삭제 (보류)
export const __deleteCatInfo =
  (catDetailId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.deleteCatDetail(catDetailId);
      dispatch(deleteCatInfo(catDetailId));
      window.alert('게시물 삭제 완료!');
      history.push('/');
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
};

const cat = createSlice({
  name: 'cat',
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
      state.list.push(detailInfo);
      console.log(action.payload);
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
      state.list = action.payload;
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

    deleteCatInfo: (state, action) => {
      console.log('삭제 완료');
    },
  },
});

export const {
  createCatInfo,
  createCatDetailInfo,
  createCatDetailComment,
  getCatLocation,
  getMoreCat,
  getCatDetail,
  getCalendar,
  getDiary,
  getGallery,
  deleteCatInfo,
} = cat.actions;

export default cat;
