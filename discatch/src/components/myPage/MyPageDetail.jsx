import React from "react";
import { MyPageCat, MyWork, Notice } from "..";
import { Grid } from "../../elements";
import styled from "styled-components";
const MyPageDetail = () => {
  return (
    <Wrapper>
      <Grid>
        <MenuBtn>내고양이보기</MenuBtn>
        <MenuBtn>내활동 </MenuBtn>
        <MenuBtn>공지사항</MenuBtn>
      </Grid>
      <Grid>
        <MyPageCat />
        <MyWork />
        <Notice />
      </Grid>
    </Wrapper>
  );
};

const MenuBtn = styled.button`
  background: transparent;
  border: none;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #b5bb19;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

export default MyPageDetail;
