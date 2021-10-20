// LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance, { communityApi } from '../../shared/axios';

// REDUX
import { imgActions } from './image';

// 커뮤니티 글 등록
export const addCommunityDB = (category, contents, location, title) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file
    const userInfo = localStorage.getItem("userInfo");
    const path = category.split(' ');
    let pathName = null
    if (path[1] === '정보글') {
      pathName = 'catinfo'
    } else if (path[2] === '모임') {
      pathName = 'gathering'
    } else {
      pathName = 'sharing'
    }
    const username = userInfo.split('"')[5];
    if (imgFile.length<6) {
      dispatch(
        imgActions.uploadImagesDB(() => {
          const imageUrl = getState().image.imageUrls;
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
              window.location.replace(`/community/${location}/${pathName}`);
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
export const getCommunityDB = (category, location, limit = 5) => 
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.getCommunity(category, location, limit);
      let communityList = data.data;
        if (communityList.length < limit + 1) {
          dispatch(getCommunity(communityList, null));
          return;
        }
        dispatch(getCommunity(communityList, limit));
      } catch (err) {
        window.alert('페이지에 오류가 있어요!');
        console.error(err);
      }
};

export const getMoreCommunityDB = (category, location, limit = 6) => 
  async (dispatch, getState, { history }) => {
    let start = getState().community.start;

    if (start === null) {
      return;
    } else {
      start += 1;
    }
    try {
      const data = await communityApi.getMoreCommunity(category, start, limit, location);
      const communityList = data.data;
        if (communityList.length < limit + 1) {
          dispatch(getMoreCommunity(communityList, null));
          return;
        }
        communityList.content.pop();
        dispatch(getMoreCommunity(communityList, start + limit));
    } catch (err) {
      console.error(err);
    }
  };

// 커뮤니티 상세 가져오기
export const getOneCommunityDB = (communityId = '') => 
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.getDetailCommunity(communityId);
      dispatch(getOneCommunity(data));
      } catch (err) {
        console.error(err);
      }
};

// 커뮤니티 수정
export const editCommunityDB = (communityId, category, editcontents, location, editTitle, username, imageList) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    let newImageUrl = [];
    let newImages = []
    // const username = '뽀삐맘'; // 나중에 수정
    if (imgFile.length<6) {
      dispatch(
        imgActions.uploadImagesDB(() => {
          let imageUrl = getState().image.imageUrls;
          newImageUrl.push(
            imageList[0]?.image,
            imageList[1]?.image,
            imageList[2]?.image,
            imageList[3]?.image,
            imageList[4]?.image
            );

          newImages = newImageUrl.filter(
            (element, i) => element !== undefined
          );
          newImages.push(imageUrl[0],imageUrl[1],imageUrl[2],imageUrl[3],imageUrl[4])
          const editImageList = newImages.filter(
            (element, i) => element !== undefined
          );
          instance
            .put(`/community/${communityId}`, {
              category: category,
              contents: editcontents,
              image: editImageList,
              location:location,
              title: editTitle,
              username: username,
            })
            .then((res) => {
              window.alert('게시글 수정 완료!');
              history.goBack();
              window.location.replace(`/community/${location}/${category}/postdetail/${communityId}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }),
      );
    } else if (newImages.length>5) {
      alert('사진은 최대 5장까지 등록할 수 있어요!');
    } else {
      return;
    }
  };
};

// 커뮤니티 글 삭제
export const deleteCommunityDB = (communityId, category, location) => 
  async (dispatch, getState, { history }) => {
    const path = category.split(' ');
    let pathName = null
    if (path.length === 2) {
      pathName = 'catinfo'
    } else if (path.length === 3) {
      pathName = 'gathering'
    } else {
      pathName = 'sharing'
    }
    try {
      const data = await communityApi.deleteCommunity(communityId);
      dispatch(deleteCommunity(communityId));
      window.alert('게시물 삭제 완료!');
      history.push(`/community/${location}/${pathName}`);
    } catch (err) {
      console.error(err);
    }
};

// 커뮤니티 댓글 작성
export const addCommunityCommentDB = (contents, communityId) => 
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.createCommunityComment(contents, communityId);
      dispatch(addCommunityComment({ contents }));
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
};

// 커뮤니티 댓글 삭제
export const deleteCommunityCommentDB = (communityId) => 
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.deleteCommunityComment(communityId);
      window.location.reload();
      window.alert('댓글을 삭제했습니다.');
    } catch (err) {
      console.error(err);
    }
};

// 커뮤니티 글 좋아요
export const communityLikeToggleDB = (communityId) => {
  return function (dispatch, getState, {history}) {
      instance
        .post(`/community/likeit/${communityId}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err)
        })
  }
}

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
      const category = action.payload.category;
      const contents = action.payload.contents;
      const image = action.payload.image;
      const location = action.payload.location;
      const title = action.payload.title
      const username = action.payload.username
      state.list.push(category, contents, image, location, title, username);
    },

    getCommunity: (state, action) => {
      state.list = action.payload;
    },

    getMoreCommunity: (state, action) => {
      return {
        ...state,
        list: [...state.list, ...action.payload],
        start: state.start+1,
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