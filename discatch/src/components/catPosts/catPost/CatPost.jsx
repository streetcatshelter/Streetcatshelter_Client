// LIBRARY
import React from "react";
import { useDispatch } from "react-redux";

// REDUX
import { history } from "redux/configureStore";
import { __catLike } from "redux/modules/cat";
//styles
import * as S from "./CatPost.Styled";

const CatPost = ({ cat, path, location }) => {
  const dispatch = useDispatch();
  const catId = cat.catId;
  const userLiked = cat.userLiked;

  // 고양이 기본 정보 게시물 좋아요 토글
  const likeToggle = () => {
    dispatch(__catLike(catId, path));
  };

  // 고양이 게시물 상세보기
  const catDetailBtn = () => {
    if (path !== "detail") {
      history.push({
        pathname: `/catdetail/calendar/${location.split(" ")[2]}/${cat.catId}`,
        state: { location },
      });
    } else return;
  };

  //고양이 정보 수정
  const goToEdit = () => {
    history.push({
      pathname: `/catinfoedit/${catId}`,
      state: { location },
    });
  };

  return (
    <S.CatPostStyle>
      <S.LeftBox>
        <S.CatImage
          src={cat.catImage}
          alt={cat.catImage}
          onClick={catDetailBtn}
        />
      </S.LeftBox>
      <S.RightBox>
        <S.Header>
          <div style={{ display: "flex" }}>
            <p onClick={catDetailBtn}>
              이름: {cat.catName ? cat.catName : "이름을 지어주세요!"}
            </p>
            <p onClick={catDetailBtn}> 중성화: {cat.neutering}</p>
          </div>
          {path === "detail" && <S.MoreHorizontalBtn onClick={goToEdit} />}
        </S.Header>
        <S.BodyBox>
          <S.TagOutBox onClick={catDetailBtn}>
            {cat.catTagList?.map((tag) => {
              return <S.TagBox key={tag.tag}>#{tag.tag}</S.TagBox>;
            })}
          </S.TagOutBox>
          <S.LikeBox>
            <S.FavoriteIconBtn
              onClick={likeToggle}
              userliked={userLiked?.toString()}
            />
          </S.LikeBox>
        </S.BodyBox>
      </S.RightBox>
    </S.CatPostStyle>
  );
};

export default CatPost;
