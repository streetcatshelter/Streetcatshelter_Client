// library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// element
import { Grid, Text, Image, Button } from '../../elements';

// redux
import { history } from '../../redux/configureStore';
import { __catLike } from '../../redux/modules/cat';

// style
import { flexBox } from '../../shared/style';

// icon
import FavoriteIcon from '@material-ui/icons/Favorite';

const CatPost = ({ cat }) => {
  const dispatch = useDispatch();
  const catId = cat.catId;
  const userLiked = cat.userLiked;
  console.log(userLiked);
  // console.log(cat);

  const likeToggle = () => {
    dispatch(__catLike(catId));
  };

  return (
    <React.Fragment>
      <Grid
        margin="3% 0 0 0"
        bgColor="diaryColor"
        display="flex"
        padding="8px"
        alignItems="center"
        cursor="pointer"
      >
        <Image src={cat.catImage} borderRadius="10px" />

        <Grid padding="6px" alignItems="center">
          <Grid
            height="auto"
            addstyle={() => {
              return css`
                ${flexBox('space-between')}
              `;
            }}
          >
            <Text fontWeight="bold" size="14px" width="35%">
              {cat.catName}
            </Text>

            <Text fontWeight="bold" size="14px" margin="0 0 0 0" width="50%">
              중성화: {cat.neutering}
            </Text>

            <Button
              padding="0"
              bgColor="diaryColor"
              color={userLiked === true ? 'red' : 'black'}
              clickEvent={likeToggle}
            >
              <FavoriteIcon />
            </Button>

            <Button
              clickEvent={() => {
                history.push(`/catdetail/${catId}`);
              }}
              fontWeight="bold"
              padding="0"
              margin="0 -3% 0 0"
              width="75px"
              bgColor="diaryColor"
              addstyle={() => {
                return css`
                  ${flexBox('flex-end')}
                `;
              }}
            >
              자세히보기
            </Button>
          </Grid>

          {cat.catTagList ? (
            <Grid
              margin="2% 0 0 0"
              addstyle={() => {
                return css`
                  ${flexBox('flex-start')}
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
