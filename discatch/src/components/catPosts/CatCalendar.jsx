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

  useEffect(() => {
    dispatch(__getCalendar(catId));
  }, []);

  return (
    <Grid>
      <Calendar />
    </Grid>
  );
};

export default CatCalendar;
