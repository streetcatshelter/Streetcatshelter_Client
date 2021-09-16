import React from "react";

// component
import { CommentList } from "..";

// element
import { Grid } from "../../elements/index";

/* == Library - style */
import styled, { css } from "styled-components";

const CatCalendar = () => {
  return (
    <Grid>
      <CommentList />
    </Grid>
  );
};

export default CatCalendar;
