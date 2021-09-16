import React from "react";

/* == components*/
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
