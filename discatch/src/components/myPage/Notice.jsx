import React from "react";
import styled from "styled-components";
const Notice = () => {
  return (
    <Wrapper>
      <Content>
        <p>⭐disCATch 첫유저를 위한 가이드 </p>
        <span>2021-09-10</span>
      </Content>
      <Content>
        <p>⭐disCATch 첫유저를 위한 가이드 </p>
        <span>2021-09-10</span>
      </Content>
      <Content>
        <p>⭐disCATch 첫유저를 위한 가이드 </p>
        <span>2021-09-10</span>
      </Content>
      <Content>
        <p>⭐disCATch 첫유저를 위한 가이드 </p>
        <span>2021-09-10</span>
      </Content>
      <Content>
        <p>⭐disCATch 첫유저를 위한 가이드 </p>
        <span>2021-09-10</span>
      </Content>
      <Content>
        <p>회원 탈퇴 방법 </p>
        <span>2021-09-10</span>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Content = styled.div`
  height: 40px;
  border-bottom: 1px solid #b5bb19;
  line-height: 16px;
  margin: 10px 0px;
  p {
    font-weight: bold;
    font-size: 14px;
    margin: 0px;
  }
  span {
    font-weight: normal;
    font-size: 10px;
  }
`;
export default Notice;
