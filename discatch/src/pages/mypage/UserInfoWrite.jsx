// LIBRARY
import React from "react";

// COMPONENTS
import { UserInfo, Template } from "../../components";

const UserInfoWrite = (props) => {
  const edit = props.match.path === "/userinfoedit" ? "edit" : "";
  return (
    <Template props={props}>
      <UserInfo edit={edit} />
    </Template>
  );
};

export default UserInfoWrite;
