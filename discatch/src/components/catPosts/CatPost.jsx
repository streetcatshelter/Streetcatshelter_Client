// library
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { css } from 'styled-components';

// element
import { Grid, Text, Image } from '../../elements';

// icon
import FavoriteIcon from '@material-ui/icons/Favorite';

// redux
import { history } from '../../redux/configureStore';

// style
import { flexBox } from '../../shared/style';

const CatPost = (props) => {
  const path = useLocation().pathname;
  // console.log(props.catTagList.tag);

  return (
    <React.Fragment>
      <Grid
        margin="6% 0 0 0"
        bgColor="diaryColor"
        display="flex"
        padding="8px"
        clickEvent={() => {
          history.push('/catdetail');
        }}
        cursor="pointer"
      >
        <Image src={props.catImage} borderRadius="10px" />
        <Grid padding="6px">
          <Grid
            height="auto"
            addstyle={() => {
              return css`
                ${flexBox('space-between')}
              `;
            }}
          >
            <Text fontWeight="bold" size="12px">
              {props.catName}
            </Text>{' '}
            <Text fontWeight="bold" size="12px" width="45%">
              중성화: {props.neutering}
            </Text>
            {path === '/catdetail' ? (
              <FavoriteIcon
                style={{
                  color: 'red',
                  // position: 'relative',
                  // bottom: '3px',
                  // right: '-20%',
                }}
              />
            ) : null}
          </Grid>
          <Grid
            margin="2% 0 0 0"
            addstyle={() => {
              return css`
                ${flexBox('space-between')}
              `;
            }}
          >
            <Text size="12px" fontWeight="bold">
              #태그 #태그2{}
            </Text>
            <Text size="10px" fontWeight="bold" width="45%">
              {props.createdAt}
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPost;
