// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Text } from '../../elements/index';

// ROUTE
import { useLocation } from 'react-router-dom';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';

// REDUX
import { getCommunityDB } from '../../redux/modules/community';

const Comment = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const community = useSelector((state) => state.community.list);
  const communityId = community.id;

  return (
    <Grid
      margin="20px 0px 15px 0px"
      addstyle={() => {
        return css`
          display: flex;
          border-bottom: 1px solid rgb(${(props) => props.theme.palette.olive});
        `;
      }}
    >
      <Grid
        addstyle={() => {
          return css`
            display: flex;
          `;
        }}
      >
        <Text margin="2px 3px" fontWeight="700" size="16px">
          댓글
        </Text>
        <Count>{community.cntComment}</Count>
      </Grid>
    
      {location.pathname === `/communitypostdetail/${communityId}` && <Grid
        addstyle={() => {
          return css`
            display: flex;
          `;
        }}
      >
        <Grid></Grid>
        <Grid
          addstyle={() => {
            return css`
              display: flex;
              margin: 0 0 0 60px;
            `;
          }}
        >
          <Grid
            clickEvent={()=>alert('좋아요!')}
          >
          <FavoriteIcon style={{color:'red', position:'relative', bottom:'2px'}}/>
          </Grid>
          <Text fontWeight="bold" margin="0 0 0 -25px" width="32px">
            {community.cntLikeIt}
          </Text>
        </Grid>
      </Grid>}
    </Grid>
  );
};

const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgb(${(props) => props.theme.palette.D_yellow});
  font-size: 12px;
  text-align: center;
  line-height: 20px;
`;

export default Comment;
