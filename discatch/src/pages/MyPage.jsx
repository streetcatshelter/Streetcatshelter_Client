import React from "react";
import { MyPageDetail, Profile } from "../components";

const MyPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Profile />
      <MyPageDetail />
    </div>
  );
};

export default MyPage;
