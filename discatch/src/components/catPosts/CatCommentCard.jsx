// library
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EditModalSlide from "../EditModalSlide";
// redux
import { __deleteComment } from "../../redux/modules/comment";
import { chatActions } from "../../redux/modules/chat";
// icon
import { Trash2 } from "react-feather";

const CatCommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const commentId = comment.commentId;
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo.split('"')[5];
  const [ProfileModal, setProfileModal] = useState(false);
  const deleteComment = () => {
    dispatch(__deleteComment(commentId));
  };

  const OpenProfile = () => {
    if (userName !== comment.username) {
      setProfileModal(!ProfileModal);
    }
  };

  const MakeChat = () => {
    dispatch(chatActions._createRoom(comment.username));
  };

  return (
    <Wrap>
      <Header>
        <Left>
          <Profile onClick={OpenProfile}>
            <img src={comment.profileImageUrl} alt={comment.profileImageUrl} />
            <p>{comment.username}</p>
          </Profile>

          {comment.createdAt ? (
            <span>
              {comment.createdAt[0]}.{comment.createdAt[1]}.
              {comment.createdAt[2]} {comment.createdAt[3]}:
              {comment.createdAt[4]}
            </span>
          ) : (
            ""
          )}
        </Left>

        <Right>
          {userName === comment.username ? (
            <Trash2 size="14px" color="red" onClick={deleteComment} />
          ) : (
            ""
          )}
        </Right>
      </Header>
      <Content>{comment.contents}</Content>
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
  width: 100%;
  margin: 15px 0px;
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
  cursor: pointer;
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
  }
`;

const Content = styled.p`
  line-height: 15px;
  margin: 5px;
  font-size: 14px;
`;

export default CatCommentCard;
