// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// STYLE
import styled from "styled-components";

// REDUX
import { mypageActions } from "../../redux/modules/mypage";

const NoticeDesc = (props) => {
  const NoticeDetail = useSelector((state) => state.mypage.noticedetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mypageActions._getOneNotice(props.id));
  }, [props.id, dispatch]);
  
  const modifiedAt = moment(NoticeDetail.modifiedAt).format("YYYY-M-D");

  if (!NoticeDetail) {
    return <div></div>;
  }
  return (
    <Wrap>
      <Title>
        <p>disCATch 공지사항🐈!!</p>
      </Title>
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
`;
const Title = styled.div`
  height: 50px;
  margin: auto;
  p {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
  }
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
