import React from 'react';

// STYLE
import styled, { css } from 'styled-components';
import { borderBox } from '../shared/style';

// ELEMENTS
import { Grid } from '../elements/index';

// COMPONENTS
import CommnunityPostList from '../components/CommunityPostList';

const CommunityDetail = () => {
  return (
    <>
    <Grid bgColor="bgColor" height="80vh">
      <CommunityDetailStyle>
        <Grid 
          width="100%" 
          height="auto" 
          addstyle={() => {
          return css`
            margin: 15px 15px -20px 15px;
            font-size: 18px;
            font-weight: bold;
          `;
         }}
        > 
        평창동 동네 모임
        </Grid>
         <Grid margin="50px 0 0 0">
        <CommnunityPostList/>
        </Grid>
      </CommunityDetailStyle>
    </Grid>
    </>
  );
};

CommunityDetail.defaultProps = {
  addstyle: () => {},
};

const CommunityDetailStyle = styled.div`
  border: 2px solid rgb(${(props) => props.theme.palette.olive});
  width: 80vw;
  height: 80vh;
  margin: 10vh auto;
  border-radius: 30px;
  overflow-y:scroll;
  overflow-x:hidden;
`;

export default CommunityDetail;
