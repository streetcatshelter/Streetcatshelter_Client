// library
import React from 'react';
import { useSelector } from 'react-redux';

/* == components*/
import { CatPostDetail, Template } from '../components';

/* == Custom - Elements*/
import { Button } from '../elements';

/* == Library - style */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

/* == Redux */
import { history } from '../redux/configureStore';

const CatDetail = (props) => {
  const catId = useSelector((state) => state.cat.list);
  console.log(catId);
  return (
    <Template props={props}>
      <CatPostDetail />
      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push(`/catdetailinfowrite/${catId}`);
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </Template>
  );
};

export default CatDetail;
