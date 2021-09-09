import React from 'react';
import Comment from './Comment';
import { Grid, Input, Button } from '../elements/index';
const CommentList = () => {
  return (
    <>
      <Comment />
      <Grid width="">
        <Input type="text" placeholder="댓글 달기..." />
      </Grid>
      <Button>더보기</Button>
    </>
  );
};

export default CommentList;
