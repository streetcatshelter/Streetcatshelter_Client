import React from 'react';
import { Grid, Image, TextArea, Input, Button } from '../elements/index';
import styled, { css } from 'styled-components';
const CatInfoWrite = () => {
  const Options = [
    { key: 1, value: 'Y' },
    { key: 2, value: 'N' },
    { key: 3, value: '?' },
  ];
  return (
    <>
      <Grid width="65%" margin="40px auto">
        <Image
          src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
          width="250px"
          height="250px"
          addstyle={() => {
            return css`
              object-fit: cover;
            `;
          }}
        />
      </Grid>
      <Grid width="90%" margin="auto">
        <Input
          width="95%"
          type="text"
          placeholder="이름을 입력해주세요!"
          radius="10px"
        />
        <Select>
          {Options.map((item, index) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </Select>
        <TextArea
          placeholder="태그 :"
          height="20px"
          width="92%"
          addstyle={() => {
            return css`
              margin-top: 20px;
              margin-bottom: 20px;
            `;
          }}
        />
        <Button
          bgColor="brown"
          color="white"
          width="120px"
          radius="20px"
          addstyle={() => {
            return css`
              display: block;
              margin: auto;
            `;
          }}
        >
          작성하기
        </Button>
      </Grid>
    </>
  );
};

const Select = styled.select`
  background: white;
  height: 30px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 99%;
  border-radius: 10px;
  margin-top: 20px;
`;
export default CatInfoWrite;
