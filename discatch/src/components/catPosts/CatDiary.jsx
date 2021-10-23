// library
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// component
import { Diary } from '..';

// redux
import { __getDiary } from '../../redux/modules/cat';

const CatDiary = (props) => {
  console.log(props);
  const catId = props.catId;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(__getDiary(catId));
  // }, []);

  return (
    <>
      {}

      <Diary catId={catId} />
    </>
  );
};

export default CatDiary;
