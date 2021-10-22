// library
import { createSlice } from '@reduxjs/toolkit';
// api
import instance, { catApi } from '../../shared/axios';

// Cat 댓글 생성
export const __createCatComment =
  (catId, contents) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.createCatComment(catId, contents);
      dispatch(createCatComment({ contents }));
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

// CatDetail 댓글 생성
export const __createCatDetailComment =
  (contents, catDetailId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.createCatDetailComment(contents, catDetailId);
      dispatch(createCatDetailComment({ contents }));
    } catch (err) {
      console.error(err);
    }
  };

// 댓글 불러오기
export const __getComment =
  (catId, size = 15) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await catApi.getComment(catId, size);

      dispatch(getComment(data));
    } catch (err) {
      console.error(err);
    }
  };

// 댓글 삭제
export const __deleteComment =
  (commentId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await catApi.deleteCatComment(commentId);
      dispatch(deleteCatComment(commentId));
      window.alert('댓글 삭제');
    } catch (err) {
      console.error(err);
    }
  };

const initialState = {
  list: [],
};

const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    createCatComment: (state, action) => {
      const contents = action.payload.contents;
      state.list.push({ contents });
    },

    createCatDetailComment: (state, action) => {
      state.list = action.payload;
    },

    getComment: (state, action) => {
      state.list = action.payload;
    },

    deleteCatComment: (state, action) => {
      const deleteComment = state.list.filter(
        (comment) => comment.commentId !== action.commentId,
      );
      state.list = action.payload;
    },
  },
});

export const {
  createCatComment,
  createCatDetailComment,
  getComment,
  deleteCatComment,
} = comment.actions;

export default comment;
