// LIBRARY
import React from "react";

// COMPONENTS
import { MyPageDetail, Profile, Template, MyWork } from "../../components";

// REDUX
import { useSelector } from "react-redux";
const MyPageWork = (props) => {
  const isLoaded = useSelector((state) => state.mypage.pageLoaded);
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
        <MyPageDetail menu="myWork" />
        <MyWork />
      </div>
    </Template>
  );
};

export default MyPageWork;
