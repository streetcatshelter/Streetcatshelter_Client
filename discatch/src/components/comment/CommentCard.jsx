// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// COMPONENTS
import EditModalSlide from "../EditModalSlide";

// ELEMENTS
import { Text } from '../../elements/index';

// STYLE
import styled, { css }from "styled-components";

// ICON
import { Trash2 } from "react-feather";

// REDUX
import { deleteCommunityCommentDB } from "../../redux/modules/community";
import { chatActions } from "../../redux/modules/chat";
import { __deleteComment } from "../../redux/modules/comment";

const CommentCard = ({ comment, communityId }) => {
  const commentId = comment.commentId;
  const dispatch = useDispatch();
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const [ProfileModal, setProfileModal] = useState(false);
  const CreatedAt = moment(comment.createdAt).format("YYYY-M-D hh:mm");
  
  const OpenProfile = () => {
    if (UserInfo.nickname !== comment.nickname) {
      setProfileModal(!ProfileModal);
    }
  };

  const MakeChat = () => {
    const chatuser = { chatUser: [comment.nickname, UserInfo.nickname] };
    dispatch(chatActions._createRoom(chatuser));
  };

  const deleteBtn = () => {
    communityId
      ? dispatch(deleteCommunityCommentDB(commentId, communityId))
      : dispatch(__deleteComment(commentId));
  };
  return (
    <Wrap>
      <Header>
        <Left>
          <Profile onClick={OpenProfile} isMine={comment.isMine}>
            <img src={comment.profileImageUrl} alt={comment.profileImageUrl} />
            <p>{comment.nickname}</p>
          </Profile>

          {comment.createdAt ? <span>{CreatedAt}</span> : ""}
        </Left>

        <Right>
          {UserInfo.username === comment.username ? (
            <Trash2 size="14px" color="red" onClick={deleteBtn} />
          ) : (
            ""
          )}
        </Right>
      </Header>
      <Text 
          width="280px" 
          margin="0 0 0 10px" 
          padding="4px"
          addstyle={() => {
            return css`
              border-radius: 10px;
            `;
          }}>{comment.contents}</Text>
      <EditModalSlide
        FirstBtn="프로필보기"
        SecondBtn="채팅하기"
        Profile="profile"
        openModal={ProfileModal}
        FirstClick={() => {}}
        SecondClick={MakeChat}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 95%;
  margin: 20px auto;
`;
const Header = styled.div`
  display: flex;
  line-height: 15px;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  span {
    font-size: 10px;
    line-height: 30px;
    margin-left: 5px;
  }
`;

const Profile = styled.div`
  display: flex;
  ${(props) => (props.isMine ? "" : `cursor: pointer`)};
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    margin: 0px 5px;
    line-height: 30px;
    font-weight: bold;
  }
`;
const Right = styled.div`
  display: flex;
  line-height: 15px;
  cursor: pointer;
  align-items: center;
  svg {
    line-height: 14px;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

export default CommentCard;
