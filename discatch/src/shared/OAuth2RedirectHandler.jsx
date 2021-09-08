// LIBRARY
import React from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin } from '../redux/modules/user';

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  React.useEffect(() => {
    dispatch(kakaoLogin(code));
  }, []);

  return <React.Fragment />;
};

export default OAuth2RedirectHandler;
