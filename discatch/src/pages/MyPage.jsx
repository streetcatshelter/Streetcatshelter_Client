import React from "react";
import { MyPageDetail, Profile } from "../components";

const MyPage = () => {
  return (
    <div style={{ overflowX: "hidden", width: "90%", margin: "auto" }}>
      <div style={{ margin: "10px auto" }}>
        <Profile />
      </div>
      <MyPageDetail />
    </div>
  );
};

export default MyPage;
