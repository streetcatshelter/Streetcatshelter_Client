// LIBRARY
import React from 'react';
import { useDispatch } from 'react-redux';
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Text, Button, Image } from '../../elements';

// STYLE
import { flexBox } from '../../shared/style';

// REDUX
import { __deleteComment } from '../../redux/modules/comment';

// ICON
import { Trash2 } from 'react-feather';

const CatDetailCommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const commentId = comment.commentId;

  const deleteComment = () => {
    dispatch(__deleteComment(commentId));
  };

  return (
    <Grid
      margin="2% 0"
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

      <Text fontWeight="bold" size="15px" width="60%">
        {comment.username}: {comment.contents}
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

      <Button clickEvent={deleteComment}>
        <Trash2 size="14px" color="red" />
      </Button>
    </Grid>
  );
};

export default CatDetailCommentCard;
