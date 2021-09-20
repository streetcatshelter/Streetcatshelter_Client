// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Comment from './Comment';
import CommentCard from './CommentCard';

// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz } from '../shared/style';


// ELEMENTS
import { Grid, Input, Button } from '../elements/index';

// ROUTE
import { useLocation } from 'react-router-dom';

// REDUX
import { getCommunityDB, addCommunityCommentDB, deleteCommunityCommentDB } from '../redux/modules/community';

const CommentList = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const communityId = props.communityId.communityId;
  const communityId = '테스트'
  // console.log(community);
  const [comments, setComment] = React.useState('');
  // const commentList = useSelector((state) => state.community.list);

  // React.useEffect(() => {
  //   dispatch(getCommunityDB(communityId));
  // }, [commentList.length]);
  React.useEffect(() => {
    if (location.pathname === '/communitypostdetail') {
      console.log('커뮤니티 가져오기');
      // dispatch(getCommunityDB(communityId));
    } else {
      console.log('캣 가져오기');
    }
  }, []);

  const $comment = (event) => {
    setComment(event.target.value);
  };

  const addCommentBtn = () => {
    dispatch(addCommunityCommentDB(comments, communityId));
  };

  const deleteBtn = () => {
    dispatch(deleteCommunityCommentDB(communityId));
  };

  return (
    <>
      <Comment />
      <Grid
        width="85%"
        margin="auto"
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
        >
          작성
        </Button>
      </Grid>


      <CommentCard/>

      {/* {commentList.map((comment, idx) => {
          return <CommentCard key={idx} comment={comment} />;
        })} */}


      <Button width="100%">더보기</Button>
    </>
  );
};

export default CommentList;
