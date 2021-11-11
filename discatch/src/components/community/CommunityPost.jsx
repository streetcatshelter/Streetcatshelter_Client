import React from 'react';

// ELEMENTS
import { Grid, Text } from '../../elements/index';

// STYLE
import styled, { css } from 'styled-components';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MessageCircle, Eye } from "react-feather";
import Avatar from '@material-ui/core/Avatar';

// REDUX
import { history } from "../../redux/configureStore";

// ROUTE
import { useLocation } from 'react-router-dom';

const CommunityPost = ({community}) => {
  const path = useLocation();
  const location = path.pathname.split('/')[2];
  const communityId = community.communityId
  const category = path.pathname.split('/')[3];
  let name;
  if (community.nickname === "" || community.nickname === null) {
    name = community.username;
  } else {
    name = community.nickname;
  }
  return (
    <Grid height="30px">
      <CommunityPostStyle>
        <Grid 
          clickEvent={()=>
            history.push(`/community/${location}/${category}/postdetail/${communityId}`
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
              <Avatar 
              src={community.profileImageUrl} 
              style={{width:'25px', 
                      height:'25px', 
                      borderRadius:'25px',
                      }}/>
            <Text width="100%" margin="4px" fontWeight="bold">
            {name}
            </Text>
            <Text 
              width="100%" 
              size="10px" 
              margin="0 0 0 150px" 
              fontWeight="bold"
              addstyle={() => {
                return css`
                @media screen and (max-width: 375px) {
                  margin: 0 0 0 100px;
                }
                `;
              }}>
            {community.createdAt[0]}.{community.createdAt[1]}.{community.createdAt[2]} {community.createdAt[3]}시 {community.createdAt[4]}분
            </Text>
            </Grid>
        </Grid>
        <Grid 
          addstyle={() => {
            return css`
              position:relative;
              top:-50px;
            `;
          }}>
          <Text fontWeight={'bold'} margin={'8px 0 -4px 0'}>
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
