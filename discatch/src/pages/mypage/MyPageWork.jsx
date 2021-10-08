import { Portal } from "@material-ui/core";
import React from "react";
import { MyPageDetail, Profile, Template, MyWork } from "../../components";
const MyPageWork = (props) => {
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
