import React from 'react';

// ELEMENTS
import { Grid } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';

// ROUTE
import { Link } from 'react-router-dom';

const CommunityPost = () => {
  return (
    <Grid height="30px">
      <Link to='/communitypostdetail' style={{textDecoration:'none', color:'black'}}>
      <CommunityPostStyle>
        9월 8일 (수) 18:00 망원 2동 순찰돕니다.
      </CommunityPostStyle>
      </Link>
    </Grid>
  );
};

const CommunityPostStyle = styled.div`
  border-bottom: 2px solid rgb(${(props) => props.theme.palette.olive});
  margin: 10px;
  cursor: pointer;
`;

export default CommunityPost;
