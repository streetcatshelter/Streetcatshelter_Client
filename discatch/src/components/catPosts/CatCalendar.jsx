// LIBRARY
import React from "react";

// COMPONENTS
import { Calendar } from "..";

// ELEMENTS
import { Grid } from "elements/index";

const CatCalendar = (props) => {
  const catId = props.catId;

  return (
    <Grid>
      <Calendar path="CatCalendar" catId={catId} />
    </Grid>
  );
};

export default CatCalendar;
