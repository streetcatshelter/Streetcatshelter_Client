// library
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

// component
import { CatCommentCard } from "..";

// element
import { Grid, Text, Button, Input } from "../../elements";

// style
import { flexBox } from "../../shared/style";

// redux
import { __createCatComment, __getComment } from "../../redux/modules/comment";

const CatComment = (props) => {
  const dispatch = useDispatch();
  const catId = props.catId;

  const commentList = useSelector((state) => state.comment.list);
  const commentCnt = commentList.length;

  const [comment, setComment] = useState("");
  const $comment = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    dispatch(__createCatComment(catId, comment));
  };

  useEffect(() => {
    dispatch(__getComment(catId));
  }, [dispatch, commentList.length]);

  return (
    <>
      <Grid
        margin="3% 0"
        padding="8px"
        display="flex"
        alignItems="center"
        addstyle={() => {
          return css`
            border-bottom: 1px solid #cbcf5e;
          `;
        }}
      >
        <Text fontWeight="700" size="16px">
          댓글
        </Text>
        <Count>{commentCnt}</Count>
      </Grid>

      <Grid padding="8px">
        <Grid
          alignItems="center"
          margin="0 auto 12% auto"
          addstyle={() => {
            return css`
              ${flexBox("space-between")}
            `;
          }}
        >
          <Input
            onChange={$comment}
            width="85%"
            height="40px"
            padding="4px"
            radius="10px"
            placeholder="댓글 달기..."
            addstyle={() => {
              return css`
                border: 1px solid rgb(${(props) => props.theme.palette.yellow});
              `;
            }}
          />
          <Button
            clickEvent={addComment}
            width="45px"
            bgColor="yellow"
            addstyle={() => {
              return css`
                height: 40px;
              `;
            }}
          >
            작성
          </Button>
        </Grid>

        {commentList.map((comment, idx) => {
          return <CatCommentCard key={idx} comment={comment} />;
        })}
      </Grid>
    </>
  );
};

const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgb(${(props) => props.theme.palette.D_yellow});
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin-left: 1%;
`;

export default CatComment;
