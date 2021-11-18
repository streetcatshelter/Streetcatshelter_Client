// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ELEMENTS
import { Grid } from '../../elements';

// COMPONENTS
import { Gallery } from '..';

// REDUX
import { __getGallery } from '../../redux/modules/cat';

const CatGallery = (props) => {
  const location = props.location;
  const dispatch = useDispatch();
  const catId = props.catId;

  const galleryList = useSelector((state) => state.cat.gallery);

  useEffect(() => {
    dispatch(__getGallery(catId));
  }, [catId, dispatch]);

  return (
    <>
      {galleryList.map((gallery, idx) => {
        return (
          <Grid key={idx}>
            <Gallery catId={catId} gallery={gallery} location={location}/>
          </Grid>
        );
      })}
    </>
  );
};

export default CatGallery;
