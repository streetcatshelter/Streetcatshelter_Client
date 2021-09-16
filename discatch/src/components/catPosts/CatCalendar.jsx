// library
import React from 'react';
import styled, { css } from 'styled-components';

// element
import { Grid } from '../../elements/index';

// component
import { CommentList } from '..';

const CatCalendar = () => {
  return (
    <Grid>
      <CommentList />
    </Grid>
  );
};

export default CatCalendar;
