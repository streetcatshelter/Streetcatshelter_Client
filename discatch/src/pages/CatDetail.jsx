// library
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// component
import {
  Template,
  CatCalendar,
  CatDiary,
  CatGallery,
  Like,
} from '../components';

// element
import { Button, Grid, Image, Text } from '../elements';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// redux
import { history } from '../redux/configureStore';

const CatDetail = (props) => {
  const catId = props.match.params.catId;

  const [menu, setMenu] = useState('캘린더');

  const catInfo = useSelector((state) => state.cat);
  console.log(catInfo);

  return (
    <Template props={props}>
      <Grid
        bgColor="diaryColor"
        alignItems="center"
        padding="8px"
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Image borderRadius="10px" />
        <Grid padding="6px" alignItems="center">
          <Grid
            addstyle={() => {
              return css`
                ${flexBox('space-between')}
              `;
            }}
          >
            <Text fontWeight="bold" size="12px">
              이름
            </Text>
            <Text fontWeight="bold" size="12px" width="45%">
              중성화
            </Text>
            <Like />
          </Grid>

          <Grid>
            <Text fontWeight="bold" size="12px">
              태그
            </Text>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            border-bottom: 2px solid #cbcf5e;
          `;
        }}
      >
        <Button
          clickEvent={() => {
            setMenu('캘린더');
          }}
          color={menu === '캘린더' ? 'olive' : 'black'}
          margin="2% 8% 0 5%"
          fontSize="1em"
          fontWeight="800"
        >
          캘린더
        </Button>
        <Button
          clickEvent={() => {
            setMenu('집사일기');
          }}
          color={menu === '집사일기' ? 'olive' : 'black'}
          fontSize="1em"
          fontWeight="800"
        >
          집사일기
        </Button>
        <Button
          clickEvent={() => {
            setMenu('갤러리');
          }}
          color={menu === '갤러리' ? 'olive' : 'black'}
          margin="0 8%"
          fontSize="1em"
          fontWeight="800"
        >
          갤러리
        </Button>
      </Grid>

      {menu === '캘린더' ? (
        <CatCalendar />
      ) : menu === '집사일기' ? (
        <CatDiary />
      ) : menu === '갤러리' ? (
        <CatGallery />
      ) : null}

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
