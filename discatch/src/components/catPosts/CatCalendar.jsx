// library
import React from "react";

// component
import { CommentList, Calendar } from "..";

// element
import { Grid } from "../../elements/index";

const CatCalendar = () => {
  return (
    <Grid>
      <Calendar path="CatCalendar" />
      <CommentList />
    </Grid>
  );
};

export default CatCalendar;
