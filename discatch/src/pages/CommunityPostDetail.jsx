import React from "react";
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import { Template, CommentList, EditDeleteModal } from "../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Text, Image } from "../elements/index";

// REDUX
import { getOneCommunityDB } from '../redux/modules/community';

// ROUTE
import { useLocation } from 'react-router-dom';

const CommunityPostDetail = (props, community) => {
  const selectedCategory = useLocation();
  console.log(selectedCategory.category);
  const dispatch = useDispatch();
  
  // const communityId = community.match.params;
  // console.log(community);

  // React.useEffect(() => {
  //   dispatch(getOneCommunityDB(communityId));
  // }, []);

  // const { category, contents, image, location, title, username } = useSelector((state) => ({
  //   categoty: state.community.list.categoty,
  //   contents: state.community.list.contents,
  //   image: state.community.list.image,
  //   location: state.community.list.location,
  //   title: state.community.list.title,
  //   username: state.community.list.username,
  // }));
  const image='수정 필요'
  const communityId="수정 필요"
  
  return (
    <Template props={props}>
      <Grid
        bgColor="bgColor"
        margin="-10vh 0 0 0"
        addstyle={() => {
          return css`
            position: relative;
            top: 80px;
          `;
        }}
      >
        <Grid
          width="350px"
          addstyle={() => {
            return css`
              margin: 0 0 0 15px;
              font-size: 18px;
              font-weight: bold;
            `;
          }}
        >
          {/* 평창동 동네 모임 */}
          {selectedCategory.category}
          {/* {category} */}
        </Grid>
        <Grid
          margin="0 0 -35px 0"
          addstyle={() => {
            return css`
              display: flex;
              position: relative;
              top: 10px;
            `;
          }}
        >
          <Grid>
            <Image
              width="30px"
              height="30px"
              addstyle={() => {
                return css`
                  border-radius: 30px;
                  margin: 10px 13px;
                `;
              }}
            />
          </Grid>
          <Grid
            margin="10px 220px 0 0"
            addstyle={() => {
              return css`
                display: flex;
              `;
            }}
          >
            <Grid>
              <Text fontWeight="bold">
                뽀삐맘
                {/* {username} */}
              </Text>
              <Text size="12px">
                평창동
                {/* {location} */}
              </Text>
            </Grid>
            <Grid
              width="300px"
              margin="20px 0 0 0"
              addstyle={() => {
                return css`
                  display: flex;
                  position: relative;
                  right: 10px;
                `;
              }}
            >
              <Text
                fontWeight="bold"
                size="10px"
                addstyle={() => {
                  return css`
                    position: relative;
                    left: 20px;
                  `;
                }}
              >
                2021-09-03 18:00
              </Text>
              <Grid
                width="30px"
                addstyle={() => {
                  return css`
                    position: relative;
                    left: 10px;
                    top: -11px;
                  `;
                }}
              >
                <EditDeleteModal communityId={communityId}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <CommunityPostDetailStyle>
          <Grid margin="30px 0 0 0">
            <Text
              margin="-20px 4px 4px 4px"
              size="17px"
              fontWeight="bold"
              addstyle={() => {
                return css`
                  line-height: 40px;
                  padding: 4px;
                  border-top: 1px solid
                    rgb(${(props) => props.theme.palette.olive});
                `;
              }}
            >
              9월 8일 (수) 18:00 망원 2동 순찰돕니다.
              {/* {title} */}
            </Text>
              
          </Grid>
        </CommunityPostDetailStyle>
        <Grid
          width="340px"
          margin="auto"
          addstyle={() => {
            return css`
              position: relative;
              top: 20px;
            `;
          }}
        >
        {image &&
              <Image 
              width="286px" 
              height="286px"
              margin="auto"
              // src={image}
              addstyle={() => {
                return css`
                position:relative;
                top:-20px;
                `;
              }}
              />}
              <Text
              margin="0 auto 20px"
                addstyle={() => {
                  return css`
                    position: relative;
                    width:300px;
                  `;
                }}
              >
                
                망원동 고양이 너무 귀여운것같아요~ 8일 저녁 6시에 망원2동 순찰
                도실분 2분 구해요! 같이 고양이 순찰 돌고 너랑나랑호프에서 가볍게
                맥주한잔해요!! ^^ 9월 8일 수요일 18:00 망원2동 그린마트앞
                {/* {contents} */}
              </Text>
              <Grid margin="0 0 12vh 0">
                <CommentList />
              </Grid>
        </Grid>
      </Grid>
    </Template>
  );
};

const CommunityPostDetailStyle = styled.div`
  width: 350px;
  margin: 10px auto;
`;

export default CommunityPostDetail;
