import React from "react";
import { UserInfo } from "../components";
const UserInfoWrite = (props) => {
  const edit = props.match.path === "/userinfoedit" ? "edit" : "";
  console.log(edit);
  return (
    <React.Fragment>
      <UserInfo edit={edit} />
    </React.Fragment>
  );
};

export default UserInfoWrite;
