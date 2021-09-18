// library
import React from 'react';

// component
import { CatPostList, Template } from '../components';

// element
import { Button } from '../elements';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// redux
import { history } from '../redux/configureStore';

const Home = (props) => {
  return (
    <Template props={props}>
      <CatPostList />
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
