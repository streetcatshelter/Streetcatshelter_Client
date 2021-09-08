// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
//STYLE
import { flexBox } from '../shared/style';
// ELEMENTS
import { Grid, Input, Button } from '../elements/index';
const Comment = () => {
  return (
    <Grid
      margin="200px 0px 15px 0px"
      addstyle={() => {
        return css`
          border-bottom: 1px solid rgb(${(props) => props.theme.palette.olive});
          ${flexBox('flex-start')}
        `;
      }}
    >
      <p style={{ margin: '2px 3px', fontWeight: 800, fontSize: '18px' }}>
        댓글
      </p>
      <Count>25</Count>
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

export default Comment;
