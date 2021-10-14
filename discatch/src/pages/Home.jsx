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

// function
import InfinityScroll from '../shared/InfinityScroll';

const Home = (props) => {
  const dispatch = useDispatch();

  const catList = useSelector((state) => state.cat.list);
  const location = useSelector((state) => state.map.keywordList[0]);

  useEffect(() => {
    /* eslint-disable */
    dispatch(__getCatLocation(location));
  }, [location]);

  return (
    <Template props={props}>
      {catList.length ? (
        catList.map((cat, idx) => {
          return <CatPost {...cat} cat={cat} key={idx} />;
        })
      ) : (
        <></>
      )}

      {/* {catList.length
        ? catList.map((cat, idx) => {
            return (
              <InfinityScroll
                next={}
                index={idx}
                length={catList.length}
                key={cat.catId}
              >
                <CatPost cat={cat} />
              </InfinityScroll>
            );
          })
        : null} */}

      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push(`/catinfowrite/${location}`);
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </Template>
  );
};

export default Home;
