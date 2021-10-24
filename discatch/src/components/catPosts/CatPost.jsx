// library
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const [like, setLike] = useState(false);

  const likeToggle = () => {
    dispatch(__catLike(catId));
    if (like === false) {
      setLike(true);
    } else if (like === true) {
      setLike(false);
    }
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
            <Text fontWeight="bold" size="12px" width="40%">
              {cat.catName}
            </Text>

            <Text fontWeight="bold" size="12px" margin="0 0 0 0" width="60%">
              중성화: {cat.neutering}
            </Text>

            <Button
              padding="0"
              bgColor="diaryColor"
              color={like === true ? 'red' : 'black'}
              clickEvent={likeToggle}
            >
              <FavoriteIcon />
            </Button>
          </Grid>

          {cat.catTagList ? (
            <Grid
              margin="2% 0 0 0"
              addstyle={() => {
                return css`
                  ${flexBox('space-between')}
                `;
              }}
            >
              {cat.catTagList.map((tag, idx) => {
                return (
                  <Text key={idx} size="12px" fontWeight="bold">
                    #{tag.tag}
                  </Text>
                );
              })}

              <Button
                clickEvent={() => {
                  history.push(`/catdetail/${catId}`);
                }}
                fontWeight="bold"
                padding="0"
                bgColor="diaryColor"
              >
                자세히보기
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPost;
