// LIBRARY
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { MyPageDetail, Profile, Template, NoticeDesc } from "../../components";

// REDUX
import { mypageActions } from "../../redux/modules/mypage";

const MyPageNotices = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.noticeId;
  useEffect(() => {
    dispatch(mypageActions._getOneNotice(id));
  }, [id, dispatch]);

  return (
    <Template props={props}>
      <div
        style={{
          overflowX: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ margin: "10px auto" }}>
          <Profile />
        </div>
        <MyPageDetail menu="notice" />
        <Title>
          <p>📢NOTICE</p>
        </Title>
        <NoticeDesc />
      </div>
    </Template>
  );
};
const Title = styled.div`
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: center;

  p {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    color: #000000;
  }
`;
export default MyPageNotices;
