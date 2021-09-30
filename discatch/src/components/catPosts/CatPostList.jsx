import React from 'react';

/* == components*/
import { CatPost } from '..';

const CatPostList = () => {
  return (
    <React.Fragment>
      <CatPost margin="5px 0px" />
      <CatPost margin="5px 0px" />
      <CatPost margin="5px 0px" />
    </React.Fragment>
  );
};

export default CatPostList;
