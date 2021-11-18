// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import { Template, CatPost } from '../components';

// ELEMENTS
import { Button } from '../elements';

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// REDUX
import { history } from '../redux/configureStore';
import { __getCatLocation, __getMoreCat } from '../redux/modules/cat';

// FUNCTION
import InfinityScroll from '../shared/InfinityScroll';

const Home = (props) => {
  const dispatch = useDispatch();
  const catList = useSelector((state) => state.cat.list);

  const userLocation = useSelector((state) => state.map.keywordList[0]);

  const userVillage = useSelector((state) => state.mypage.userVillage[0]?.split('@')[0]);
  const location = userLocation ? userLocation : userVillage;

  const getMoreCat = () => {
    dispatch(__getMoreCat(location));
  };

  useEffect(() => {
    dispatch(__getCatLocation(location));
  }, [location, dispatch]);

  return (
    <Template props={props}>
      {catList.length ? (
        catList.map((cat, idx) => {
          return (
            <InfinityScroll
              next={getMoreCat}
              index={idx}
              length={catList.length}
              key={cat.catId}
            >
              <CatPost cat={cat} location={location}/>
            </InfinityScroll>
          );
        })
      ) : (
        <></>
      )}

      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push({pathname:`/map/${location}`, state : { location }});
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </Template>
  );
};

export default Home;
