// library
import { createSlice } from '@reduxjs/toolkit';
// api
import instance, { catApi } from '../../shared/axios';
// redux
import { imgActions } from './image';

// POST ✅
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

// Cat 상세 정보 작성
export const _catDetailInfoCreate =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.catDetailCreate();
    } catch (err) {
      console.error(err);
    }
  };

// Cat 댓글 생성
export const _catCommentCreate =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.catCommentCreate();
    } catch (err) {
      console.error(err);
    }
  };

// Cat 즐겨찾기
export const _catFavorite =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.catFavorite();
    } catch (err) {
      console.error(err);
    }
  };

// GET ✅
// 지역에 따라 cat 가져오기 ✅
export const __getCatLocation =
  (location, page = 1, size = 30) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatLocation(location, page, size);
      let catList = data.content;
      // console.log(catList);
      // if (catList.length < size + 1) {
      //   dispatch(getCatLocation(catList, null));
      //   return;
      // }
      // dispatch(getCatLocation(catList, size));
      dispatch(getCatLocation(catList));
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세 페이지(캘린더)

// Cat 상세 페이지(갤러리)

// Cat 상세 페이지(집사일기)

// Cat 댓글 더보기

// DELETE ✅
// Cat 상세정보 삭제

// Cat 댓글 삭제

// UPDATE ✅
// Cat 상세정보 수정

const initialState = {
  list: [],
  page: 1,
  size: 10,
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

    getCatLocation: (state, action) => {
      state.list = action.payload;
      // state.start = action.payload.number;
    },
  },
});

export const { createCatInfo, getCatLocation } = cat.actions;

export default cat;
