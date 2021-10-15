import React from 'react';
import { useDispatch } from 'react-redux';

/* == Custom - Elements*/
import { Grid, Button, Text } from '../../elements/index';
import { flexBox } from '../../shared/style';

/* == Library - style */
import { css } from 'styled-components';

// icon
import { Trash2 } from 'react-feather';

// REDUX
import { deleteCommunityCommentDB } from '../../redux/modules/community';

const CommentCard = ({ comment }) => {
  const commentId = comment.commentId
  const dispatch = useDispatch();
  const username = comment.username;
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo.split('"')[5];

  const deleteBtn = () => {
    dispatch(deleteCommunityCommentDB(commentId));
  };

  return (
    <>
      <Grid
        alignItems="center"
        addstyle={() => {
          return css`
            ${flexBox('space-evenly')};
            margin: 3% 0 0 0;
          `;
        }}
      >
        <Text width="60vw">{comment.username} : {comment.contents}</Text>

        <Text margin="0 -2% 0 0" size="10px" width="15vw">
          {comment.createdAt[0]}.{comment.createdAt[1]}.{comment.createdAt[2]} <br></br>
          {comment.createdAt[3]}시 {comment.createdAt[4]}분
        </Text>

        {userName === username && (
          <Button onClick={deleteBtn}>
            <Trash2 size="12px" color="red" />
          </Button>
        )}
      </Grid>
    </>
  );
};

export default CommentCard;
