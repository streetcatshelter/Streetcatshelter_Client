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
  EditModalSlide,
  Spinner,
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

  const { userProfile, nickname, username } = useSelector((state) => ({
    userProfile: state.mypage.userInfo.profileImageUrl,
    nickname: state.mypage.userInfo.nickname,
    username: state.mypage.userInfo.username,
    locationList: state.mypage.userInfo.locationList,
  }));

  const { image, diary, water, food, snack, createdAt, tags, likeCnt } =
    useSelector(
      (state) => ({
        image: state.cat.detail.catImages,
        diary: state.cat.detail.diary,
        water: state.cat.detail.water,
        food: state.cat.detail.food,
        snack: state.cat.detail.snack,
        createdAt: state.cat.detail.createdAt,
        tags: state.cat.detail.catTags,
        likeCnt: state.cat.detail.likeCnt,
      }),
      shallowEqual
    );
  const CreatedAt = moment(createdAt).format("YYYY-M-D hh:mm");
  const userLiked = useSelector((state) => state.cat.detail.userLiked);
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
        <Grid
          margin="2% auto"
          addstyle={() => {
            return css`
              ${flexBox("space-between")}
            `;
          }}
        >
          <Image
            margin="0 0 0 5%"
            src={userProfile}
            width="35px"
            height="35px"
            borderRadius="25px"
          />

          <Text width="30%" size="14px" fontWeight="bold">
            {nickname ? nickname : username}
          </Text>

          <Text width="35%" margin="0 -5% 0 0" size="12px" fontWeight="bold">
            {CreatedAt}
          </Text>

          <EditModalSlide
            FirstBtn={"수정"}
            FirstClick={() => {}}
            SecondBtn={"삭제"}
            SecondClick={deleteCatDetail}
          />
        </Grid>
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
            <CheckSquare color={water === false ? "black" : "#cbcf5e"} />
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Text fontWeight="bold">사료</Text>
            <CheckSquare color={food === false ? "black" : "#cbcf5e"} />
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Text fontWeight="bold">간식</Text>
            <CheckSquare color={snack === false ? "black" : "#cbcf5e"} />
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
            {diary}
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
            <Grid>
              {tags && tags.length > 0 ? (
                tags.map((tag, idx) => {
                  return (
                    <Text fontWeight="500" key={idx} width="80%">
                      #{tag}
                    </Text>
                  );
                })
              ) : (
                <Grid width="80%"></Grid>
              )}
            </Grid>
            <Grid
              width="20%"
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: flex-end;
                `;
              }}
            >
              <Button
                bgColor="diaryColor"
                color={userLiked ? "red" : "black"}
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
              {likeCnt ? (
                <Text
                  addstyle={() => {
                    return css`
                      line-height: 24px;
                      font-weight: bold;
                      margin: 0px 5px;
                    `;
                  }}
                >
                  {likeCnt}
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
