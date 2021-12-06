// LIBRARY
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// REDUX
import { mypageActions } from "../redux/modules/mypage";

const UserProfileModal = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._getUserProfile(props.userRandomId));
  }, []);

  return <div></div>;
};

export default UserProfileModal;
