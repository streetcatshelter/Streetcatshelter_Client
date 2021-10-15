import React, { useEffect } from "react";

/* == Library - style */
import styled from "styled-components";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
import { history } from "../../redux/configureStore";
const Notice = () => {
  const NoticeList = useSelector((state) => state.mypage.noticelist);
  console.log(NoticeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._getNotice());
  }, []);
  return (
    <Wrapper>
      <Title>
        <p>disCATch 공지사항🐈</p>
      </Title>
      {NoticeList.map((notice, index) => {
        const modifiedAt = moment(notice.modifiedAt).format("YYYY-M-D");
        return (
          <Content
            onClick={() => {
              history.push(`/mypage/notice/${notice.id}`);
            }}
          >
            <p>{notice.title}</p>
            <span>{modifiedAt}</span>
          </Content>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Title = styled.div`
  height: 50px;
  margin: auto;
  p {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
  }
`;
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
