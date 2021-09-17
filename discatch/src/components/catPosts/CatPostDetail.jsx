// library
import React, { useState } from 'react';
import { css } from 'styled-components';

// element
import { Grid, Button } from '../../elements';

// component
import { CatPost, CatCalendar, CatDiary, CatGallery } from '..';

const CatPostDetail = () => {
  const [menu, setMenu] = useState('캘린더');

  return (
    <Grid display="flex" flexDirection="column" overflow="hidden">
      <CatPost />

      <Grid
        margin="0 0 3% 0"
        addstyle={() => {
          return css`
            border-bottom: 2px solid #cbcf5e;
          `;
        }}
      >
        <Button
          clickEvent={() => {
            setMenu('캘린더');
          }}
          color={menu === '캘린더' ? 'olive' : 'black'}
          margin="2% 8% 0 5%"
          fontSize="1em"
          fontWeight="800"
        >
          캘린더
        </Button>
        <Button
          clickEvent={() => {
            setMenu('집사일기');
          }}
          color={menu === '집사일기' ? 'olive' : 'black'}
          fontSize="1em"
          fontWeight="800"
        >
          집사일기
        </Button>
        <Button
          clickEvent={() => {
            setMenu('갤러리');
          }}
          color={menu === '갤러리' ? 'olive' : 'black'}
          margin="0 8%"
          fontSize="1em"
          fontWeight="800"
        >
          갤러리
        </Button>
      </Grid>

      {menu === '캘린더' ? (
        <CatCalendar />
      ) : menu === '집사일기' ? (
        <CatDiary />
      ) : menu === '갤러리' ? (
        <CatGallery />
      ) : null}
    </Grid>
  );
};

export default CatPostDetail;
