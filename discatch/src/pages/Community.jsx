// LIBRARY
import React from 'react';

// COMPONENTS
import CommunityCategoryCard from '../components/CommunityCategoryCard'

// ELEMENTS
import { Grid } from '../elements/index';

const Community = () => {
  return (
  <>
  <Grid margin="10vh 0 0 0">
    <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="고양이 정보글!"
    subtitle="고양이는 츄르를 좋아해요~"
    />
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="동네 모임"
    subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
    />
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="고양이 용품 나눔"
    />
    </Grid>
  </>
  )
};

export default Community;
