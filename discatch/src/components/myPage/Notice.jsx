// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

// REDUX
import { history } from "../../redux/configureStore";

const Notice = () => {
  const NoticeList = useSelector((state) => state.mypage.noticelist);
  return (
    <Wrapper>
      <Content>
        <Title style={{ fontSize: "14px", textAlign: "center" }}>제목</Title>

        <DateBox style={{ fontSize: "14px", fontWeight: "900" }}>날짜</DateBox>
      </Content>
      {NoticeList.map((notice, idx) => {
        const modifiedAt = moment(notice.modifiedAt).format("YYYY-M-DD");
        return (
          <Content
            key={idx}
            onClick={() => {
              history.push(`/mypage/notice/${notice.id}`);
            }}
          >
            <Title>
              <p>{notice.title}</p>
            </Title>
            <DateBox>{modifiedAt}</DateBox>
          </Content>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Content = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 0.2px solid #b5bb19;
  line-height: 16px;
  cursor: pointer;
  display: flex;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 12px;
  margin: auto;
  width: 68%;
  p {
    margin: auto auto auto 10px;
  }
`;
const DateBox = styled.div`
  font-weight: normal;
  font-size: 10px;
  margin: auto;
  width: 20%;
  text-align: center;
`;

export default Notice;
