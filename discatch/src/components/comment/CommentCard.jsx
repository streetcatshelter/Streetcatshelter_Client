import React, { useState } from "react";
import { useDispatch } from 'react-redux';

// ELEMENTS
import { Grid, Button, Text } from '../../elements/index';
import { flexBox } from '../../shared/style';

// COMPONENTS
import EditModalSlide from "../EditModalSlide";

// STYLE
import { css } from 'styled-components';
import styled from "styled-components";

// ICON
import { Trash2 } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

// REDUX
import { deleteCommunityCommentDB } from '../../redux/modules/community';
import { chatActions } from "../../redux/modules/chat";

const CommentCard = ({ comment }) => {
  const commentId = comment.commentId
  const dispatch = useDispatch();
  const username = comment.nickname ? comment.nickname : comment.username;
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo.split('"')[5];

  const [ProfileModal, setProfileModal] = useState(false);

  const OpenProfile = () => {
    if (userName !== comment.username) {
      setProfileModal(!ProfileModal);
    }
  };

  const MakeChat = () => {
    dispatch(chatActions._createRoom(comment.username));
  };

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
            margin: 6% 0 0 0;
          `;
        }}
      >
        <Grid>
        <Profile onClick={OpenProfile}>
            <Avatar 
              style={{width:'30px', 
                      height:'30px', 
                      margin:'3px'}} 
              src={comment.profileImageUrl} 
              alt={'profileImage'}/>
            <p>{username}</p>
        </Profile>
        <Text 
          width="300px" 
          margin="0 0 0 10px" 
          padding="4px"
          style={{borderRadius:'10px'}}
          
          >{comment.contents}</Text>
        <Text 
          margin="0 0 0 10px" 
          size="8px" 
          width="30vw" 
          style={{lineHeight:'30px'}}
        >
          {comment.createdAt[0]}.{comment.createdAt[1]}.{comment.createdAt[2]} {comment.createdAt[3]}시 {comment.createdAt[4]}분
        </Text>
        </Grid>

        {userName === comment.username && (
          <Button onClick={deleteBtn}>
            <Trash2 size="12px" color="red" />
          </Button>
        )}
      </Grid>
      <EditModalSlide
        FirstBtn="프로필보기"
        SecondBtn="채팅하기"
        Profile="profile"
        openModal={ProfileModal}
        FirstClick={() => {}}
        SecondClick={MakeChat}
      />
    </>
  );
};

const Profile = styled.div`
  width:30vw;
  display: flex;
  cursor: pointer;
  p {
    font-size: 14px;
    margin: 0px 5px;
    line-height: 30px;
    font-weight: bold;
  }
`;

export default CommentCard;
