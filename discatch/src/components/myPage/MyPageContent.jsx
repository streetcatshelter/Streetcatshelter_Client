// LIBRARY
import React from "react";

// COMPONENTS
import { MyPageCat, MyWork, Notice } from "..";

const MyPageContent = (props) => {
  return (
    <div>
      {props.menu === "myWork" ? (
        <MyWork />
      ) : props.menu === "notice" ? (
        <Notice />
      ) : (
        <MyPageCat />
      )}
    </div>
  );
};

export default MyPageContent;
