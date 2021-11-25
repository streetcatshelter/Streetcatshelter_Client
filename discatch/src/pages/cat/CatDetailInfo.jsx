// LIBRARY
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import moment from "moment";

// STYLE
import { flexBox } from "../../shared/style";
import { css } from "styled-components";

// ELEMENTS
import { Grid, Text, Image, Button } from "../../elements";

// COMPONENTS
import {
  Template,
  CommentList,
  Spinner,
  ContentHeader,
} from "../../components";

// ICON
import { CheckSquare } from "react-feather";
import FavoriteIcon from "@material-ui/icons/Favorite";

// REDUX
import {
  __getCatDetail,
  __deleteCatDetail,
  __catDetailLike,
} from "../../redux/modules/cat";
import { __getDetailComment } from "../../redux/modules/comment";

const CatDetailInfo = (props) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.mypage.isLoaded);
  const commentList = useSelector((state) => state.comment.list);
  const catDetailId = props.match.params.catDetailId;

  const detail = useSelector((state) => state.cat.detail);
  const image = detail.catImages;
  const likeToggle = () => {
    dispatch(__catDetailLike(catDetailId));
  };

  useEffect(() => {
    dispatch(__getCatDetail(catDetailId));
  }, [catDetailId, dispatch]);

  useEffect(() => {
    dispatch(__getDetailComment(catDetailId));
  }, [catDetailId, commentList.length, dispatch]);

  const deleteCatDetail = () => {
    dispatch(__deleteCatDetail(catDetailId));
  };

  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props}>
        <ContentHeader
          path="catdetail"
          FirstBtn="수정"
          SecondBtn="삭제"
          FirstClick={() => {}}
          SecondClick={deleteCatDetail}
        />
        {image && image[0] && (
          <Image
            src={image[0]}
            margin="10px auto"
            width="300px"
            height="300px"
          />
        )}
        {image && image[1] && (
          <Image
            src={image[1]}
            margin="10px auto"
            width="300px"
            height="300px"
          />
        )}
        {image && image[2] && (
          <Image
            src={image[2]}
            margin="10px auto"
            width="300px"
            height="300px"
          />
        )}

        <Grid
          margin="5% 0"
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Text fontWeight="bold">급수</Text>
            <CheckSquare color={detail.water === false ? "black" : "#cbcf5e"} />
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Text fontWeight="bold">사료</Text>
            <CheckSquare color={detail.food === false ? "black" : "#cbcf5e"} />
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Text fontWeight="bold">간식</Text>
            <CheckSquare color={detail.snack === false ? "black" : "#cbcf5e"} />
          </Grid>
        </Grid>

        <Grid
          bgColor="diaryColor"
          padding="20px"
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
            `;
          }}
        >
          <Text margin="0 0 5% 0" fontWeight="500">
            {detail.diary}
          </Text>

          <Grid
            addstyle={() => {
              return css`
                width: 100%;
                display: flex;
                justify-content: space-between;
              `;
            }}
          >
            <Grid
              width="80%"
              display="flex"
              addstyle={() => {
                return css`
                  flex-wrap: wrap;
                `;
              }}
            >
              {detail.catTags && detail.catTags.length > 0
                ? detail.catTags.map((tag, idx) => {
                    return (
                      <Text fontWeight="500" key={idx} margin="0px 5px 0px 0px">
                        #{tag}
                      </Text>
                    );
                  })
                : ""}
            </Grid>
            <Grid
              width="20%"
              height="auto"
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-end;
                `;
              }}
            >
              <Button
                bgColor="diaryColor"
                color={detail.userLiked ? "red" : "black"}
                clickEvent={likeToggle}
                addstyle={() => {
                  return css`
                    padding: 0px;
                    line-height: 20px;
                  `;
                }}
              >
                <FavoriteIcon />
              </Button>
              {detail.likeCnt ? (
                <Text
                  addstyle={() => {
                    return css`
                      line-height: 24px;
                      font-weight: bold;
                      margin: 0px 5px;
                    `;
                  }}
                >
                  {detail.likeCnt}
                </Text>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Grid>
        <CommentList
          props={commentList}
          path="CatDetailInfo"
          catId={catDetailId}
        />
      </Template>
    </>
  );
};

export default CatDetailInfo;
