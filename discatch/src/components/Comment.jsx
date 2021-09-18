// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Text } from '../elements/index';

// ROUTE
import { useLocation } from 'react-router-dom';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';

// REDUX
import { getCommunityDB } from '../redux/modules/community';

const Comment = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname);
  // console.log(props.communityId.communityId);
  // const communityId = props.communityId.communityId
  // const commentList = useSelector((state) => state.community);

  // React.useEffect(() => {
  //   dispatch(getCommunityDB(communityId));
  // }, [commentList.length]);
  React.useEffect(() => {
      if (location.pathname === '/communitypostdetail') {
        console.log('커뮤니티 가져오기');
        // dispatch(getCommunityDB(communityId));
      } else {
        console.log('캣 가져오기');
      }
    }, []);

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
        <Count>25</Count>
      </Grid>
    
      {location.pathname === '/communitypostdetail' && <Grid
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
          <FavoriteIcon style={{color:'red', position:'relative', bottom:'2px'}}/>
          <Text fontWeight="bold" margin="0 0 0 4px">
            10
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
