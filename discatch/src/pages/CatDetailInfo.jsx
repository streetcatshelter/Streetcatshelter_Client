// library
import React from 'react';
import styled, { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// element
import { Grid, Text, Image, Button } from '../elements';

// component
import { Template, CommentList } from '../components';

// icon
import { MoreHorizontal, CheckSquare } from 'react-feather';

const CatDetailInfo = (props) => {
  return (
    <Template props={props}>
      <Grid
        margin="2% 0"
        addstyle={() => {
          return css`
            ${flexBox('space-around')}
          `;
        }}
      >
        <Image width="35px" height="35px" borderRadius="25px" />

        <Text margin="0 15% 0 -6%" fontWeight="bold">
          뽀삐맘
        </Text>

        <Text size="12px" fontWeight="bold">
          2021-09-10-17:55
        </Text>

        <Button>
          <MoreHorizontal color="#cbcf5e" />
        </Button>
      </Grid>

      <Image margin="auto" width="300px" height="140px" />

      <Grid
        margin="3% 0"
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
          <CheckSquare color="#cbcf5e" />
        </Grid>

        <Grid
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Text fontWeight="bold">사료</Text>
          <CheckSquare color="#cbcf5e" />
        </Grid>

        <Grid
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Text fontWeight="bold">간식</Text>
          <CheckSquare color="#cbcf5e" />
        </Grid>
      </Grid>

      <Text bgColor="diaryColor" fontWeight="500" padding="20px">
        오늘 간식줬어요~ 날씨 너무 좋은데 뽀삐 얼굴봐서 좋았습니다. 점점 마음을
        여는것 같아서 너무 기쁘네요~ :)내일도 볼수있기를 바랍니다 !
        <br />
        <br />
        <TagStyle>#코숏 #양말신음 #고등어 #핑크젤리</TagStyle>
      </Text>

      <CommentList />
    </Template>
  );
};

const TagStyle = styled.span`
  font-weight: bold;
`;

export default CatDetailInfo;
