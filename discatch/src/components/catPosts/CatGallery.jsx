// library
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// element
import { Grid } from '../../elements';

// component
import { Gallery } from '..';

// redux
import { __getGallery } from '../../redux/modules/cat';

const CatGallery = (props) => {
  const dispatch = useDispatch();
  const catId = props.catId;

  const galleryList = useSelector((state) => state.cat.gallery);

  useEffect(() => {
    dispatch(__getGallery(catId));
  }, []);

  return (
    <>
      {galleryList.map((gallery, idx) => {
        return (
          <Grid key={idx}>
            <Gallery catId={catId} gallery={gallery} />
          </Grid>
        );
      })}
    </>
  );
};

export default CatGallery;
