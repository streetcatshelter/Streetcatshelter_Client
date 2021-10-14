// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../shared/axios";
import jwtDecode from "jwt-decode";
import { setToken, removeToken } from "../../shared/token";
// import { setCookie, deleteCookie } from "../shared/cookie";
const _loginKakao =
  (authorization_code) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await userApi.getKakao(authorization_code);
      const str_data = JSON.stringify(data);
      setToken(str_data);
      // 메인페이지 이동
      history.push("/");
    } catch (e) {
      console.log(e);
      window.alert("로그인에 실패하였습니다. 다시 로그인 해 주세요.");
      history.push("/login");
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
const _logout =
  () =>
  (dispatch, getState, { history }) => {
    try {
      removeToken("TOKEN");
      dispatch(logout());
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

const _setLogin =
  () =>
  (dispatch, getState, { history }) => {
    const token = localStorage.getItem("token");
    if (token !== "") {
      dispatch(setLogin());
    }
  };

const initialState = {
  isLoggedIn: true,
};

// 리듀서
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    // loginKaKao: (state, action) => {
    //   const keyword = action.payload;
    //   state.list.unshift(keyword);
    // },

    logout: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
      };
    },
    setLogin: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
  },
});

export const userActions = {
  _loginKakao,
  _setLogin,
  _logout,
};
export const { setLogin, logout } = user.actions;
export default user;
