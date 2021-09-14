import React, { useState } from "react";
import { MyPageContent } from "..";
import { Grid } from "../../elements";
import styled from "styled-components";
const MyPageDetail = () => {
  const [menu, SetMenu] = useState("");
  return (
    <Wrapper>
      <Grid>
        <MenuBtn
          onClick={() => {
            SetMenu("myCat");
          }}
          color={menu === "myCat" ? " #B5BB19" : "black"}
        >
          내고양이보기
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            SetMenu("myWork");
          }}
          color={menu === "myWork" ? " #B5BB19" : "black"}
        >
          내활동
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            SetMenu("notice");
          }}
          color={menu === "notice" ? " #B5BB19" : "black"}
        >
          공지사항
        </MenuBtn>
      </Grid>
      <Grid width="95%" margin="20px auto ">
        <MyPageContent menu={menu} />
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
  color: ${(props) => props.color};
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
