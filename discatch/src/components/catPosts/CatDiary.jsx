// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ELEMENTS
import { Grid } from '../../elements';

// COMPONENTS
import { Diary } from '..';

// REDUX
import { __getDiary } from '../../redux/modules/cat';

const CatDiary = (props) => {
  const location = props.location;
  const dispatch = useDispatch();
  const catId = props.catId;

  const diaryList = useSelector((state) => state.cat.diary);

  useEffect(() => {
    dispatch(__getDiary(catId));
  }, [catId, dispatch]);

  return (
    <>
      {diaryList.map((diary, idx) => {
        return (
          <Grid key={idx}>
            <Diary catId={catId} diary={diary} location={location}></Diary>
          </Grid>
        );
      })}
    </>
  );
};

export default CatDiary;
