// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

const ProgressBar = () => {
  const UserInfo = useSelector((state) => state.mypage.userInfo);

  const workPercent =
    (UserInfo.score / (UserInfo.score + UserInfo.scoreLeft)) * 100 + "%";

  return (
    <React.Fragment>
      <Head>
        Level :{UserInfo.userLevel} 😻
        {UserInfo.score}점
      </Head>
      <BarWrap>
        <Bar width={workPercent}></Bar>
      </BarWrap>
      {UserInfo.nextLevel === "null" ? (
        <LevelDetail>
          <span>✨이제 나도 프로집사 ! 😎</span>
        </LevelDetail>
      ) : (
        <LevelDetail>
          🏃‍♀️<span>{UserInfo.nextLevel}</span>를 위해 남은 점수는
          <span>{UserInfo.scoreLeft}</span>점 입니다!!!
        </LevelDetail>
      )}
    </React.Fragment>
  );
};

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
  animation: progress 0.5s linear;
  animation-fill-mode: forwards;
  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;

export default ProgressBar;
