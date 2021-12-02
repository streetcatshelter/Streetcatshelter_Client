// LIBRARY
import React, { useEffect } from "react";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { MyPageDetail, Profile, Template, Notice } from "../../components";

// REDUX
import { mypageActions } from "../../redux/modules/mypage";
import { useDispatch } from "react-redux";

const MyPageNoticeList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._getNotice());
  }, [dispatch]);
  return (
    <Template props={props}>
      <div
        style={{
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
        <Notice />
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
export default MyPageNoticeList;
