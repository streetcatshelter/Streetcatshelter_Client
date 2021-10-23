// library
import React from 'react';

/* == Library - style */
import { css } from 'styled-components';

// element
import { Grid, Image } from '../../elements';

// style
import { flexBox } from '../../shared/style';

const Gallery = ({ gallery }) => {
  return (
    <Grid
      margin="2% 0"
      addstyle={() => {
        return css`
          ${flexBox()}
        `;
      }}
    >
      <Image src={gallery.catImages} width="80%" height="250px" />
    </Grid>
  );
};

export default Gallery;
