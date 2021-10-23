// library
import React from 'react';

// component
import { Calendar } from '..';

// element
import { Grid } from '../../elements/index';

const CatCalendar = (props) => {
  const catId = props.catId;
  return (
    <Grid>
      <Calendar path="cat" />
    </Grid>
  );
};

export default CatCalendar;
