// library
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  CatPost,
  CatComment,
} from '../components';

// element
import { Button, Grid, Image, Text } from '../elements';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// redux
import { history } from '../redux/configureStore';

const CatDetail = (props) => {
  const dispatch = useDispatch();
  const catId = props.match.params.catId;
  const [menu, setMenu] = useState('캘린더');

  return (
    <Template props={props}>
      {/* {catInfo.map((cat, idx) => {
        return <CatPost key={idx} cat={cat} />;
      })} */}

      <Grid
        clickEvent={() => history.push(`/catdetailinfo/${catId}`)}
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
              {/* {catName} */}
            </Text>
            <Text fontWeight="bold" size="12px" width="45%">
              {/* 중성화: {neutering} */}
            </Text>
            <Like />
          </Grid>

          <Grid>
            <Text fontWeight="bold" size="12px">
              ㅌㄱ
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
        <CatCalendar catId={catId} />
      ) : menu === '집사일기' ? (
        <CatDiary catId={catId} />
      ) : menu === '갤러리' ? (
        <CatGallery catId={catId} />
      ) : null}

      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push(`/catdetailinfowrite/${catId}`);
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>

      <CatComment catId={catId} />
    </Template>
  );
};

export default CatDetail;
