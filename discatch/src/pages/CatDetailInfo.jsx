// library
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// element
import { Grid, Text, Image } from '../elements';

// component
import { Template, CommentList, EditModalSlide } from '../components';

// icon
import { CheckSquare } from 'react-feather';

// redux
import { history } from '../redux/configureStore';
import { __getCatDetail, __getCatLocation } from '../redux/modules/cat';

const CatDetailInfo = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const catDetailId = props.match.params.catDetailId;
  // const location = useSelector((state) => state.map.keywordList[0]);

  const { user, image, tag } = useSelector(
    (state) => ({
      user: state.cat.list[0].catName,
      image: state.cat.list[0].catImage,
      tag: state.cat.list[0].catTagList,
    }),
    shallowEqual,
  );

  const { diary, water, food, snack, data } = useSelector(
    (state) => ({
      // image: state.cat.catdetail.catImage,
      diary: state.cat.catdetail.diary,
      water: state.cat.catdetail.water,
      food: state.cat.catdetail.food,
      snack: state.cat.catdetail.snack,
      data: state.cat.catdetail,
    }),
    shallowEqual,
  );

  console.log(data);

  useEffect(() => {
    dispatch(__getCatDetail(catDetailId));
  }, []);

  return (
    <Template props={props}>
      <Grid
        margin="2% 0"
        addstyle={() => {
          return css`
            ${flexBox('space-around')}
          `;
        }}
      >
        <Image src={image} width="35px" height="35px" borderRadius="25px" />

        <Text margin="0 10% 0 -7%" fontWeight="bold">
          {user}
        </Text>

        <Text margin="0 -10% 0 0" size="12px" fontWeight="bold">
          2021-09-10-17:55
        </Text>

        <EditModalSlide
          FirstBtn={'게시글 수정'}
          SecondBtn={'삭제'}
          FirstClick={() => history.push('/catdetailedit')}
        />
      </Grid>

      <Image src={image} margin="auto" width="300px" height="140px" />

      <Grid
        margin="5% 0"
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Grid
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Text fontWeight="bold">급수</Text>
          <CheckSquare color={water === false ? 'black' : '#cbcf5e'} />
        </Grid>

        <Grid
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Text fontWeight="bold">사료</Text>
          <CheckSquare color={food === false ? 'black' : '#cbcf5e'} />
        </Grid>

        <Grid
          addstyle={() => {
            return css`
              ${flexBox()}
            `;
          }}
        >
          <Text fontWeight="bold">간식</Text>
          <CheckSquare color={snack === false ? 'black' : '#cbcf5e'} />
        </Grid>
      </Grid>

      <Text bgColor="diaryColor" fontWeight="500" padding="20px">
        {diary}
        <br />
        <br />
        {tag.map((tag, idx) => {
          return <TagStyle key={idx}>#{tag.tag}</TagStyle>;
        })}
      </Text>

      {/* {tag ? (
        <Text>
          {tag.map((tag, idx) => {
            return <TagStyle key={idx}>#{tag.tag}</TagStyle>;
          })}
        </Text>
      ) : null} */}

      <CommentList />
    </Template>
  );
};

const TagStyle = styled.span`
  font-weight: bold;
`;

export default CatDetailInfo;
