// LIBRARY
import React from "react";

// COMPONENTS
import { MyPageCatPost, MyWork, Notice } from "..";

const MyPageContent = (props) => {
  return (
    <div>
      {props.menu === "myWork" ? (
        <MyWork />
      ) : props.menu === "notice" ? (
        <Notice />
      ) : (
        <MyPageCatPost />
      )}
    </div>
  );
};

export default MyPageContent;
