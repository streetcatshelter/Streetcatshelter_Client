// library
import { createSlice } from '@reduxjs/toolkit';
// api
import instance, { catApi } from '../../shared/axios';
// redux
import { imgActions } from './image';

// POST
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

// Cat 상세 정보 작성
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
    const id = getState();
    console.log(id);
    const imgFile = getState().image.file;
    if (imgFile.length < 4) {
      dispatch(
        imgActions.uploadImagesDB(() => {
          const imageUrl = getState().image.imageUrls;
          const detailInfo = {
            catImage: imageUrl,
            catTags: catTags,
            diary: diary,
            food: food,
            latitude: latitude,
            longitude: longitude,
            snack: snack,
            water: water,
          };
          instance
            .post(`/cat/detail/${catId}`, detailInfo)
            .then((res) => {
              dispatch(createCatDetailInfo(detailInfo));
              dispatch(imgActions.setInitialState());
              // history.push(`/catdetail/${catId}`);
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

// GET
// 지역에 따라 cat 가져오기 ✅
export const __getCatLocation =
  (location, size = 15) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.getCatLocation(location, size);
      let catList = data.data;

      dispatch(getCatLocation(catList));
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세 페이지(캘린더)
export const __getCatCalendar =
  (catId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.getCatCalendar(catId);
      const catDetail = data.data;
      dispatch(getCatCalendar(catDetail));
    } catch (err) {
      console.error(err);
    }
  };

// Cat 상세 페이지(갤러리)

// Cat 상세 페이지(집사일기)

// Cat 댓글 더보기

// DELETE
// Cat 상세정보 삭제

// Cat 댓글 삭제

// UPDATE
// Cat 상세정보 수정

const initialState = {
  list: [],
  detailList: [],
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
    },

    getCatLocation: (state, action) => {
      state.list = action.payload;
    },

    getCatCalendar: (state, action) => {
      state.list = action.payload;
      // console.log(action.payload);
    },
  },
});

export const {
  createCatInfo,
  createCatDetailInfo,
  getCatLocation,
  getCatCalendar,
} = cat.actions;

export default cat;
