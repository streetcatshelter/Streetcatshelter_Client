import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// redux

// element
import { Button } from '../../elements';

// icon
import FavoriteIcon from '@material-ui/icons/Favorite';

const Like = ({ isFavorite }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(isFavorite);

  return (
    <Button
      padding="0"
      bgColor="diaryColor"
      color={active ? 'red' : 'black'}
      clickEvent={() => {
        setActive((state) => !state);
      }}
    >
      <FavoriteIcon />
    </Button>
  );
};

export default Like;
