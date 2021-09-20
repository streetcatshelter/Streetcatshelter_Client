import React from 'react';
import { useDispatch } from 'react-redux';

/* == Custom - Elements*/
import { Grid, Input, Button, Text } from '../../elements/index';
import { flexBox, flexHoz } from '../../shared/style';

/* == Library - style */
import styled, { css } from 'styled-components';

// icon
import { Trash2 } from "react-feather";

// REDUX
import { deleteCommunityCommentDB } from '../../redux/modules/comment';

const CommentCard = ({comment}) => {
    // const commentId = comment.commentId
    const commentId = '테스트';
    const dispatch = useDispatch();
//   const userName = useSelctor((state) => state.user); // 유저 정보에서 받아오기
// username >> community.username에서 받아오기
  const userName = 'test';
  const username = 'test2';


  const deleteBtn = () => {
    dispatch(deleteCommunityCommentDB(commentId));
  };

    return (
        <>
        <Grid
        margin="0 10px"
        addstyle={() => {
          return css`
            ${flexBox('flex-start')};
            font-size: 14px;
          `;
        }}
      >
        <p style={{}}>망원동 왕집사:</p>
        <p style={{ marginLeft: '4px', width: '160px' }}>왕 귀엽습니다!!</p>
      </Grid>
      <Grid
        addstyle={() => {
          return css`
          display:flex;
            ${flexHoz('flex-end')}
          `;
        }}
      >
            <Text 
                margin="-30px 0 0 0" 
                size="10px"
                addstyle={() => {
                    return css`
                        position:relative;
                        right:30px;
                    `;
                  }}
            >
            2021-09-02 17:34 
            </Text>
            {userName === username &&
            <Trash2 
                width="12px" 
                color="red" 
                onClick={deleteBtn}
                style={{position:'relative',top:'-35px',left:'-25px'}}
            />}
      </Grid>
      </>
    );
};

export default CommentCard;