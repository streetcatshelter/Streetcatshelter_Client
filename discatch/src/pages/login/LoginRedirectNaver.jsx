import React, { useEffect } from "react";
// /* == Custom - Component */
// import { Spinner }          from "../../components";
/* == Redux - actions */
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/modules/user";

// * == ( Page > Login - redirect page for login ) -------------------- * //
const LoginRedirect = (props) => {
  const dispatch = useDispatch();

  // parsing - kakao authorization code
  let authorization_code = new URL(window.location.href).searchParams.get(
    "code"
  );
  console.log(authorization_code);

  useEffect(() => {
    dispatch(userActions._loginNaver(authorization_code));
  }, []);

  return <div></div>;
};

export default LoginRedirect;
