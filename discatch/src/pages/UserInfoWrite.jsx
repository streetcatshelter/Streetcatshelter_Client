import React from "react";

/* == components*/
import { UserInfo, Template } from "../components";

const UserInfoWrite = (props) => {
  const edit = props.match.path === "/userinfoedit" ? "edit" : "";
  console.log(edit);
  return (
    <Template props={props}>
      <UserInfo edit={edit} />
    </Template>
  );
};

export default UserInfoWrite;
