// LIBRARY
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// ROUTE
import { useLocation } from "react-router-dom";
// REDUX
import {
  communityLikeToggleDB,
  addCommunityCommentDB,
} from "redux/modules/community";
import {
  __createCatComment,
  __createCatDetailComment,
} from "redux/modules/comment";
// STYLE
import * as S from "./Comment.styled";
//COMPONENTS
import { Toast } from "components";

// HOOKS
import useToast from "hooks/useToast";

const CommentHead = ({ path, catId, communityId }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const communityPath = location.pathname.split("/")[1] === "community";
  const [toastState, setToastState] = useState(false);
  const [comments, setComment] = useState(null);
  const textareaRef = useRef(null);

  const communityDetail = useSelector(
    (state) => state.community.communityDetail
  );
  const commentList = useSelector((state) =>
    path === "CatDetail" ? state.comment.list : communityDetail.commentList
  );

  const updateLikes = (communityId) => {
    dispatch(communityLikeToggleDB(communityId));
  };
  const changeCommentHandler = (event) => {
    setComment(event.target.value);
  };

  // 댓글 추가하기
  const addCommentBtn = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (comments === "") {
        setToastState(true);
      } else {
        if (path === "CatDetail") {
          dispatch(__createCatComment(catId, comments));
        } else if (path === "CatDetailInfo") {
          dispatch(__createCatDetailComment(catId, comments));
        } else {
          dispatch(addCommunityCommentDB(comments, communityId));
        }
        setComment("");
      }
    }
  };
  useToast(toastState, setToastState);
  return (
    <>
      {commentList && (
        <S.Wrapper>
          <S.Header>
            <S.CommentCnt>
              <S.Text>댓글</S.Text>
              <S.Count>{commentList?.length}</S.Count>
            </S.CommentCnt>
            {communityPath && (
              <S.LikedBox>
                <S.FavoriteIcon
                  onClick={() => updateLikes(communityDetail?.communityId)}
                  liked={communityDetail.liked}
                />
                <S.Text>{communityDetail.cntLikeit}</S.Text>
              </S.LikedBox>
            )}
          </S.Header>
          <S.InputBox>
            <S.CommentTextArea
              changeEvent={changeCommentHandler}
              type="text"
              value={comments}
              placeholder="댓글 달기..."
              textareaRef={textareaRef}
              keyPress={addCommentBtn}
            />
            <S.WriteBtn onClick={addCommentBtn}>작성</S.WriteBtn>
          </S.InputBox>
          {toastState && <Toast message="댓글을 입력해주세요!" />}
        </S.Wrapper>
      )}
    </>
  );
};

export default CommentHead;
