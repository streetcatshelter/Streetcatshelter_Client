// library
import React from 'react';
import { useLocation } from 'react-router-dom';
import { history } from '../../redux/configureStore';

// element
import { Grid, Text, Image } from '../../elements';

// icon
import FavoriteIcon from '@material-ui/icons/Favorite';

const CatPost = (props) => {
  const margin = props.margin;
  const path = useLocation().pathname;

  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="70px"
        bgColor="ivory"
        display="flex"
        padding="10px 0px 0px 10px"
        margin={margin}
        clickEvent={() => {
          history.push('/catdetail');
        }}
        cursor="pointer"
      >
        <Image />
        <Grid
          width="70%"
          height="70px"
          flexDirection="column"
          padding="0px 0px 0px 10px"
        >
          <Grid display="flex" height="35%">
            <Text fontWeight="700" color="black" width="40%">
              CatName
            </Text>{' '}
            <Text fontWeight="700" color="black" width="50%">
              중성화: Y
            </Text>
            {path === '/catdetail' ? (
              <FavoriteIcon
                style={{
                  color: 'red',
                  position: 'relative',
                  bottom: '3px',
                  right: '-20%',
                }}
              />
            ) : null}
          </Grid>
          <Grid height="65%">
            <Text margin="0px" size="12px" fontWeight="bold">
              #해쉬태그 #해쉬태그 #해쉬태그 #해쉬태그
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPost;
