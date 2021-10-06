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
export const __createCatDetailInfo =
  (catId, newPost) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.createCatDetail(catId, newPost);
      dispatch(createCatDetailInfo(data));
    } catch (err) {
      console.error(err);
    }
  };

// export const __createCatDetailInfo = (
//   catId,   water,feed,snack, diary, catTags, latitude, longitude
// ) => {
//   return function (dispatch, getState, { history }) {
//     const imgFile = getState().image.file;
//     if (imgFile.length) {
//       dispatch(
//         imgActions.uploadImageDB(() => {
//           const imageUrl = getState().image.imageUrl;

//           const catInfo = {
//             catImage: imageUrl,
//             catName: catName,
//             catTag: catTag,
//             latitude: latitude,
//             location: location,
//             longitude: longitude,
//             neutering: neutering,
//             username: username,
//           };
//           instance
//             .post('/cat/create', catInfo)
//             .then((res) => {
//               dispatch(createCatInfo(catInfo));
//               dispatch(imgActions.setInitialState());
//               history.push('/');
//             })
//             .catch((err) => {
//               console.error(err);
//             });
//         }),
//       );
//     }
//   };
// };

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

// GET ✅
// 지역에 따라 cat 가져오기 ✅
export const __getCatLocation =
  (location, page = 1, size = 10) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getCatLocation(location, page, size);
      // console.log(data);
      dispatch(getCatLocation(data.content));
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
  details: [],
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
        image: action.payload.catImage,
      };
      state.details.push(detailInfo);
    },

    getCatLocation: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { createCatInfo, createCatDetailInfo, getCatLocation } =
  cat.actions;

export default cat;
