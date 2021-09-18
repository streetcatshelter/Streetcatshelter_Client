import React, { useEffect, useState, useRef } from "react";

/* == Library - style */
import styled from "styled-components";
import { MoreHorizontal } from "react-feather";

/* == Redux */
import { history } from "../../redux/configureStore";

const ProfileEdit = (props) => {
  const [menu, setMenu] = useState(false);
  const el = useRef(null);

  /* == function */
  //드롭박스 외 클릭시 창이 꺼짐.
  const handleClose = (e) => {
    if (el.current && !el.current.contains(e.target)) {
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <EditBtn ref={el} onClick={() => setMenu(!menu)}></EditBtn>
      {menu ? (
        <Menu>
          <div
            onClick={() => {
              history.push("/userinfoedit");
            }}
          >
            <p>프로필수정</p>
          </div>
          <div>
            <p>로그아웃</p>
          </div>
        </Menu>
      ) : (
        ""
      )}
    </div>
  );
};
const EditBtn = styled(MoreHorizontal)`
  color: #b5bb19;
  cursor: pointer;

  &:hover {
    color: #be701d;
  }
`;
const Menu = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  margin-left: -60px;
  div {
    cursor: pointer;
    border-radius: 10px;
    background: #ffffff;
    display: inline-block;
    width: 80px;
    height: 24.5px;
    padding: auto;
    border: 1px solid #cbcf52;
    &:hover {
      background: #cbcf52;
    }
    p {
      text-align: center;
      font-size: 12px;
      font-weight: 800;
      margin: 2px auto;
    }
  }
`;
export default ProfileEdit;
