// LIBRARY
import React from "react";
import { useDispatch } from "react-redux";

// ELEMENTS
import { Grid, Text, Image, Button } from "../../elements";

// REDUX
import { history } from "../../redux/configureStore";
import { __catLike } from "../../redux/modules/cat";

// STYLE
import styled, { css } from "styled-components";
import { flexBox } from "../../shared/style";

// ICON
import FavoriteIcon from "@material-ui/icons/Favorite";
// ICON
import { MoreHorizontal } from "react-feather";
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
            <Grid
              display="flex"
              addstyle={() => {
                return css`
                  align-items: center;
                  line-height: 20px;
                `;
              }}
            >
              <Text fontWeight="bold" size="16px" clickEvent={CatDetailBtn}>
                {cat.catName}
              </Text>

              <Text
                fontWeight="bold"
                size="14px"
                margin="0 0 0 10px"
                clickEvent={CatDetailBtn}
              >
                중성화: {cat.neutering}
              </Text>
            </Grid>
            {path === "detail" && (
              <MoreHorizontalBtn
                style={{ color: "rgb(249, 200, 82)" }}
                onClick={() => history.push(`/catinfoedit/${catId}`)}
              />
            )}
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Grid
              clickEvent={CatDetailBtn}
              addstyle={() => {
                return css`
                  display: flex;
                  flex-wrap: wrap;
                  height: 25px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `;
              }}
            >
              {cat.catTagList?.map((tag, idx) => {
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
                    #{tag.tag}
                  </Grid>
                );
              })}
            </Grid>

            <FavoriteIcon
              onClick={likeToggle}
              style={{
                color: userLiked ? "red" : "gray",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const MoreHorizontalBtn = styled(MoreHorizontal)`
  &:hover {
    color: #cbcf52;
  }
`;

export default CatPost;
