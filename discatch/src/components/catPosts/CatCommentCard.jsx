// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// COMPONENTS
import EditModalSlide from "../EditModalSlide";

// ICON
import { Trash2 } from "react-feather";

// STYLE
import styled from "styled-components";

// REDUX
import { __deleteComment } from "../../redux/modules/comment";
import { chatActions } from "../../redux/modules/chat";


const CatCommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const commentId = comment.commentId;
  const UserInfo = useSelector((state) => state.mypage.userInfo);

  const CreatedAt = moment(comment.createdAt).format("YYYY-M-D hh:mm");
  const [ProfileModal, setProfileModal] = useState(false);
  const deleteComment = () => {
    dispatch(__deleteComment(commentId));
  };

  const OpenProfile = () => {
    if (UserInfo.nickname !== comment.nickname) {
      setProfileModal(!ProfileModal);
    }
  };

  const MakeChat = () => {
    const chatuser = { chatUser: [comment.nickname, UserInfo.nickname] };
    dispatch(chatActions._createRoom(chatuser));
  };

  return (
    <Wrap>
      <Header>
        <Left>
          <Profile onClick={OpenProfile}>
            <img src={comment.profileImageUrl} alt={comment.profileImageUrl} />
            <p>{comment.nickname}</p>
          </Profile>

          {CreatedAt ? <span>{CreatedAt}</span> : ""}
        </Left>

        <Right>
          {UserInfo.username === comment.username ? (
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
