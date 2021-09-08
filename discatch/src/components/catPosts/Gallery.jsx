import React from "react";
import { Grid, Text, Image, Button } from "../../elements";
import styled, { css } from "styled-components";
//STYLE
import { flexBox } from "../../shared/style";
const Gallery = () => {
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
          갤러리
        </Text>
        <Count>25</Count>
      </Grid>
      <div
        style={{
          height: "100px",
          display: "grid",
          margin: "5px",
          gridTemplate: "repeat(2, auto)/repeat(6,auto)",
        }}
      >
        <Image /> <Image /> <Image /> <Image /> <Image /> <Image /> <Image />
        <Image /> <Image /> <Image /> <Image /> <Image />
      </div>
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

export default Gallery;
