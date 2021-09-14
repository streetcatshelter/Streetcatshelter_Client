import React from 'react';

// ELEMENTS
import { Grid, Text, Image } from '../elements/index';

// STYLE
import styled, { css } from 'styled-components';

// ROUTE
import { Link } from 'react-router-dom';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MessageCircle, Eye } from "react-feather";

const CommunityPost = () => {
  return (
    <Grid height="30px">
      <Link to='/communitypostdetail' style={{textDecoration:'none', color:'black'}}>
      <CommunityPostStyle>
        <Grid>
            <Grid 
            addstyle={() => {
              return css`
              display: flex;
              justify-content:space-between;
              `;
            }}>
            <Grid
            addstyle={() => {
              return css`
              display: flex;
              `;
            }}>
              <Image 
                width={'25px'} 
                height={'25px'}
                addstyle={() => {
                  return css`
                  border-radius:25px;
                  `;
                }}/>
            <Text margin="4px" fontWeight={'bold'}>
            뽀삐맘
            </Text>
            <Text margin="0 10px 0 170px">
            2021-09-03 15:23
            </Text>
            </Grid>
        </Grid>
        <Grid margin="-50px 0">
          <Text fontWeight={'bold'} margin={'4px 0 0 0'}>
          9월 8일 (수) 18:00 망원 2동 순찰돕니다.
          </Text>
          <Grid 
            addstyle={() => {
              return css`
              display: flex;
              justify-content:space-between;
              `;
            }}>
              <Grid></Grid>
              <Grid addstyle={() => {
              return css`
              display: flex;
              justify-content:space-between;
              margin: 10px 0 0 120px;
              `;
            }}>
              <Grid 
                addstyle={() => {
                  return css`
                  display: flex;
                  `;
              }}>
                <Eye style={{width:'13px', margin:'-4px 3px 0 0'}}/>
                <Text size={'12px'} fontWeight={'bold'}>
                  1
                </Text>
              </Grid>
              <Grid 
                addstyle={() => {
                  return css`
                  display: flex;
                  `;
              }}>
                <MessageCircle style={{width:'13px', margin:'-4px 3px 0 0'}}/>
                <Text size={'12px'} fontWeight={'bold'}>
                  1
                </Text>
              </Grid>
              <Grid 
                addstyle={() => {
                  return css`
                  display: flex;
                  `;
              }}>
                <FavoriteIcon style={{width:'13px', margin:'-4px 3px 0 0', color:'red'}}/>
                <Text size={'12px'} fontWeight={'bold'}>
                  1
                </Text>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
        </Grid>
      </CommunityPostStyle>
      </Link>
    </Grid>
  );
};

const CommunityPostStyle = styled.div`
  position: relative;
  top: 20px;
  background: rgb(${(props) => props.theme.palette.ivory});
  width:100%;
  height: 77px;
  margin: 80px 0;
  padding: 4px;
`;

export default CommunityPost;
