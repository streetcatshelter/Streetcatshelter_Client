// LIBRARY
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import { Calendar } from "..";

// ELEMENTS
import { Grid } from "../../elements/index";

// REDUX
import { __getCalendar } from "../../redux/modules/cat";

const CatCalendar = (props) => {
  const catId = props.catId;

  // useEffect(() => {
  //   dispatch(__getCalendar(catId, MONTH, YEAR));
  // }, [catId, MONTH, YEAR, dispatch]);

  return (
    <Grid>
      <Calendar path="CatCalendar" catId={catId} />
    </Grid>
  );
};

export default CatCalendar;
