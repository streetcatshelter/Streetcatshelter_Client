import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Text } from '../elements/index';

// COMPONENTS
import CommnunityPostList from '../components/CommunityPostList';

// ROUTE
import { Link } from 'react-router-dom';

const CommunityDetail = () => {
  return (
    <Grid 
      bgColor="bgColor"
      margin="-10vh 0 0 0" 
      addstyle={() => {
        return css`
          position:relative;
          top:80px;
        `;
      }}
      >
      

      
      
      <CommunityDetailStyle>
      <Grid 
        width="350px" 
        addstyle={() => {
        return css`
          position:relative;
          margin: 10px auto;
          font-size: 18px;
          font-weight: bold;
          top:90px;
        `;
      }}
      > 
      평창동 동네 모임
      </Grid>
        <Grid margin="30px 0 0 0">
          <CommnunityPostList/>
        </Grid>
          
      </CommunityDetailStyle>
      <Link to="/communitypostwrite" style={{textDecoration:'none'}}>
      <Button 
        width="55px"
        margin="auto"
        color="white"
        fontSize="40px"
        bgColor="olive"
        addstyle={() => {
          return css`
          display: flex;
          height: 55px;
          border-radius: 50px;
          align-items:center;
          justify-content: center;
          position:fixed;
          top:540px;
          left:290px;
          `;
        }}
      >+</Button>
      </Link>
    </Grid>
  );
};


const CommunityDetailStyle = styled.div`
  width: 100%;
  margin: -100px auto;
  overflow-y:scroll;
  overflow-x:hidden;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;

export default CommunityDetail;
