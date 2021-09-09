import React from "react";
import { Grid, Text, Button } from "../../elements";
import styled, { css } from "styled-components";
//STYLE
import { flexBox } from "../../shared/style";
const Diary = () => {
  return (
    <React.Fragment>
      <Grid
        addstyle={() => {
          return css`
            border-bottom: 1px solid
              rgb(${(props) => props.theme.palette.olive});
            ${flexBox("flex-start")}
          `;
        }}
      >
        <Text margin="2px 3px" fontWeight="700" size="16px">
          집사일기
        </Text>
        <Count>25</Count>
      </Grid>
      <Grid height="60px" width="92%" margin="auto">
        <Grid display="flex" height="20px" justifyContent="space-between">
          <Text>구내염이 있어보입니다ㅠㅠ </Text>
          <Text size="10px">2021-09-02 17:34</Text>
        </Grid>
        <Grid display="flex" height="20px" justifyContent="space-between">
          <Text>추운데 걱정되네요~ </Text>
          <Text size="10px">몇초전</Text>
        </Grid>
      </Grid>
      <Button>더보기</Button>
    </React.Fragment>
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

export default Diary;
