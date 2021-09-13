import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Text, Image } from '../elements/index';

// COMPONENTS
import CommentList from '../components/CommentList';

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
      <Grid
        addstyle={() => {
          return css`
            display:flex;
          `;
        }}
      > 
        <Grid>
          <Image
          width="30px"
          height="30px"
          addstyle={() => {
            return css`
            border-radius:30px;
            margin:10px 13px;
            `;
          }}/>
        </Grid>
        <Grid 
          margin="10px 220px 0 0"
          addstyle={() => {
            return css`
            display:flex;
            `;
          }}>
          <Grid>
          <Text fontWeight="bold">뽀삐맘</Text>
          <Text size="12px">평창동</Text>
          </Grid>
          <Grid 
            width="300px"
            margin="20px 0 0 0"
            addstyle={() => {
              return css`
              display:flex;
              `;
            }}>
          <Text 
            fontWeight="bold"
            size="10px"
            addstyle={() => {
              return css`
              position:relative;
              left: 20px;
              `;
            }}
            >2021-09-03 18:00</Text>
          <Text 
            size="12px"
            addstyle={() => {
              return css`
              position:relative;
              left: 30px;
              `;
            }}
            >...</Text>
          </Grid>
        </Grid>
      </Grid>
      <CommunityPostDetailStyle>
        <Grid margin="30px 0 0 0">
            <Text 
              margin="-20px 4px 4px 4px"
              size="17px" 
              fontWeight="bold"
              addstyle={() => {
                return css`
                line-height:40px;
                padding: 4px;
                border-top: 1px solid rgb(${(props) => props.theme.palette.olive});
                `;
              }}>
                9월 8일 (수) 18:00 망원 2동 순찰돕니다.
            </Text>
            <ContentStyle>
                <Text
                  addstyle={() => {
                    return css`
                    position:relative;
                    left:-30px;
                    `;
                }}>
                망원동 고양이 너무 귀여운것같아요~
                8일 저녁 6시에 망원2동 순찰 도실분 2분 구해요!
                같이 고양이 순찰 돌고 너랑나랑호프에서 가볍게 맥주한잔해요!! ^^ 
                9월 8일 수요일 18:00 망원2동 그린마트앞
                </Text>
            </ContentStyle>
        </Grid>
      </CommunityPostDetailStyle>
      <Grid 
        width="340px" 
        margin="auto" 
        addstyle={() => {
              return css`
              position:relative;
              top:-180px;
              `;
          }}>
      <CommentList/>
      </Grid>
    </Grid>
    
  );
};


const CommunityPostDetailStyle = styled.div`
  width: 350px;
  height: 70vh;
  margin: 10px auto;
`;

const ContentStyle = styled.div`
  width: 300px;
  height: 40vh;
  margin: 30px 0 0 40px;
`;

export default CommunityPostDetail;
