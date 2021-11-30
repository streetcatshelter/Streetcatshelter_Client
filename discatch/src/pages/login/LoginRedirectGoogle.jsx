// LIBRARY
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// REDUX
import { userActions } from "../../redux/modules/user";

// * == ( Page > Login - redirect page for login ) -------------------- * //
const LoginRedirect = () => {
  const dispatch = useDispatch();

  // parsing - kakao authorization code
  let authorization_code = new URL(window.location.href).searchParams.get(
    "code"
  );

  useEffect(() => {
    dispatch(userActions._loginGoogle(authorization_code));
  }, [authorization_code, dispatch]);

  return <div></div>;
};

export default LoginRedirect;
