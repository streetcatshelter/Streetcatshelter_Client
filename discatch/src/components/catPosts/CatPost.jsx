// library
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "styled-components";

// element
import { Grid, Text, Image, Button } from "../../elements";

// redux
import { history } from "../../redux/configureStore";
import { __catLike, __getCatDetail } from "../../redux/modules/cat";

// style
import { flexBox } from "../../shared/style";

// icon
import FavoriteIcon from "@material-ui/icons/Favorite";

const CatPost = ({ cat, location, path }) => {
  const dispatch = useDispatch();
  const catId = path === "detail" ? cat : cat.catId;

  const userLiked = cat.userLiked;

  const likeToggle = () => {
    dispatch(__catLike(catId, location));
  };

  useEffect(() => {
    if (path === "detail") {
      dispatch(__getCatDetail(catId));
      console.log("호출함");
    }
  }, []);

  return (
    <React.Fragment>
      <Grid
        margin="3% 0 0 0"
        bgColor="diaryColor"
        display="flex"
        padding="8px"
        height="80px"
        cursor="pointer"
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
          clickEvent={() => {
            history.push(`/catdetail/${location}/${cat.catId}`);
          }}
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
              clickEvent={() => {
                history.push(`/catdetail/${location}/${cat.catId}`);
              }}
            >
              {cat.catName}
            </Text>

            <Text
              fontWeight="bold"
              size="14px"
              margin="0 0 0 0"
              width="50%"
              clickEvent={() => {
                history.push(`/catdetail/${location}/${cat.catId}`);
              }}
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

          {cat.catTagList ? (
            <Grid
              clickEvent={() => {
                history.push(`/catdetail/${location}/${cat.catId}`);
              }}
              height="35px"
              addstyle={() => {
                return css`
                  ${flexBox("flex-start")}
                `;
              }}
            >
              {cat.catTagList.map((tag, idx) => {
                return (
                  <Text
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
          ) : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPost;
