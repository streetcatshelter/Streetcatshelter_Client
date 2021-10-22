// library
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// element
import { Grid, Text, Button, Input, Image } from '../../elements';

// style
import { flexBox } from '../../shared/style';

// redux
import {
  __createCatComment,
  __getComment,
  __deleteComment,
} from '../../redux/modules/comment';

const CatComment = (props) => {
  const dispatch = useDispatch();
  const catId = props.catId;

  const [contents, setComment] = useState('');
  const $comment = (e) => {
    setComment(e.target.value);
  };

  const commentList = useSelector((state) => state.comment.list);
  console.log(commentList);

  const addComment = () => {
    dispatch(__createCatComment(catId, contents));
  };

  useEffect(() => {
    dispatch(__getComment(catId));
  }, []);

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
        <Count>2</Count>
      </Grid>

      <Grid padding="8px">
        <Grid
          alignItems="center"
          margin="0 auto 3% auto"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
              margin-bottom: 12%;
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
          return (
            <Grid
              margin="3% 0"
              key={idx}
              alignItems="center"
              display="flex"
              addstyle={() => {
                return css`
                  ${flexBox('space-between')}
                `;
              }}
            >
              <Image
                src={comment.profileImageUrl}
                width="30px"
                height="30px"
                borderRadius="20px"
              ></Image>
              <Text fontWeight="bold" size="15px">
                {comment.username}:
              </Text>
              <Text fontWeight="bold" size="15px" width="55%">
                {comment.contents}
              </Text>
              <Text fontWeight="bold" size="12px">
                {comment.createdAt ? (
                  `${comment.createdAt[0]}.${comment.createdAt[1]}.\
                  ${comment.createdAt[2]}
                  ${comment.createdAt[3]}시 ${comment.createdAt[4]}분
                  `
                ) : (
                  <></>
                )}
              </Text>
            </Grid>
          );
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
