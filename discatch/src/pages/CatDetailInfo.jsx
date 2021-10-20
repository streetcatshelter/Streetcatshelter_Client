// library
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// element
import { Grid, Text, Image } from '../elements';

// component
import { Template, CatDetailComment, EditModalSlide } from '../components';

// icon
import { CheckSquare } from 'react-feather';

// redux
import { history } from '../redux/configureStore';
import { __getCatDetail, __deleteCatInfo } from '../redux/modules/cat';

const CatDetailInfo = (props) => {
  const dispatch = useDispatch();

  const catDetailId = props.match.params.catDetailId;

  const deleteCatInfo = () => {
    dispatch(__deleteCatInfo(catDetailId));
  };

  const { image, diary, water, food, snack, createdAt, tags, data } =
    useSelector(
      (state) => ({
        image: state.cat.list.catImages,
        diary: state.cat.list.diary,
        water: state.cat.list.water,
        food: state.cat.list.food,
        snack: state.cat.list.snack,
        createdAt: state.cat.list.createdAt,
        tags: state.cat.list.catTags,
        data: state.cat,
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
        <Image
          src={image}
          width="35px"
          height="35px"
          borderRadius="25px"
          margin="0 15% 0 3%"
        />

        <Text margin="0 -5% 0 0" size="12px" fontWeight="bold">
          {/* {createdAt}*/}
        </Text>

        <EditModalSlide
          FirstBtn={'게시글 수정'}
          SecondBtn={'삭제'}
          FirstClick={() => history.push(`/catdetailedit/${catDetailId}`)}
          SecondClick={deleteCatInfo}
        />
      </Grid>

      <Image src={image} margin="auto" width="300px" height="300px" />

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
        {/* {tags.map((tag, idx) => {
          return <TagStyle key={idx}>#{tag.tag}</TagStyle>;
        })} */}
      </Text>

      {/* {tag ? (
        <Text>
          {tag.map((tag, idx) => {
            return <TagStyle key={idx}>#{tag.tag}</TagStyle>;
          })}
        </Text>
      ) : null} */}

      <CatDetailComment />
    </Template>
  );
};

const TagStyle = styled.span`
  font-weight: bold;
`;

export default CatDetailInfo;
