// LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../shared/axios';

const _loginKakao =
  (authorization_code) =>
  async (dispatch, getState, { history }) => {
    try {
      // const { data } = await userApi.getKakao(authorization_code);
      // console.log(authorization_code);
      history.push('/');
    } catch (e) {
      console.log(e);
      window.alert('로그인에 실패하였습니다. 다시 로그인 해 주세요.');
      history.push('/login');
    }
  };

// const _loginNaver =
//   () =>
//   async (dispatch, getState, { history }) => {
//     try {
//       const { data } = await loginApi.getNaver();
//     } catch (e) {
//       console.log(e);
//       window.alert("로그인에 실패하였습니다. 다시 로그인 해 주세요.");
//       history.push("/login");
//     }
//   };

// const _loginGoogle =
//   () =>
//   async (dispatch, getState, { history }) => {
//     try {
//       const { data } = await loginApi.getGoogle();
//     } catch (e) {
//       console.log(e);
//       window.alert("로그인에 실패하였습니다. 다시 로그인 해 주세요.");
//       history.push("/login");
//     }
//   };

const initialState = {
  list: [],
};

// 리듀서
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginKaKao: (state, action) => {
      const keyword = action.payload;
      state.list.unshift(keyword);
    },
  },
});

export const userActions = {
  _loginKakao,
};

export default user;
