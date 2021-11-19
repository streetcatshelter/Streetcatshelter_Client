// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template, CommentList, EditModalSlide } from "../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Text, Image } from "../elements/index";

// ICON
import Avatar from "@material-ui/core/Avatar";

// REDUX
import { history } from "../redux/configureStore";
import {
  getOneCommunityDB,
  deleteCommunityDB,
} from "../redux/modules/community";
import { chatActions } from "../redux/modules/chat";

const CommunityPostDetail = (props) => {
  const dispatch = useDispatch();
  const communityId = props.match.params.communityId;

  const {
    category,
    contents,
    imageList,
    location,
    title,
    username,
    createdAt,
    nickname,
    profileImageUrl,
  } = useSelector((state) => ({
    category: state.community.list.data?.category,
    contents: state.community.list.data?.contents,
    imageList: state.community.list.data?.communityImageList
      ? state.community.list.data.communityImageList
      : Array(1, 2, 3),
    location: state.community.list.data?.location,
    title: state.community.list.data?.title,
    username: state.community.list.data?.username,
    nickname: state.community.list.data?.nickname,
    profileImageUrl: state.community.list.data?.profileImageUrl,
    createdAt: state.community.list.data?.createdAt
      ? state.community.list.data?.createdAt
      : Array(1, 3, 4),
  }));

  const deleteCommunity = () => {
    dispatch(deleteCommunityDB(communityId, category, location));
  };
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo.split('"')[5];
  const NickName = useSelector((state) => state.mypage.userInfo.nickname);
  const [ProfileModal, setProfileModal] = useState(false);

  const OpenProfile = () => {
    if (userName !== username) {
      setProfileModal(!ProfileModal);
    }
  };

  const MakeChat = () => {
    const chatuser = { chatUser: [name, NickName] };
    dispatch(chatActions._createRoom(chatuser));
  };

  let name;
  if (nickname === "" || nickname === null) {
    name = username;
  } else {
    name = nickname;
  }

  let locationName = "";
  if (location === "undefined") {
    locationName = "";
  } else if (location !== "undefined") {
    locationName = location;
  }

  React.useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, []);
  return (
    <Template props={props}>
      <Grid
        bgColor="bgColor"
        addstyle={() => {
          return css`
            top: 20px;
          `;
        }}
      >
        <Grid
          addstyle={() => {
            return css`
              justify-content: space-between;
              padding: 5px;
              width: 100%;
              height: 50px;
              display: flex;
              border-bottom: 1px solid
                rgb(${(props) => props.theme.palette.olive});
            `;
          }}
        >
          <Grid display="flex">
            <Avatar
              src={profileImageUrl}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                alignItems: "center",
              }}
            />
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                  margin-left: 10px;
                `;
              }}
            >
              <Grid>
                <Text
                  fontWeight="bold"
                  onClick={OpenProfile}
                  addstyle={() => {
                    return css`
                      cursor: pointer;
                    `;
                  }}
                >
                  {name}
                </Text>
                <Grid display="flex">
                  <Text size="12px" lineHeight="12px" margin="0px">
                    {locationName}
                  </Text>
                  <Text
                    fontWeight="bold"
                    size="10px"
                    width="140px"
                    addstyle={() => {
                      return css`
                        line-height: 12px;
                        position: relative;
                        margin: 0px 0px 0px 5px;
                      `;
                    }}
                  >
                    {createdAt[0]}년 {createdAt[1]}월 {createdAt[2]}일{" "}
                    {createdAt[3]}시 {createdAt[4]}분
                  </Text>
                </Grid>
              </Grid>
            </Grid>

            {username === userName ? (
              <EditModalSlide
                FirstBtn={"게시글 수정"}
                SecondBtn={"삭제"}
                FirstClick={() => {
                  history.push(
                    `/community/${location}/${category}/postedit/${communityId}`
                  );
                }}
                SecondClick={deleteCommunity}
              />
            ) : (
              <Grid height="36px"></Grid>
            )}
          </Grid>
        </Grid>

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
                margin="10px auto"
                src={imageList[0].image}
              />
            )}
            {imageList[1] && (
              <Image
                width="286px"
                height="286px"
                margin="10px auto"
                src={imageList[1].image}
              />
            )}
            {imageList[2] && (
              <Image
                width="286px"
                height="286px"
                margin="10px auto"
                src={imageList[2].image}
              />
            )}
            {imageList[3] && (
              <Image
                width="286px"
                height="286px"
                margin="10px auto"
                src={imageList[3].image}
              />
            )}
            {imageList[4] && (
              <Image
                width="286px"
                height="286px"
                margin="10px auto"
                src={imageList[4].image}
              />
            )}
          </Grid>

          <Text
            addstyle={() => {
              return css`
                position: relative;
                margin: 5px 10px;
              `;
            }}
          >
            {contents}
          </Text>
        </Grid>
        <Grid>
          <CommentList props={props} />
        </Grid>
      </Grid>
      <EditModalSlide
        FirstBtn="프로필보기"
        SecondBtn="채팅하기"
        Profile="profile"
        openModal={ProfileModal}
        FirstClick={() => {}}
        SecondClick={MakeChat}
      />
    </Template>
  );
};

export default CommunityPostDetail;
