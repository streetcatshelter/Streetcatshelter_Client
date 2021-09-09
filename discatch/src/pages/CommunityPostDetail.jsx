import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Text } from '../elements/index';

// COMPONENTS
import CommnunityPostList from '../components/CommunityPostList';

// ROUTE
import { Link } from 'react-router-dom';

const CommunityPostDetail = () => {
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
      
      <CommunityPostDetailStyle>
        <Grid margin="30px 0 0 0">
            <Text margin="0 0 0 30px" size="18px">9월 8일 (수) 18:00 망원 2동 순찰돕니다.</Text>
            <ContentStyle>
                <Text margin="30px">
                망원동 고양이 너무 귀여운것같아요~
                8일 저녁 6시에 망원2동 순찰 도실분 2분 구해요!
                같이 고양이 순찰 돌고 너랑나랑호프에서 가볍게 맥주한잔해요!! ^^ 
                9월 8일 수요일 18:00 망원2동 그린마트앞
                </Text>
            </ContentStyle>
        </Grid>
        <Grid 
          width="225px"
          height="30px"
          addstyle={() => {
            return css`
            display: flex;
            margin: -30px 0 0 -60px;
            `;
          }}
        >

        <Link to="communitypostedit" style={{textDecoration:'none'}}>
        <Button 
          width="108px"
          margin="auto"
          color="white"
          fontSize="14px"
          bgColor="brown"
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 50px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:-77px;
            left:130px;
            `;
          }}>수정하기</Button>
          </Link>
          
          <Button 
          width="108px"
          margin="auto"
          color="white"
          fontSize="14px"
          bgColor="brown"
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 50px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:-80px;
            left:130px;
            `;
          }}>삭제하기</Button>
          </Grid>
      </CommunityPostDetailStyle>
    </Grid>
  );
};


const CommunityPostDetailStyle = styled.div`
  border: 2px solid rgb(${(props) => props.theme.palette.olive});
  width: 350px;
  height: 70vh;
  margin: 10px auto;
  border-radius: 30px;
  overflow-y:hidden;
  overflow-x:hidden;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;

const ContentStyle = styled.div`
  border: 2px solid rgb(${(props) => props.theme.palette.olive});
  width: 300px;
  height: 40vh;
  margin: 30px auto;
  border-radius: 30px;
  overflow-y:scroll;
  overflow-x:hidden;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;

export default CommunityPostDetail;
