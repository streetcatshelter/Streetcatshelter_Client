// library
import React, { useState } from 'react';
import { css } from 'styled-components';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// element
import { Grid, Button, Text, Image } from '../../elements';

// component
import { CatPost, CatCalendar, CatDiary, CatGallery } from '..';

// redux
import { history } from '../../redux/configureStore';
import { __getCatCalendar } from '../../redux/modules/cat';

// Icon
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// style
import { flexBox } from '../../shared/style';

const CatPostDetail = () => {
  const dispatch = useDispatch();

  return (
    <Grid display="flex" flexDirection="column" overflow="hidden">
      <Button is_float="is_float" clickEvent={() => {}}>
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </Grid>
  );
};

export default CatPostDetail;
