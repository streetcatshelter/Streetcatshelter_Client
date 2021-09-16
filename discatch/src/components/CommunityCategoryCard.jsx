// LIBRARY
import React from 'react';

// ELEMENTS
import { Image, Grid, Text } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';

const CommunityCategoryCard = ({ src, width, height, title, subtitle }) => {
  return (
  <>
    <CardStyle>
    <Image
      src={src}
      width={width} 
      height={height}
      addstyle={() => {
        return css`
          margin: 20px;
        `;
      }}
      />
    <div>
    <Text 
      fontWeight="bold"
      size="20px"addstyle={() => {
        return css`
          position:relative;
          top: 20px;
        `;
      }}>{title}</Text>
    <Text
      size="14px" 
      addstyle={() => {
          return css`
            position:relative;
            top: 30px;
          `;
        }}>
          {subtitle}
    </Text>
    </div>
    </CardStyle>
  </>
  )
};

const CardStyle = styled.div`
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width: 100%;
  height: 100px;
  margin: 30px auto;
  display:flex;
  cursor: pointer;
`;

export default CommunityCategoryCard;
