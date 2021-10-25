// library
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// component
import { Calendar } from '..';

// element
import { Grid } from '../../elements/index';

// redux
import { __getCalendar } from '../../redux/modules/cat';

const CatCalendar = (props) => {
  const dispatch = useDispatch();
  const catId = props.catId;
  // const calendar = useSelector((state) => state.cat.calendar);
  // console.log(calendar);

  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();

  useEffect(() => {
    dispatch(__getCalendar(catId, MONTH, YEAR));
  }, []);

  return (
    <Grid>
      <Calendar path="CatCalendar" />
    </Grid>
  );
};

export default CatCalendar;
