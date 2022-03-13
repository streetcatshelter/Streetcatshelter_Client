// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//utils
import { checkedOverDay } from "utils";

// COMPONENTS
import { EditModalSlide } from "components";

// STYLE
import * as S from "./CommentCard.styled";

// ICON
import { Trash2 } from "react-feather";

// REDUX
import { deleteCommunityCommentDB } from "redux/modules/community";
import { chatActions } from "redux/modules/chat";
import { __deleteComment } from "redux/modules/comment";
import { history } from "redux/configureStore";

const CommentCard = ({ comment, communityId }) => {
  const dispatch = useDispatch();
  const commentId = comment.commentId;
  const userInfo = useSelector((state) => state.mypage.userInfo);
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
      <S.Wrap>
        <S.Header>
          <S.UserInfoBox>
            <S.Profile onClick={OpenProfile}>
              <img
                src={comment.profileImageUrl}
                alt={comment.profileImageUrl}
              />
              <p>{comment.nickname}</p>
            </S.Profile>

            {comment.createdAt && (
              <span>{checkedOverDay(comment.createdAt)}</span>
            )}
          </S.UserInfoBox>

          <S.DeleteBox>
            {userInfo.nickname === comment.nickname && (
              <Trash2 size="14px" color="red" onClick={deleteBtn} />
            )}
          </S.DeleteBox>
        </S.Header>
        <S.CommentText>{comment.contents}</S.CommentText>
      </S.Wrap>
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

export default CommentCard;
