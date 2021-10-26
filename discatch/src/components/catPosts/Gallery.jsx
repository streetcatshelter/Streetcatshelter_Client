// library
import React from 'react';
import { css } from 'styled-components';

// element
import { Grid, Image } from '../../elements';

// style
import { flexBox } from '../../shared/style';

// redux
import { history } from '../../redux/configureStore';

const Gallery = ({ gallery }) => {
  const catDetailId = gallery.catDetailId;

  return (
    <Grid
      margin="2% auto"
      addstyle={() => {
        return css`
          ${flexBox()}
        `;
      }}
      clickEvent={() => history.push(`/catdetailinfo/${catDetailId}`)}
    >
      <Image src={gallery.catImages} width="100%" height="250px" />
    </Grid>
  );
};

export default Gallery;
