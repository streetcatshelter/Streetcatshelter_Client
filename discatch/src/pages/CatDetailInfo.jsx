// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid, Text, Image, Button } from '../elements';

// COMPONENTS
import { Template, CatDetailComment, EditModalSlide } from '../components';

// ICON
import { CheckSquare } from 'react-feather';
import FavoriteIcon from '@material-ui/icons/Favorite';

// REDUX
import { history } from '../redux/configureStore';
import {
  __getCatDetail,
  __deleteCatDetail,
  __catDetailLike,
} from '../redux/modules/cat';

const CatDetailInfo = (props) => {
  const dispatch = useDispatch();
  const catDetailId = props.match.params.catDetailId;

  const { userProfile, nickname, username } = useSelector((state) => ({
    userProfile: state.mypage.userInfo.profileImageUrl,
    nickname: state.mypage.userInfo.nickname,
    username: state.mypage.userInfo.username,
  }));

  const { image, diary, water, food, snack, createdAt, tags } = useSelector(
    (state) => ({
      image: state.cat.detail.catImages,
      diary: state.cat.detail.diary,
      water: state.cat.detail.water,
      food: state.cat.detail.food,
      snack: state.cat.detail.snack,
      createdAt: state.cat.detail.createdAt,
      tags: state.cat.detail.catTags,
    }),
    shallowEqual,
  );

  const userLiked = useSelector((state) => state.cat.detail.userLiked);
  const likeToggle = () => {
    dispatch(__catDetailLike(catDetailId));
  };

  useEffect(() => {
    dispatch(__getCatDetail(catDetailId));
  }, [catDetailId, dispatch]);

  const deleteCatDetail = () => {
    dispatch(__deleteCatDetail(catDetailId));
  };

  return (
    <Template props={props}>
      <Grid
        margin="2% auto"
        addstyle={() => {
          return css`
            ${flexBox('space-evenly')}
          `;
        }}
      >
        <Image
          margin="0 0 0 5%"
          src={userProfile}
          width="35px"
          height="35px"
          borderRadius="25px"
        />

        <Text width="30%" size="14px" fontWeight="bold">
          {nickname ? nickname : username}
        </Text>

        <Text width="35%" margin="0 -5% 0 0" size="12px" fontWeight="bold">
          {createdAt ? (
            `${createdAt[0]}.${createdAt[1]}.${createdAt[2]} ${createdAt[3]}시 ${createdAt[4]}분`
          ) : (
            <></>
          )}
        </Text>

        <EditModalSlide
          FirstBtn={'홈으로'}
          FirstClick={() => {
            history.push('/');
          }}
          SecondBtn={'삭제'}
          SecondClick={deleteCatDetail}
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

      <Grid bgColor="diaryColor" padding="20px">
        <Grid
          alignItems="center"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
            `;
          }}
        >
          <Text margin="0 0 5% 0" fontWeight="500">
            {diary}
          </Text>

          <Button
            padding="0"
            bgColor="diaryColor"
            color={userLiked ? 'red' : 'black'}
            clickEvent={likeToggle}
          >
            <FavoriteIcon />
          </Button>
        </Grid>

        {tags?.map((tag, idx) => {
          return (
            <Text fontWeight="500" key={idx}>
              #{tag}
            </Text>
          );
        })}
      </Grid>

      <CatDetailComment catDetailId={catDetailId} />
    </Template>
  );
};

export default CatDetailInfo;
