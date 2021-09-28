// LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// REDUX
import { imgActions } from './image';

// 커뮤니티 글 등록
export const addCommunityDB = (category, contents, location, title) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file
    // const username = getState().user; // 나중에 가져오기
    const username = '뽀삐맘';
    if (imgFile.length<6) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          console.log(imageUrl);
          const postInfo = {
            category: category, 
            contents: contents, 
            image: imageUrl, 
            location: location, 
            title: title, 
            username: username,
          };
          instance
            .post('/community/create', postInfo)
            .then((res) => {
              dispatch(addCommunity(postInfo));
              dispatch(imgActions.setInitialState());
              history.goBack();
            })
            .catch((err) => {
              console.log(err);
            });
        }),
      );
    } else if (imgFile.length>5) {
      alert('사진은 최대 5장까지 등록할 수 있어요!');
    } else {
      return;
    }
  };
};

// 커뮤니티 글 가져오기
export const getCommunityDB = (category, location, limit = 5) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/community/category/${category}?page=1&size=${limit}&location=${location}`)
      .then((res) => {
        let communityList = res.data;
        if (communityList.length < limit + 1) {
          dispatch(getCommunity(communityList, null));
          return;
        }

        dispatch(getCommunity(communityList, limit));
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!');
        console.log(err);
      });
  };
};

export const getMoreCommunityDB = (category, location, limit = 6, ) => {
  return function (dispatch, getState, { history }) {
    let start = getState().community.start;

    if (start === null) {
      return;
    } else {
      start += 1;
    }

    instance
      .get(`/community/category/${category}?page=${start}&size=${limit}&location=${location}`)
      .then((res) => {
        const communityList = res.data;
        if (communityList.length < limit + 1) {
          dispatch(getMoreCommunity(communityList, null));
          return;
        }
        communityList.content.pop();
        dispatch(getMoreCommunity(communityList, start + limit));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// 커뮤니티 상세 가져오기
export const getOneCommunityDB = (communityId = '') => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/community/${communityId}`)
      .then((res) => {
        let detailCommunity = res.data;
        dispatch(getOneCommunity(detailCommunity));
      })
      .catch((err) => {
        console.error(err);
        console.log(communityId);
      });
  };
};

// 커뮤니티 수정
export const editCommunityDB = (communityId, category, editcontents, location, editTitle) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    const username = '뽀삐맘'; // 나중에 수정
    if (imgFile.length<6) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          const newimgFile = imageUrl.filter((element, i) => element != null); // null 값 제거
          instance
            .put(`/community/${communityId}`, {
              category: category,
              contents: editcontents,
              image: newimgFile,
              location:location,
              title: editTitle,
              username: username,
            })
            .then((res) => {
              window.alert('게시글 수정 완료');
              history.goBack();
            })
            .catch((err) => {
              console.log(err);
            });
        }),
      );
    } else if (imgFile.length>5) {
      alert('사진은 최대 5장까지 등록할 수 있어요!');
    } else {
      return;
    }
  };
};

// 커뮤니티 글 삭제
export const deleteCommunityDB = (communityId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/community/${communityId.communityId}`)
      .then((res) => {
        dispatch(deleteCommunity(communityId));
        window.alert('게시물 삭제 완료');
        history.push('/community');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 커뮤니티 댓글 작성
export const addCommunityCommentDB = (contents, communityId) => {
  return function (dispatch, getState, { history }) {
    const username = '뽀삐맘'; // 수정 필요
    // const username = getState().user; // 나중에 가져오기
    instance
      .post(`/community/comment/${communityId}`, { contents, username })
      .then((res) => {
        dispatch(addCommunityComment({ contents, username }));
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 커뮤니티 댓글 삭제
export const deleteCommunityCommentDB = (communityId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/community/comment/${communityId}`)
      .then((res) => {
        dispatch(deleteCommunityComment(communityId));
        window.location.reload();
        window.alert('댓글을 삭제했습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const initialState = {
  list: [],
  page: 0,
  start: 0,
};

// 리듀서
const community = createSlice({
  name: 'community',
  initialState,
  reducers: {
    addCommunity: (state, action) => {
      const categoty = action.payload.category;
      const contents = action.payload.contents;
      const image = action.payload.image;
      const location = action.payload.location;
      const title = action.payload.title
      const username = action.payload.username
      state.list.push(categoty, contents, image, location, title, username);
    },

    getCommunity: (state, action) => {
      state.list = action.payload.content;
      state.start = action.payload.number;
    },

    getMoreCommunity: (state, action) => {
      return {
        ...state,
        list: [...state.list, ...action.payload.content],
        start: action.payload.number,
      };
    },

    getOneCommunity: (state, action) => {
      state.list = action.payload;
    },

    editCommunity: (state, action) => {
      console.log('수정 요청 완료!');
    },

    deleteCommunity: (state, action) => {
      console.log('삭제 요청 완료!');
    },
    addCommunityComment: (state, action) => {
      state.list = action.payload;
    },

    getCommunityComment: (state, action) => {
      state.list = action.payload;
    },

    deleteCommunityComment: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {
  addCommunity,
  getCommunity,
  editCommunity,
  deleteCommunity,
  getOneCommunity,
  getMoreCommunity,
  addCommunityComment,
  getCommunityComment,
  deleteCommunityComment,
} = community.actions;
export default community;