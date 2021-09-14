import React from "react";
import { MyPageDetail, Profile } from "../components";

const MyPage = () => {
  return (
    <React.Fragment>
      <Profile />
      <MyPageDetail />
    </React.Fragment>
  );
};

export default MyPage;
