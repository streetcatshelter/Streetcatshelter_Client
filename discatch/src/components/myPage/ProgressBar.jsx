import React from "react";

/* == Library - style */
import styled from "styled-components";
import { useSelector } from "react-redux";
const ProgressBar = () => {
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const workPercent = (UserInfo.cntActivity / 30) * 100 + "%";
  return (
    <div>
      <p>
        이달의 disCATch : {UserInfo.cntActivity}일
        <span>아주 멋져요 !!!😻👍</span>
      </p>
      <BarWrap>
        <Bar width={workPercent}></Bar>
      </BarWrap>
    </div>
  );
};

const BarWrap = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  border: 1px solid #f9c852;
  margin: 10px auto;
`;

const Bar = styled.div`
  background: #f9c852;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.width};
`;

export default ProgressBar;
