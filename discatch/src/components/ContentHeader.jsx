import React, { useState } from "react";
import moment from "moment";
// ELEMENTS
import { Grid, Text, Image } from "../elements/index";
// STYLE
import { css } from "styled-components";
import { chatActions } from "../redux/modules/chat";

// COMPONENTS
import { EditModalSlide } from "../components";
import { useDispatch, useSelector } from "react-redux";
const ContentHeader = ({ FirstBtn, FirstClick, SecondBtn, SecondClick }) => {
  const dispatch = useDispatch();
  const [ProfileModal, setProfileModal] = useState(false);
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo.split('"')[5];
  const { location, username, createdAt, nickname, profileImageUrl } =
    useSelector((state) => ({
      category: state.community.list.data?.category,
      location: state.community.list.data?.location,
      username: state.community.list.data?.username,
      nickname: state.community.list.data?.nickname,
      profileImageUrl: state.community.list.data?.profileImageUrl,
      createdAt: state.community.list.data?.createdAt
        ? state.community.list.data?.createdAt
        : Array(1),
    }));
  const CreatedAt = moment(createdAt).format("YYYY-M-D hh:mm");
  const OpenProfile = () => {
    if (userName !== username) {
      setProfileModal(!ProfileModal);
    }
  };
  const MakeChat = () => {
    const chatuser = { chatUser: [name, nickname] };
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
  return (
    <>
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
          <Grid
            display="flex"
            onClick={OpenProfile}
            addstyle={() => {
              return css`
                cursor: pointer;
                margin-left: 5px;
              `;
            }}
          >
            <img
              src={profileImageUrl}
              alt={profileImageUrl}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                margin: "0px",
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
                <Text fontWeight="bold">{name}</Text>
                <Grid display="flex">
                  <Text
                    size="12px"
                    lineHeight="12px"
                    margin="0px 10px 0px 0px "
                    width="auto"
                  >
                    {locationName}
                  </Text>
                  <Text
                    fontWeight="bold"
                    size="10px"
                    addstyle={() => {
                      return css`
                        line-height: 12px;
                        position: relative;
                        margin: 0px 0px 0px 5px;
                      `;
                    }}
                  >
                    {CreatedAt}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {username === userName ? (
            <EditModalSlide
              FirstBtn={FirstBtn}
              SecondBtn={SecondBtn}
              FirstClick={FirstClick}
              SecondClick={SecondClick}
            />
          ) : (
            <Grid height="36px"></Grid>
          )}
        </Grid>
      </Grid>{" "}
      <EditModalSlide
        FirstBtn="프로필보기"
        SecondBtn="채팅하기"
        Profile="profile"
        openModal={ProfileModal}
        FirstClick={() => {}}
        SecondClick={MakeChat}
      />
    </>
  );
};

export default ContentHeader;
