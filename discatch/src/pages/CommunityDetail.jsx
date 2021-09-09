import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button } from '../elements/index';

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
      

      <Grid 
        width="350px" 
        height="auto" 
        addstyle={() => {
        return css`
          margin: 10px auto;
          font-size: 18px;
          font-weight: bold;
        `;
      }}
      > 
      평창동 동네 모임
      </Grid>
      
      <CommunityDetailStyle>
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
          position:relative;
          top:-80px;
          left:130px;
          `;
        }}
      >+</Button>
      </Link>
    </Grid>
  );
};


const CommunityDetailStyle = styled.div`
  border: 2px solid rgb(${(props) => props.theme.palette.olive});
  width: 350px;
  height: 70vh;
  margin: 10px auto;
  border-radius: 30px;
  overflow-y:scroll;
  overflow-x:hidden;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;

export default CommunityDetail;
