// LIBRARY
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// MOMENT
import moment from "moment";

// COMPONENTS
import { EditModalSlide } from "../";
import { Toast } from "../";

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
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const [ProfileModal, setProfileModal] = useState(false);
  const CreatedAt = moment(comment.createdAt).format("YYYY-MM-DD hh:mm");
  const [commentStatus, setCommentStatus] = useState(false);

  const OpenProfile = () => {
    setProfileModal(!ProfileModal);
  };

  const MakeChat = () => {
    const chatuser = { chatUser: [comment.nickname, UserInfo.nickname] };
    dispatch(chatActions._createRoom(chatuser));
    setProfileModal(!ProfileModal);
  };

  const deleteCommunityComment = () => {
    setCommentStatus(true);
    setTimeout(() => {
      dispatch(deleteCommunityCommentDB(commentId, communityId));
    }, 1000);
  };

  const deleteComment = () => {
    setCommentStatus(true);
    setTimeout(() => {
      dispatch(__deleteComment(commentId));
    }, 1000);
  };

  const deleteBtn = () => {
    communityId ? deleteCommunityComment() : deleteComment();
  };

  useEffect(() => {
    if (commentStatus) {
      setTimeout(() => {
        setCommentStatus(false);
      }, 1500);
    }
  }, [commentStatus]);

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

            {comment.createdAt ? <span>{CreatedAt}</span> : ""}
          </Left>

          <Right>
            {UserInfo.nickname === comment.nickname ? (
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
      {UserInfo.nickname === comment.nickname ? (
        <EditModalSlide
          FirstBtn="내프로필보기"
          SecondBtn="내프로필수정"
          Profile="profile"
          openModal={ProfileModal}
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
          openModal={ProfileModal}
          FirstClick={() => {
            history.push(`/user/${comment.userRandomId}`);
          }}
          SecondClick={MakeChat}
        />
      )}
      {commentStatus && <Toast message="댓글을 삭제했어요!" />}
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
