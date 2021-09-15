// library
import React from 'react';
import styled, { css } from 'styled-components';

// element
import { Grid, Image } from '../../elements';

// style
import { flexBox } from '../../shared/style';

const Gallery = () => {
  // map 돌리기
  return (
    <Grid>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
      </Grid>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
      </Grid>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
      </Grid>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
        <Image width="100%" height="120px" />
      </Grid>
    </Grid>
  );
};

const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgb(${(props) => props.theme.palette.D_yellow});
  font-size: 12px;
  text-align: center;
  line-height: 20px;
`;

export default Gallery;
