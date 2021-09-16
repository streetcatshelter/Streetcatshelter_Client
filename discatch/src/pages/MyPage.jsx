import React from "react";

/* == components*/
import { MyPageDetail, Profile, Template } from "../components";

const MyPage = (props) => {
  return (
    <Template props={props}>
      <div style={{ overflowX: "hidden", width: "90%", margin: "auto" }}>
        <div style={{ margin: "10px auto" }}>
          <Profile />
        </div>
        <MyPageDetail />
      </div>
    </Template>
  );
};

export default MyPage;
