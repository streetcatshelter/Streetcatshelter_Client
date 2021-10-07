import React from 'react';

// ELEMENTS
import { Grid, Text, Image } from '../../elements/index';

// STYLE
import styled, { css } from 'styled-components';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MessageCircle, Eye } from "react-feather";

// REDUX
import { history } from "../../redux/configureStore";

const CommunityPost = ({community}) => {
  const communityId = community.communityId
  return (
    <Grid height="30px">
      <CommunityPostStyle>
        <Grid 
          clickEvent={()=>
            history.push(`/communitypostdetail/${communityId}`
            )}>
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
            {community.nickname}
            </Text>
            <Text size="10px" margin="0 10px 0 60vw" fontWeight={'bold'}>
            {community.createdAt[0]}.{community.createdAt[1]}.{community.createdAt[2]} {community.createdAt[3]}시 {community.createdAt[4]}분
            </Text>
            </Grid>
        </Grid>
        <Grid 
          addstyle={() => {
            return css`
              position:relative;
              height:30px;
              top:-50px;
            `;
          }}>
          <Text fontWeight={'bold'} margin={'4px 0 0 0'}>
          {community.title}
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
              position:relative;
              justify-content:space-between;
              margin: 10px 0 0 120px;
              left: -10px;
              `;
            }}>
              <Grid 
                addstyle={() => {
                  return css`
                  display: flex;
                  `;
              }}>
                <Eye style={{width:'13px', margin:'-4px 3px 0 0'}}/>
                <Text 
                  size={'12px'} 
                  fontWeight={'bold'}
                >
                  {community.cntView}
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
                {community.cntComment}
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
                {community.cntLikeit}
                </Text>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
        </Grid>
      </CommunityPostStyle>
    </Grid>
  );
};

const CommunityPostStyle = styled.div`
  position: relative;
  top: 20px;
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width:100%;
  height: 77px;
  margin: 80px 0;
  padding: 4px;
  cursor: pointer;
`;

export default CommunityPost;
