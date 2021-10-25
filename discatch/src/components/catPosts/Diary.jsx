// library
import React from 'react';
import { css } from 'styled-components';

// element
import { Grid, Text, Button, Image } from '../../elements';
import { flexBox } from '../../shared/style';

// icon
import { Eye, MessageCircle } from 'react-feather';
import FavoriteIcon from '@material-ui/icons/Favorite';

// route
import { history } from '../../redux/configureStore';

const Diary = ({ diary }) => {
  const catDetailId = diary.catDetailId;

  return (
    <Grid
      bgColor="diaryColor"
      padding="6px"
      width="95%"
      margin="3%  auto"
      clickEvent={() => history.push(`/catdetailinfo/${catDetailId}`)}
    >
      <Grid
        margin="0 0 3% 0"
        display="flex"
        alignItems="center"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Image
          src={diary.profileImageUrl}
          width="30px"
          height="30px"
          margin="0 3% 0 0"
        />
        <Text margin="0 30% 0 -35%">{diary.username}</Text>
        <Text
          margin="0 3% 0 0"
          addstyle={() => {
            return css`
              font-size: 12px;
            `;
          }}
        >
          {diary.createdAt[5]}초전
        </Text>
      </Grid>

      <Text>{diary.diary}</Text>

      <Grid
        bgcolor="diaryColor"
        addstyle={() => {
          return css`
            ${flexBox('flex-end')}
          `;
        }}
      >
        <Button
          margin="0 3%"
          addstyle={() => {
            return css`
              background: #fcf6e8;
            `;
          }}
        >
          <Eye size="18" />
          {diary.viewCnt}
        </Button>

        <Button
          margin="0 3%"
          addstyle={() => {
            return css`
              background: #fcf6e8;
            `;
          }}
        >
          <MessageCircle size="18" />
          {diary.commentCnt}
        </Button>

        <Button
          margin="0 3%"
          addstyle={() => {
            return css`
              background: #fcf6e8;
            `;
          }}
        >
          <FavoriteIcon style={{ fontSize: '18', color: 'red' }} />
          {diary.likeCnt}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Diary;
