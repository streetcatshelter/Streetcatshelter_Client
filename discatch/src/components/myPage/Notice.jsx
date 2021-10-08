import React, { useEffect } from "react";

/* == Library - style */
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
import { history } from "../../redux/configureStore";
const Notice = () => {
  const NoticeList = useSelector((state) => state.mypage.noticelist);
  console.log(NoticeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._setNotice());
  }, []);
  return (
    <Wrapper>
      {NoticeList.map((notice, index) => {
        return (
          <Content
            onClick={() => {
              history.push(`/mypage/notice/${notice.notice.id}`);
            }}
          >
            <p>
              {notice.notice.id}.{notice.notice.title}
            </p>
            <span>{notice.notice.createdAt}</span>
          </Content>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Content = styled.div`
  height: 40px;
  border-bottom: 0.5px solid #b5bb19;
  line-height: 16px;
  margin: 12px 0px;
  cursor: pointer;
  &:hover {
    color: #be701d;
  }
  p {
    font-weight: 900;
    font-size: 14px;
    margin: 0px 10px;
  }
  span {
    font-weight: normal;
    font-size: 10px;
    margin: 0px 10px;
  }
`;
export default Notice;
