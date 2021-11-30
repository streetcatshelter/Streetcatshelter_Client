// LIBRARY
import React from "react";

// ELEMENTS
import { Grid, Image } from "../../elements";

// STYLE
import { css } from "styled-components";
import { flexBox } from "../../shared/style";

// REDUX
import { history } from "../../redux/configureStore";

const Gallery = ({ gallery, location }) => {
  const catDetailId = gallery.catDetailId;

  return (
    <Grid
      margin="2% auto"
      addstyle={() => {
        return css`
          ${flexBox()}
        `;
      }}
      clickEvent={() =>
        history.push(`/catdetailinfo/${location}/${catDetailId}`)
      }
    >
      <Image src={gallery.catImages} width="100%" height="250px" />
    </Grid>
  );
};

export default Gallery;
