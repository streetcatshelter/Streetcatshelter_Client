// LIBRARY
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import {
  Template,
  CommentList,
  ContentHeader,
  SecondSpinner,
  Toast,
} from "../../components";

// ELEMENTS
import { Text } from "../../elements";

// STYLE
import styled from "styled-components";

// REDUX
import { history } from "../../redux/configureStore";
import {
  getOneCommunityDB,
  deleteCommunityDB,
} from "../../redux/modules/community";

const CommunityPostDetail = (props) => {
  const pathLocation = props.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const communityId = props.match.params.communityId;
  const isLoaded = useSelector((state) => state.community.itemDetailLoaded);
  const [deleteState, setDeleteState] = useState(false);
  const communityDetail = useSelector(
    (state) => state.community.communityDetail
  );

  const deleteCommunity = () => {
    setDeleteState(true);
    setTimeout(() => {
      dispatch(
        deleteCommunityDB(communityId, communityDetail.category, Location)
      );
    }, 1000);
  };

  let pathCategory;
  if (communityDetail.category?.split(" ")[1] === "정보글") {
    pathCategory = "catinfo";
  } else if (communityDetail.category?.split(" ")[1] === "동네") {
    pathCategory = "gathering";
  } else {
    pathCategory = "sharing";
  }

  useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, [communityId, dispatch]);

  useEffect(() => {
    if (deleteState) {
      setTimeout(() => {
        setDeleteState(false);
      }, 1500);
    }
  }, [deleteState]);

  return (
    <Template props={props}>
      <SecondSpinner visible={isLoaded}>
        <ContentHeader
          FirstBtn="수정"
          SecondBtn="삭제"
          FirstClick={() => {
            history.push({
              pathname: `/community/${pathLocation}/${pathCategory}/postedit/${communityId}`,
              state: { location: pathLocation },
            });
          }}
          SecondClick={deleteCommunity}
        />

        <div>
          <Title>
            <p> {communityDetail.title} </p>
          </Title>

          <ImageBox>
            {communityDetail.communityImageList?.map((catImage, idx) => {
              return (
                <CatImageBox key={idx}>
                  <CatImage src={catImage.image} alt="catImage" key={idx} />
                </CatImageBox>
              );
            })}
          </ImageBox>

          <Text margin="15px">{communityDetail.contents}</Text>

          <div style={{ margin: "10px 0px" }}>
            <CommentList props={props} communityId={communityId} />
          </div>
        </div>
      </SecondSpinner>
      {deleteState && <Toast message="게시물 삭제 완료!" />}
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

export default CommunityPostDetail;
