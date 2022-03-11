import React, { useEffect } from "react";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { __getDiary } from "redux/modules/cat";
import { history } from "redux/configureStore";
// ELEMENTS
import { Text } from "elements";
//styles
import * as S from "./CatDiary.styled";
// ICON
import { Eye, MessageCircle } from "react-feather";
import FavoriteIcon from "@material-ui/icons/Favorite";
//utils
import { dateFormat } from "utils";

const CatDiary = ({ location, catId }) => {
  const dispatch = useDispatch();
  const diaryList = useSelector((state) => state.cat.diary);

  useEffect(() => {
    dispatch(__getDiary(catId));
  }, [catId, dispatch]);

  return (
    <>
      {diaryList.map((diary, idx) => {
        const createdAt = dateFormat(diary.createdAt);
        return (
          <S.CardWrap
            key={idx}
            onClick={() =>
              history.push(
                `/catdetailinfo/${location?.split(" ")[2]}/${diary.catDetailId}`
              )
            }
          >
            <S.CardHeader>
              <S.HeaderUserInfo>
                <S.UserImage src={diary.profileImageUrl} />
                <Text fontWeight="bold" size="16px">
                  {diary.nickname}
                </Text>
              </S.HeaderUserInfo>
              <Text fontWeight="bold" size="14px">
                {createdAt}
              </Text>
            </S.CardHeader>

            <S.DiaryText>{diary.diary}</S.DiaryText>

            <S.CountBox>
              <Eye />
              {diary.viewCnt}
              <MessageCircle />
              {diary.commentCnt}
              <FavoriteIcon />
              {diary.likeCnt}
            </S.CountBox>
          </S.CardWrap>
        );
      })}
    </>
  );
};

export default CatDiary;
