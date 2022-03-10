// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Comment, CommentCard, Toast } from "..";

// STYLE
import { css } from "styled-components";

// ELEMENTS
import { Grid, Button, TextArea } from "elements/index";

// REDUX
import { addCommunityCommentDB } from "redux/modules/community";
import {
  __createCatComment,
  __createCatDetailComment,
} from "redux/modules/comment";

// HOOKS
import useToast from "hooks/useToast";

const CommentList = ({ props, path, catId, communityId }) => {
  const dispatch = useDispatch();

  // 토스트 모달
  const [toastState, setToastState] = useState(false);

  // 커뮤니티 댓글 리스트
  const communityDetailCmt = useSelector(
    (state) => state.community.communityDetail?.commentList
  );

  // 댓글 리스트
  let commentList;
  if (path === "CatDetail" || path === "CatDetailInfo") {
    commentList = [...props].reverse();
  } else if (communityDetailCmt) {
    commentList = [...communityDetailCmt].reverse();
  }

  const [comments, setComment] = React.useState("");
  const $comment = (event) => {
    setComment(event.target.value);
  };

  // 댓글 추가하기
  const addCommentBtn = () => {
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
  };

  // 토스트 모달
  useToast(toastState, setToastState);

  return (
    <>
      <Comment path={path} />
      <Grid
        width="95%"
        margin="0 auto"
        height="auto"
        addstyle={() => {
          return css`
            display: flex;
          `;
        }}
      >
        <TextArea
          onChange={$comment}
          type="text"
          value={comments}
          placeholder="댓글 달기..."
          keyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCommentBtn();
            }
          }}
          addstyle={() => {
            return css`
              position: relative;
              bottom: 20px;
              border: 1px solid rgb(${(props) => props.theme.palette.yellow});
              border-radius: 10px;
              resize: none;
              overflow-y: hidden;
              padding: 5px;
            `;
          }}
        />
        <Button
          width="40px"
          bgColor="yellow"
          clickEvent={addCommentBtn}
          addstyle={() => {
            return css`
              display: flex;
              position: relative;
              height: 30px;
              width: 50px;
              align-items: center;
              justify-content: center;
              padding: 5px;
              margin-left: 3px;
              bottom: 17px;
            `;
          }}
        >
          작성
        </Button>
      </Grid>
      {commentList &&
        commentList.map((comment, idx) => {
          return (
            <CommentCard
              key={idx}
              comment={comment}
              communityId={communityId}
            />
          );
        })}
      {toastState && <Toast message="댓글을 입력해주세요!" />}
    </>
  );
};

export default CommentList;
