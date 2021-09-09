// LIBRARY
import React from 'react';

// COMPONENTS
import CommunityCategoryCard from '../components/CommunityCategoryCard'

// ELEMENTS
import { Grid } from '../elements/index';

// ROUTE
import { Link } from 'react-router-dom';

const Community = () => {
  return (
  <>
  <Grid margin="10vh 0 0 0">
    <Link to='/communitydetail' style={{textDecoration:'none'}}>
    <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="고양이 정보글!"
    subtitle="고양이는 츄르를 좋아해요~"
    />
    </Link>
    <Link to='/communitydetail' style={{textDecoration:'none'}}>
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="동네 모임"
    subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
    />
    </Link>
    <Link to='/communitydetail' style={{textDecoration:'none'}}>
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    title="고양이 용품 나눔"
    />
    </Link>
    </Grid>
  </>
  )
};

export default Community;
