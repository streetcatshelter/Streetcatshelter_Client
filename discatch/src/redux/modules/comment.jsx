// LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// 커뮤니티 댓글 작성
export const addCommunityCommentDB = (commentContents, communityId) => {
  return function (dispatch, getState, { history }) {
    const username = '뽀삐맘'; // 수정 필요
    // const username = getState().user; // 나중에 가져오기
    instance
      .post(`/community/comment/${communityId}`, { commentContents, username })
      .then((res) => {
        dispatch(addCommunityComment(commentContents));
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
};

// 리듀서
const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addCommunityComment: (state, action) => {
      const comments = action.payload;
      state.list.push(comments);
    },

    getCommunityComment: (state, action) => {
      state.list = action.payload;
    },

    deleteCommunityComment: (state, action) => {
      const deleteList = state.list.filter(
        (comment) => comment.commentId !== action.commentId,
      );
      state.list = deleteList;
    },
  },
});

export const {
  addCommunityComment,
  getCommunityComment,
  deleteCommunityComment,
} = comment.actions;
export default comment;