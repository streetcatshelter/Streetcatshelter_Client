// LIBRARY
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../shared/axios";
import jwtDecode from "jwt-decode";
import { setCookie } from "../../shared/token";
// import { setCookie, deleteCookie } from "../shared/cookie";
const _loginKakao =
  (authorization_code) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await userApi.getKakao(authorization_code);
      // window.localStorage.setItem(
      //   "token",
      //   JSON.stringify({
      //     access_token: data,
      //   })
      // );

      // str 변환 후 decode
      console.log(data);
      const str_data = JSON.stringify(data);
      console.log(str_data);
      const decoded = jwtDecode(str_data);
      console.log(decoded);

      // setCookie("TOKEN", 값)
      setCookie("TOKEN", str_data);
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

const _setLogin =
  () =>
  (dispatch, getState, { history }) => {
    const token = document.cookie;
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
    loginKaKao: (state, action) => {
      const keyword = action.payload;
      state.list.unshift(keyword);
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
};
export const { setLogin } = user.actions;
export default user;
