import React from "react";

/* == Library - style */
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
  border-bottom: 0.5px solid #b5bb19;
  line-height: 16px;
  margin: 12px 0px;
  cursor: pointer;
  &:hover {
    color: #be701d;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    margin: 0px 10px;
  }
  span {
    font-weight: normal;
    font-size: 10px;
    margin: 0px 10px;
  }
`;
export default Notice;
