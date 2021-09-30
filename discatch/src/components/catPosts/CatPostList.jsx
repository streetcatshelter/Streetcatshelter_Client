// library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// component
import { CatPost } from '..';

// redux
import { __getCatLocation } from '../../redux/modules/cat';

const CatPostList = () => {
  const dispatch = useDispatch();
  const location = '망원동';

  const catList = useSelector((state) => state.cat.list);
  // console.log(catList);

  React.useEffect(() => {
    dispatch(__getCatLocation(location));
  }, []);

  return (
    <React.Fragment>
      {catList.length ? (
        catList.map((post, idx) => {
          return <CatPost key={idx} {...post} />;
        })
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default CatPostList;
