// library
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// component
import {
  Template,
  CatCalendar,
  CatDiary,
  CatGallery,
  CatComment,
} from '../components';

// element
import { Button, Grid, Image, Text } from '../elements';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

// redux
import { history } from '../redux/configureStore';

const CatDetail = (props) => {
  const dispatch = useDispatch();
  const catId = props.match.params.catId;
  const [menu, setMenu] = useState('캘린더');

  const diaryCnt = useSelector((state) => state.cat.diary.length);
  const galleryCnt = useSelector((state) => state.cat.gallery.length);

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
              {/* {catName} */}
            </Text>

            <Text fontWeight="bold" size="12px" width="45%">
              {/* 중성화: {neutering} */}
            </Text>

            <Button
              padding="0"
              bgColor="diaryColor"
              // color={like ? 'red' : 'black'}
              color="red"
            >
              <FavoriteIcon />
            </Button>
          </Grid>

          <Grid
            addstyle={() => {
              return css`
                ${flexBox('space-between')}
              `;
            }}
          >
            <Text fontWeight="bold" size="12px">
              ㅌㄱ
            </Text>
            <Button
              clickEvent={() => history.push(`/catdetailinfo/${catId}`)}
              fontWeight="bold"
              padding="0"
              bgColor="diaryColor"
            >
              자세히보기
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        alignItems="center"
        addstyle={() => {
          return css`
            border-bottom: 2px solid #cbcf5e;
            ${flexBox('flex-start')}
          `;
        }}
      >
        <Button
          clickEvent={() => {
            setMenu('캘린더');
          }}
          color={menu === '캘린더' ? 'olive' : 'black'}
          margin="0 8%"
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
        <Count>{diaryCnt}</Count>

        <Button
          clickEvent={() => {
            setMenu('갤러리');
          }}
          color={menu === '갤러리' ? 'olive' : 'black'}
          margin="0 0 0 8%"
          fontSize="1em"
          fontWeight="800"
        >
          갤러리
        </Button>
        <Count>{galleryCnt}</Count>
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

const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgb(${(props) => props.theme.palette.D_yellow});
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin-left: 1%;
`;

export default CatDetail;
