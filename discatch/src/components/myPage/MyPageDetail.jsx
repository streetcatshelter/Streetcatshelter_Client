import React from "react";

/* == Custom - Elements*/
import { Grid } from "../../elements";

/* == Library - style */
import styled from "styled-components";

/* == REDUX */
import { history } from "../../redux/configureStore";

const MyPageDetail = (props) => {
  return (
    <Wrapper>
      <Grid>
        <MenuBtn
          onClick={() => {
            history.push("/mypage");
          }}
          color={props.menu === "myCat" ? " #B5BB19" : "black"}
        >
          내고양이보기
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            history.push("/mypage/work");
          }}
          color={props.menu === "myWork" ? " #B5BB19" : "black"}
        >
          내활동
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            history.push("/mypage/notice");
          }}
          color={props.menu === "notice" ? " #B5BB19" : "black"}
        >
          공지사항
        </MenuBtn>
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
`;

export default MyPageDetail;
