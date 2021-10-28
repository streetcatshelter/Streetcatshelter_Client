import React from "react";

/* == Library - style */
import styled from "styled-components";
import { useSelector } from "react-redux";
const ProgressBar = () => {
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const leftPoint = 20 - UserInfo.cntActivity;
  const workPercent = (UserInfo.cntActivity / 20) * 100 + "%";

  return (
    <Wrap>
      <Head>
        Level :{UserInfo.userLevel} 😻
        {UserInfo.score}점
      </Head>
      <BarWrap>
        <Bar width={workPercent}></Bar>
      </BarWrap>
      <LevelDetail>
        🌳__🏃‍♀️💨<span>"냥린이"</span>를 위해 남은 점수는{" "}
        <span>{leftPoint}</span>점 입니다!!!
      </LevelDetail>
    </Wrap>
  );
};

const Wrap = styled.div``;
const Head = styled.p`
  font-size: 16px;
  font-weight: 900;
`;

const BarWrap = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  border: 1px solid #f9c852;
  margin: 10px auto 5px;
`;

const LevelDetail = styled.div`
  font-size: 12px;
  text-align: right;
  span {
    font-weight: bold;
    margin: 0px;
  }
`;
const Bar = styled.div`
  background: #f9c852;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.width};
`;

export default ProgressBar;
