// LIBRARY
import React from 'react';

// ELEMENTS
import Image from '../elements/Image';

// STYLE
import styled, { css } from 'styled-components';

const CommunityCategoryCard = ({ src, width, height, margin }) => {
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
    <div style={{
      position:'relative', 
      right:'130px',
      top:'30px', 
      width:'120px'
    }}>고양이 용품 나눔</div>
    <div style={{
      fontSize: '13px',
      position:'relative', 
      right:'130px',
      top:'30px', 
      width:'100px'
    }}>고양이 용품 나눔</div>
    </div>
    </CardStyle>
  </>
  )
};

const CardStyle = styled.div`
  background: rgb(${(props) => props.theme.palette.ivory});
  width: 100%;
  height: 106px;
  margin: 30px 0;
  display:flex;
`;

export default CommunityCategoryCard;
