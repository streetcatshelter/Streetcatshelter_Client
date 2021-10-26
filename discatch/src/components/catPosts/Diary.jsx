// library
import React from 'react';
import { css } from 'styled-components';

// element
import { Grid, Text, Button, Image } from '../../elements';
import { flexBox } from '../../shared/style';

// icon
import { Eye, MessageCircle } from 'react-feather';
import FavoriteIcon from '@material-ui/icons/Favorite';

// redux
import { history } from '../../redux/configureStore';

const Diary = ({ diary }) => {
  const catDetailId = diary.catDetailId;

  return (
    <Grid
      bgColor="diaryColor"
      padding="6px"
      width="95%"
      margin="2%  auto"
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
          borderRadius="20px"
        />
        <Text width="25%" margin="0 20% 0 0" fontWeight="bold" size="16px">
          {diary.username}
        </Text>
        <Text margin="0 0 0 5%" width="45%" fontWeight="bold" size="14px">
          {diary.createdAt ? (
            `${diary.createdAt[0]}.${diary.createdAt[1]}.${diary.createdAt[2]} ${diary.createdAt[3]}시 ${diary.createdAt[4]}분`
          ) : (
            <></>
          )}
        </Text>
      </Grid>

      <Text size="16px">{diary.diary}</Text>

      <Grid
        bgColor="diaryColor"
        addstyle={() => {
          return css`
            ${flexBox('flex-end')}
          `;
        }}
      >
        <Button bgColor="diaryColor">
          <Eye size="18" />
          {diary.viewCnt}
        </Button>

        <Button margin="0 3%" bgColor="diaryColor">
          <MessageCircle size="18" />
          {diary.commentCnt}
        </Button>

        <Button bgColor="diaryColor">
          <FavoriteIcon style={{ fontSize: '18', color: 'red' }} />
          {diary.likeCnt}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Diary;
