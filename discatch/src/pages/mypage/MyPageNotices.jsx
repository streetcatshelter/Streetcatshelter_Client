// LIBRARY
import React from "react";

// COMPONENTS
import { MyPageDetail, Profile, Template, NoticeDesc } from "../../components";

const MyPageNotices = (props) => {
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
        <NoticeDesc id={props.match.params.noticeId} />
      </div>
    </Template>
  );
};

export default MyPageNotices;
