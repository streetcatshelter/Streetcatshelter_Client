// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import Image from '../elements/Image';

const CommunityCategoryCard = ({ src, width, height, text }) => {
  return (
  <>
    <Image
      src={src}
      width={width} 
      height={height}
      />
    <div value={text}></div>
  </>
  )
};

export default CommunityCategoryCard;
