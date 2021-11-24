// LIBRARY
import React from "react";
import { useDispatch } from "react-redux";

// ELEMENTS
import { Grid, Text, Image, Button } from "../../elements";

// REDUX
import { history } from "../../redux/configureStore";
import { __catLike } from "../../redux/modules/cat";

// STYLE
import { css } from "styled-components";
import { flexBox } from "../../shared/style";

// ICON
import FavoriteIcon from "@material-ui/icons/Favorite";

const CatPost = ({ cat, location, path }) => {
  const dispatch = useDispatch();
  const catId = cat.catId;
  const userLiked = cat.userLiked;
  const likeToggle = () => {
    dispatch(__catLike(catId, location, path));
  };
  const CatDetailBtn = () => {
    if (path !== "detail") {
      history.push(`/catdetail/${location}/${cat.catId}`);
    } else return;
  };

  return (
    <React.Fragment>
      <Grid
        margin="3% 0 0 0"
        bgColor="diaryColor"
        display="flex"
        padding="8px"
        height="80px"
        cursor={path === "detail" ? "" : "pointer"}
        addstyle={() => {
          return css`
            ${flexBox("space-around")}
          `;
        }}
      >
        <Image
          src={cat.catImage}
          alt={cat.catImage}
          width="80px"
          height="80px"
          clickEvent={CatDetailBtn}
        />

        <Grid padding="3px" width="75%" height="70px">
          <Grid
            height="35px"
            line-height="14px"
            addstyle={() => {
              return css`
                ${flexBox("space-between")}
              `;
            }}
          >
            <Text
              fontWeight="bold"
              size="16px"
              width="35%"
              clickEvent={CatDetailBtn}
            >
              {cat.catName}
            </Text>

            <Text
              fontWeight="bold"
              size="14px"
              margin="0 0 0 0"
              width="50%"
              clickEvent={CatDetailBtn}
            >
              중성화: {cat.neutering}
            </Text>

            <Button padding="0" bgColor="diaryColor" clickEvent={likeToggle}>
              <FavoriteIcon
                style={{
                  color: userLiked ? "red" : "gray",
                }}
              />
            </Button>
          </Grid>
          <Grid
            addstyle={() => {
              return css`
                display: flex;
                flex-wrap: wrap;
                height: 30px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              `;
            }}
          >
            {cat.catTagList?.map((tag, idx) => {
              return (
                <Text
                  display="flex"
                  margin="0 2% 0 0"
                  padding="2px"
                  key={idx}
                  size="14px"
                  fontWeight="bold"
                >
                  #{tag.tag}
                </Text>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPost;
