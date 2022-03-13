import React from "react";
import { useSelector } from "react-redux";
// COMPONENTS
import { CommentHead, CommentCard } from "components";

const CommentList = ({ props, path, catId, communityId }) => {
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

  return (
    <>
      <CommentHead path={path} catId={catId} communityId={communityId} />
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
