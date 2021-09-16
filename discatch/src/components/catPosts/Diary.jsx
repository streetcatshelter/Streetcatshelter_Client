// library
import React from 'react';
import styled, { css } from 'styled-components';

// element
import { Grid, Text, Button, Image } from '../../elements';
import { flexBox } from '../../shared/style';

// icon
import { Eye, MessageCircle } from 'react-feather';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Diary = () => {
  return (
    <Grid bgColor="diaryColor" padding="6px" width="95%" margin="0 auto">
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
        <Image width="30px" height="30px" margin="0 3% 0 0" />
        <Text margin="0 30% 0 -35%">뽀삐맘</Text>
        <Text
          margin="0 3% 0 0"
          addstyle={() => {
            return css`
              font-size: 12px;
            `;
          }}
        >
          몇초전
        </Text>
      </Grid>

      <Text>
        오늘 간식줬어요~ 날씨 너무 좋은데 뽀삐 얼굴봐서 좋았습니다. 점점 마음을
        여는것 같아서 너무 기쁘네요~ :)내일도 볼수있기를 바랍니다 !
      </Text>

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
          10
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
          10
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
          10
        </Button>
      </Grid>
    </Grid>
  );
};

export default Diary;
