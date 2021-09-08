import React from 'react';

// ELEMENTS
import { Grid } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';

const CommunityPost = () => {
  return (
    <Grid height="30px">
      <CommunityPostStyle>
        9월 8일 (수) 18:00 망원 2동 순찰돕니다.
      </CommunityPostStyle>
    </Grid>
  );
};

const CommunityPostStyle = styled.div`
  border-bottom: 2px solid rgb(${(props) => props.theme.palette.olive});
  margin: 10px;
`;

export default CommunityPost;
