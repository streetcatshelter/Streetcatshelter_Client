// library
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// component
import { Diary } from '..';

// redux
import { __getDiary } from '../../redux/modules/cat';

const CatDiary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getDiary);
  }, []);

  return (
    <>
      {}

      <Diary />
      <Diary />
      <Diary />
      <Diary />
    </>
  );
};

export default CatDiary;
