// library
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// component
import { Template, CatPost } from '../components';

// element
import { Button } from '../elements';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// redux
import { history } from '../redux/configureStore';
import { __getCatLocation } from '../redux/modules/cat';

const Home = (props) => {
  const dispatch = useDispatch();

  const catList = useSelector((state) => state.cat.list);

  const location = '망원동';

  useEffect(() => {
    /* eslint-disable */
    dispatch(__getCatLocation(location));
  }, []);

  return (
    <Template props={props}>
      {catList.length ? (
        catList.map((cat, idx) => {
          return <CatPost key={idx} {...cat} />;
        })
      ) : (
        <></>
      )}

      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push('/catinfowrite');
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </Template>
  );
};

export default Home;
