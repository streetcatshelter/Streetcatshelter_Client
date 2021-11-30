// LIBRARY
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template, CommentList, ContentHeader } from "../../components";

// STYLE
import { css } from "styled-components";

// ELEMENTS
import { Grid, Text, Image } from "../../elements/index";

// REDUX
import { history } from "../../redux/configureStore";
import {
  getOneCommunityDB,
  deleteCommunityDB,
} from "../../redux/modules/community";

const CommunityPostDetail = (props) => {
  const dispatch = useDispatch();
  const communityId = props.match.params.communityId;
  const { category, contents, imageList, title, location } = useSelector(
    (state) => ({
      category: state.community.list.data?.category,
      contents: state.community.list.data?.contents,
      imageList: state.community.list.data?.communityImageList
        ? state.community.list.data.communityImageList
        : Array(1),
      location: state.community.list.data?.location,
      title: state.community.list.data?.title,
    })
  );
  
  const deleteCommunity = () => {
    dispatch(deleteCommunityDB(communityId, category, location));
  };

  let pathCategory;
  if (category?.split(' ')[1] === '정보글') {
    pathCategory = 'catinfo';
  } else if (category?.split(' ')[1] === '동네'){
    pathCategory = 'gathering';
  } else {
    pathCategory = 'sharing';
  }
  
  React.useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, [communityId, dispatch]);

  return (
    <Template props={props}>
      <ContentHeader
        FirstBtn="수정"
        SecondBtn="삭제"
        FirstClick={() => {
          history.push(
            `/community/${location.split(' ')[2]}/${pathCategory}/postedit/${communityId}`
          );
        }}
        SecondClick={deleteCommunity}
      />
      <Grid
        bgColor="bgColor"
        addstyle={() => {
          return css`
            top: 20px;
          `;
        }}
      >
        <Grid width="95%">
          <Text
            size="16px"
            fontWeight="bold"
            addstyle={() => {
              return css`
                line-height: 40px;
                margin: 5px 10px;
              `;
            }}
          >
            {title}
          </Text>

          <Grid
            margin="auto"
            addstyle={() => {
              return css`
                position: relative;
              `;
            }}
          >
            {imageList[0] && (
              <Image
                width="286px"
                height="286px"
                margin="20px auto"
                src={imageList[0].image}
              />
            )}
            {imageList[1] && (
              <Image
                width="286px"
                height="286px"
                margin="20px auto"
                src={imageList[1].image}
              />
            )}
            {imageList[2] && (
              <Image
                width="286px"
                height="286px"
                margin="20px auto"
                src={imageList[2].image}
              />
            )}
            {imageList[3] && (
              <Image
                width="286px"
                height="286px"
                margin="20px auto"
                src={imageList[3].image}
              />
            )}
            {imageList[4] && (
              <Image
                width="286px"
                height="286px"
                margin="20px auto"
                src={imageList[4].image}
              />
            )}
          </Grid>

          <Text
            addstyle={() => {
              return css`
                position: relative;
                bottom:10px;
                margin: 5px 10px;
              `;
            }}
          >
            {contents}
          </Text>
        </Grid>
        <Grid>
          <CommentList props={props} communityId={communityId} />
        </Grid>
      </Grid>
    </Template>
  );
};

export default CommunityPostDetail;
