import React from "react";

/* == components*/
import Comment from "./Comment";

/* == Library - style */
import styled, { css } from "styled-components";

/* == Custom - Elements*/
import { Grid, Input, Button } from "../elements/index";
import { flexBox, flexHoz } from "../shared/style";

const CommentList = () => {
  return (
    <>
      <Comment />
      <Grid
        width="85%"
        margin="auto"
        addstyle={() => {
          return css`
            ${flexBox("flex-start")}
          `;
        }}
      >
        <Input
          type="text"
          placeholder="댓글 달기..."
          addstyle={() => {
            return css`
              border: 1px solid rgb(${(props) => props.theme.palette.yellow});
              border-radius: 10px;
            `;
          }}
        />
        <Button
          width="40px"
          bgColor="yellow"
          padding="0.4rem"
          margin="0 0 0 -38px"
        >
          작성
        </Button>
      </Grid>
      <Grid
        margin="0 10px"
        addstyle={() => {
          return css`
            ${flexBox("flex-start")};
            font-size: 14px;
          `;
        }}
      >
        <p style={{}}>망원동 왕집사:</p>
        <p style={{ marginLeft: "4px", width: "160px" }}>왕 귀엽습니다!!</p>
      </Grid>
      <Grid
        addstyle={() => {
          return css`
            ${flexHoz("flex-end")}
          `;
        }}
      >
        <p
          style={{ fontSize: "10px", marginTop: "-28px", marginRight: "10px" }}
        >
          2021-09-02 17:34
        </p>
      </Grid>
      <Button width="100%">더보기</Button>
    </>
  );
};

export default CommentList;
