// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// utils
import { dateFormat } from "utils";

// STYLE
import styled from "styled-components";

const NoticeDesc = () => {
  const noticeDetail = useSelector((state) => state.mypage.noticedetail);
  const modifiedAt = dateFormat(noticeDetail.modifiedAt).split(" ")[0];
  if (!noticeDetail) {
    return <div></div>;
  }
  let codes = noticeDetail.contents;
  return (
    <Wrap>
      <Header>
        <p>{noticeDetail.title}</p>
        <p>{modifiedAt}</p>
      </Header>
      <Body>
        <p dangerouslySetInnerHTML={{ __html: codes }}></p>
      </Body>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 0.5px solid #b5bb19;
  padding: 0px 10px;

  p {
    margin: 0px;
    font-size: 16px;
    font-weight: 900;
    width: 75%;
    word-break: break-all;
    :nth-child(2) {
      font-size: 12px;
      font-weight: 700;
      width: 25%;
      text-align: center;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
      :nth-child(2) {
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    height: 35x;
  }
`;
const Body = styled.div`
  padding: 10px;
  width: 95%;
  margin: auto;
  p {
    margin: 5px;
    line-height: 25px;
    font-size: 14px;
    word-break: break-all;
    white-space: normal;
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default NoticeDesc;
