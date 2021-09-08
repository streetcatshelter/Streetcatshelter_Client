// LIBRARY
import React from 'react';

// COMPONENTS
import CommunityCategoryCard from '../components/CommunityCategoryCard'

// ELEMENTS
import { Grid } from '../elements/index';

const Community = () => {
  return (
  <>
  <Grid margin="20vh 0 0 0">
    <CommunityCategoryCard 
    width='60px' 
    height='60px'
    />
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    />
     <CommunityCategoryCard 
    width='60px' 
    height='60px'
    />
    </Grid>
  </>
  )
};

export default Community;
