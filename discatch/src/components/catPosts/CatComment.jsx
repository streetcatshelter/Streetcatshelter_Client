// library
import React from 'react';
import styled, { css } from 'styled-components';

// element
import { Grid, Text, Button, Input } from '../../elements';

// style
import { flexBox } from '../../shared/style';

// redux

const CatComment = () => {
  return (
    <>
      <Grid
        margin="3% 0"
        padding="8px"
        display="flex"
        alignItems="center"
        addstyle={() => {
          return css`
            border-bottom: 1px solid #cbcf5e;
          `;
        }}
      >
        <Text fontWeight="700" size="16px">
          댓글
        </Text>
        <Count>2</Count>
      </Grid>

      <Grid
        alignItems="center"
        width="95%"
        margin="0 auto 20% auto"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Input
          width="85%"
          height="40px"
          padding="4px"
          radius="10px"
          placeholder="댓글 달기..."
          addstyle={() => {
            return css`
              border: 1px solid rgb(${(props) => props.theme.palette.yellow});
            `;
          }}
        />
        <Button
          width="45px"
          bgColor="yellow"
          addstyle={() => {
            return css`
              height: 40px;
            `;
          }}
        >
          작성
        </Button>
      </Grid>
    </>
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
  margin-left: 1%;
`;

export default CatComment;
