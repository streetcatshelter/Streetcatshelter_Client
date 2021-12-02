// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

const NoticeDesc = () => {
  const NoticeDetail = useSelector((state) => state.mypage.noticedetail);

  const modifiedAt = moment(NoticeDetail.modifiedAt).format("YYYY-M-D");

  if (!NoticeDetail) {
    return <div></div>;
  }
  return (
    <Wrap>
      <Header>
        <p>{NoticeDetail.title}</p>
        <small>{modifiedAt}</small>
      </Header>
      <Body>
        <p>{NoticeDetail.contents}</p>
      </Body>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Header = styled.div`
  height: 30px;
  border-bottom: 0.5px solid #b5bb19;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  p {
    margin: 0px;
    font-size: 16px;
  }
`;
const Body = styled.div`
  padding: 10px;
  p {
    margin: 0px;
    font-size: 14px;
  }
`;

export default NoticeDesc;
