// LIBRARY
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template, CommentList, ContentHeader } from "../../components";

// STYLE
import styled from "styled-components";

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
  if (category?.split(" ")[1] === "정보글") {
    pathCategory = "catinfo";
  } else if (category?.split(" ")[1] === "동네") {
    pathCategory = "gathering";
  } else {
    pathCategory = "sharing";
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
            `/community/${
              location.split(" ")[2]
            }/${category}/postedit/${communityId}`
          );
        }}
        SecondClick={deleteCommunity}
      />
      <div>
        <Title>
          <p> {title} </p>
        </Title>

        <ImageBox>
          {imageList.map((catImage, idx) => {
            return (
              <CatImageBox>
                <CatImage src={catImage.image} alt="catImage" key={idx} />
              </CatImageBox>
            );
          })}
        </ImageBox>

        <Content>
          <p> {contents} </p>
        </Content>

        <div style={{ margin: "10px 0px" }}>
          <CommentList props={props} communityId={communityId} />
        </div>
      </div>
    </Template>
  );
};
const CatImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(251, 216, 134);
`;

const ImageBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CatImageBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: rgb(251, 216, 134);
`;

const Title = styled.div`
  margin: 10px;
  p {
    font-size: 16px;
    font-weight: 900;
    margin: 0px;
    width: auto;
  }
`;

const Content = styled.div`
  margin: 10px;
  p {
    font-size: 14px;
    margin: 0px;
  }
`;
export default CommunityPostDetail;
