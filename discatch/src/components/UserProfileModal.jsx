import React, { useEffect } from "react";
import { mypageActions } from "../redux/modules/mypage";
import { useDispatch } from "react-redux";
const UserProfileModal = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._getUserProfile(props.userRandomId));
  }, []);

  return <div></div>;
};

export default UserProfileModal;
