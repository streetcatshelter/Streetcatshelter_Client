// LIBRARY
import React from "react";

// COMPONENTS
import { MyPageDetail, Profile, Template, Notice } from "../../components";

const MyPageNoticeList = (props) => {
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
        <Notice />
      </div>
    </Template>
  );
};

export default MyPageNoticeList;
