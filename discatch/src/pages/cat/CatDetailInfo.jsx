// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { history } from "../../redux/configureStore";
const CatDetailInfo = (props) => {
  const dispatch = useDispatch();

  const isLoaded = useSelector((state) => state.mypage.isLoaded);
  const commentList = useSelector((state) => state.comment.list);
  const catDetailId = props.match.params.catDetailId;
  const village = props.match.params.village;
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

  const editCatDetail = () => {
    history.push({
      pathname: `/catdetailinfoedit/${catDetailId}`,
      state: village,
    });
  };
  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props}>
        <ContentHeader
          path="catdetail"
          FirstBtn="수정"
          SecondBtn="삭제"
          FirstClick={editCatDetail}
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
              width="90%"
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
                      <Grid
                        key={idx}
                        width="auto"
                        bgColor="yellow"
                        height="25px"
                        radius="20px"
                        margin="5px 10px 5px 0px "
                        padding="0px 5px 3px 5px"
                        style={{ fontSize: "10px" }}
                        addstyle={() => {
                          return css`
                            display: flex;
                            align-items: center;
                          `;
                        }}
                      >
                        #{tag}
                      </Grid>
                    );
                  })
                : ""}
            </Grid>
            <Grid
              width="10%"
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
