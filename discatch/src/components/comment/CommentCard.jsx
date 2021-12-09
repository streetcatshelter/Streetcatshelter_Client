// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// COMPONENTS
import { EditModalSlide } from "../";

// ELEMENTS
import { Text } from "../../elements/index";

// STYLE
import styled, { css } from "styled-components";

// ICON
import { Trash2 } from "react-feather";

// REDUX
import { deleteCommunityCommentDB } from "../../redux/modules/community";
import { chatActions } from "../../redux/modules/chat";
import { __deleteComment } from "../../redux/modules/comment";
import { history } from "../../redux/configureStore";

const CommentCard = ({ comment, communityId }) => {
  const dispatch = useDispatch();
  const commentId = comment.commentId;
  const userInfo = useSelector((state) => state.mypage.userInfo);
  const createdAt = moment(comment.createdAt).format("YYYY-MM-DD hh:mm");

  // 프로필 모달
  const [profileModal, setProfileModal] = useState(false);

  const OpenProfile = () => {
    setProfileModal(!profileModal);
  };

  // 채팅방 생성하기
  const MakeChat = () => {
    const chatuser = { chatUser: [comment.nickname, userInfo.nickname] };
    dispatch(chatActions._createRoom(chatuser));
    setProfileModal(!profileModal);
  };

  // 댓글 삭제하기
  const deleteCommunityComment = () => {
    dispatch(deleteCommunityCommentDB(commentId, communityId));
  };
  const deleteComment = () => {
    dispatch(__deleteComment(commentId));
  };
  const deleteBtn = () => {
    communityId ? deleteCommunityComment() : deleteComment();
  };

  return (
    <>
      <Wrap>
        <Header>
          <Left>
            <Profile onClick={OpenProfile}>
              <img
                src={comment.profileImageUrl}
                alt={comment.profileImageUrl}
              />
              <p>{comment.nickname}</p>
            </Profile>

            {comment.createdAt ? <span>{createdAt}</span> : ""}
          </Left>

          <Right>
            {userInfo.nickname === comment.nickname ? (
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
          }}
        >
          {comment.contents}
        </Text>
      </Wrap>
      {userInfo.nickname === comment.nickname ? (
        <EditModalSlide
          FirstBtn="내프로필보기"
          SecondBtn="내프로필수정"
          Profile="profile"
          openModal={profileModal}
          FirstClick={() => {
            history.push(`/user/${comment.userRandomId}`);
          }}
          SecondClick={() => {
            history.push("/userinfoedit");
          }}
        />
      ) : (
        <EditModalSlide
          FirstBtn="프로필보기"
          SecondBtn="채팅하기"
          Profile="profile"
          openModal={profileModal}
          FirstClick={() => {
            history.push(`/user/${comment.userRandomId}`);
          }}
          SecondClick={MakeChat}
        />
      )}
    </>
  );
};

const Wrap = styled.div`
  width: 95%;
  margin: 0 auto 20px;
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
    margin-right: 10px;
  }
`;

export default CommentCard;
