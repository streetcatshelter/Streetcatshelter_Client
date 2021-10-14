// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Comment from './Comment';
import CommentCard from './CommentCard';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz } from '../../shared/style';

// ELEMENTS
import { Grid, Input, Button } from '../../elements/index';

// ROUTE
import { useLocation } from 'react-router-dom';

// REDUX
import { addCommunityCommentDB } from '../../redux/modules/community';

const CommentList = (props) => {
  const path = useLocation();
  const dispatch = useDispatch();
  const community = useSelector((state) => state.community.list);

  let communityId = props.props?.match.params.communityId;

  const [comments, setComment] = React.useState('');

  const commentList = community.data?.commentList;

  const $comment = (event) => {
    setComment(event.target.value);
  };

  const addCommentBtn = () => {
    if (path.pathname.split('/')[1] === 'community') {
      dispatch(addCommunityCommentDB(comments, communityId));
    } else {
      console.log('캣 댓글 추가');
    }
  };

  return (
    <>
      <Comment />
      <Grid
        width="85%"
        margin="0 auto"
        addstyle={() => {
          return css`
            ${flexBox('flex-start')}
          `;
        }}
      >
        <Input
          onChange={$comment}
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
          clickEvent={addCommentBtn}
          addstyle={() => {
            return css`
              z-index:1;
            `;
          }}
        >
          작성
        </Button>
      </Grid>

      {commentList &&
        commentList.map((comment, idx) => {
          return <CommentCard key={idx} comment={comment} />;
        })}
    </>
  );
};

export default CommentList;
