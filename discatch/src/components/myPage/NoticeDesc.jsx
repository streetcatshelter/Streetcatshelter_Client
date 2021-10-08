import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
const NoticeDesc = (props) => {
  const NoticeDetail = useSelector((state) => state.mypage.noticedetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._setNotice(props.id));
  }, []);
  return (
    <div>
      <p>{NoticeDetail.title}</p>
      <p>{NoticeDetail.contents}</p>
    </div>
  );
};

export default NoticeDesc;
