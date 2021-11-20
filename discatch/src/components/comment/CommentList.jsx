// LIBRARY
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Comment from "./Comment";
import CommentCard from "./CommentCard";

// STYLE
import { css } from "styled-components";
import { flexBox } from "../../shared/style";

// ELEMENTS
import { Grid, Button, TextArea } from "../../elements/index";

// REDUX
import { addCommunityCommentDB } from "../../redux/modules/community";
import { __createCatComment, __createCatDetailComment } from "../../redux/modules/comment";

const CommentList = ({ props, path, catId, communityId }) => {
  const dispatch = useDispatch();
  const community = useSelector((state) => state.community.list);

  const [comments, setComment] = React.useState("");
  let commentList;
  if (path === 'CatDetail' || path === 'CatDetailInfo') {
    commentList = props;
  } else {
    commentList = community.data?.commentList;
  }

  const $comment = (event) => {
    setComment(event.target.value);
  };

  const addCommentBtn = () => {
    if (path === 'CatDetail') {
      dispatch(__createCatComment(catId, comments))
    } else if (path === 'CatDetailInfo') {
      dispatch(__createCatDetailComment(catId, comments));
    } else {
      dispatch(addCommunityCommentDB(comments, communityId));
    }
    setComment("");
  };
  return (
    <>
      <Comment path={path} />
      <Grid
        width="95%"
        margin="0 auto"
        addstyle={() => {
          return css`
            ${flexBox("flex-start")}
          `;
        }}
      >
        <TextArea
          onChange={$comment}
          type="text"
          value={comments}
          placeholder="댓글 달기..."
          addstyle={() => {
            return css`
              border: 1px solid rgb(${(props) => props.theme.palette.yellow});
              border-radius: 10px;
              resize: none;
              overflow-y: hidden;
              height: 50px;
            `;
          }}
        />
        <Button
          width="40px"
          bgColor="yellow"
          margin="4px"
          clickEvent={addCommentBtn}
          addstyle={() => {
            return css`
              display: flex;
              position: sticky;
              height: 30px;
              align-items: center;
              justify-content: center;
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
    </>
  );
};

export default CommentList;
