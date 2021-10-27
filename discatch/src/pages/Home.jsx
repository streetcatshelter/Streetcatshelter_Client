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
import { __getCatLocation, __getMoreCat } from '../redux/modules/cat';

// function
import InfinityScroll from '../shared/InfinityScroll';

const Home = (props) => {
  const dispatch = useDispatch();
  const catList = useSelector((state) => state.cat.list);
  const location = useSelector((state) => state.map.keywordList[0]);
  const userVillage = useSelector((state) => state.mypage.userVillage[0]);

  const getMoreCat = () => {
    dispatch(__getMoreCat(location));
  };

  useEffect(() => {
    location === undefined
      ? dispatch(__getCatLocation(userVillage))
      : dispatch(__getCatLocation(location));
  }, [userVillage, location]);

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
              <CatPost cat={cat} />
            </InfinityScroll>
          );
        })
      ) : (
        <></>
      )}

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
