// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import {
  MyPageDetail,
  Profile,
  Template,
  MyPageCat,
  Spinner,
} from "../../components";

const MyPage = (props) => {
  const isLoaded = useSelector((state) => state.mypage.isLoaded);

  return (
    <>
      <Spinner visible={isLoaded} />
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
          <MyPageDetail menu="myCat" />
          <MyPageCat />
        </div>
      </Template>
    </>
  );
};

export default MyPage;
