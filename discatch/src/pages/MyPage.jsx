import React from "react";

/* == components*/
import { MyPageDetail, Profile, Template } from "../components";

const MyPage = (props) => {
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
        <MyPageDetail />
      </div>
    </Template>
  );
};

export default MyPage;
