// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// COMPONENTS
import { Calendar } from '..';

// ELEMENTS
import { Grid } from '../../elements/index';

// REDUX
import { __getCalendar } from '../../redux/modules/cat';

const CatCalendar = (props) => {
  const dispatch = useDispatch();
  const catId = props.catId;
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();

  useEffect(() => {
    dispatch(__getCalendar(catId, MONTH, YEAR));
  }, [catId, MONTH, YEAR, dispatch]);

  return (
    <Grid>
      <Calendar path="CatCalendar" />
    </Grid>
  );
};

export default CatCalendar;
