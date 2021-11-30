// LIBRARY
import React, { useState } from "react";

// STYLE
import styled from "styled-components";
import { chatActions } from "../redux/modules/chat";

// COMPONENTS
import { EditModalSlide } from "../components";
import { useDispatch, useSelector } from "react-redux";

// MOMENT
import moment from "moment";

const ContentHeader = ({
  FirstBtn,
  FirstClick,
  SecondBtn,
  SecondClick,
  path,
}) => {
  const dispatch = useDispatch();
  const [ProfileModal, setProfileModal] = useState(false);
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo?.split('"')[5];
  const UserNickName = useSelector((state) => state.mypage.userInfo?.nickname);
  const {
    location,
    username,
    createdAt,
    nickname,
    profileImageUrl,
    userProfile,
  } = useSelector((state) =>
    path === "catdetail"
      ? {
          location: null,
          username: null,
          createdAt: state.cat.detail?.createdAt,
          nickname: state.cat.detail?.nickname,
          profileImageUrl: state.cat.detail?.profileImageUrl,
          userProfile: state.mypage.userInfo.profileImageUrl,
        }
      : {
          location: state.community.list.data?.location,
          username: state.community.list.data?.username,
          nickname: state.community.list.data?.nickname,
          profileImageUrl: state.community.list.data?.profileImageUrl,
          createdAt: state.community.list.data?.createdAt
            ? state.community.list.data?.createdAt
            : Array(1),
        }
  );

  const CreatedAt = moment(createdAt).format("YYYY-M-D hh:mm");
  const OpenProfile = () => {
    if (userName !== username) {
      setProfileModal(!ProfileModal);
    }
  };
  const MakeChat = () => {
    const chatuser = { chatUser: [UserNickName, nickname] };
    dispatch(chatActions._createRoom(chatuser));
  };

  let locationName = "";
  if (location === "undefined") {
    locationName = null;
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
              src={userProfile ? userProfile : profileImageUrl}
              alt={userProfile ? userProfile : profileImageUrl}
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
                {nickname !== null ? (
                  <Text fontWeight="bold">{nickname}</Text>
                ) : (
                  <Text fontWeight="bold">{username}</Text>
                )}
                <Grid display="flex">
                  {locationName !== null && (
                    <Text
                      size="12px"
                      lineHeight="12px"
                      margin="0px 10px 0px 0px "
                      width="auto"
                    >
                      {locationName?.split(" ")[2]}
                    </Text>
                  )}
                  <Text
                    fontWeight="bold"
                    size="10px"
                    width="100px"
                    addstyle={() => {
                      return css`
                        line-height: 12px;
                        position: relative;
                      `;
                    }}
                  >
                    {CreatedAt}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

      <Wrapper>
        <UserInfoBox onClick={OpenProfile}>
          <Avatar src={profileImageUrl} alt="profileImage" />
          <UserInfoBoxRight>
            <p>{nickname}</p>
            <div style={{ display: "flex" }}>
              {locationName !== null && (
                <span>{locationName?.split(" ")[2]}</span>
              )}
              <span>{CreatedAt}</span>
            </div>
          </UserInfoBoxRight>
        </UserInfoBox>


        {UserNickName === nickname ? (
          <EditModalSlide
            FirstBtn={FirstBtn}
            SecondBtn={SecondBtn}
            FirstClick={FirstClick}
            SecondClick={SecondClick}
          />
        ) : (
          ""
        )}
      </Wrapper>
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

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid rgb(203, 207, 94);
`;

const UserInfoBox = styled.div`
  display: inherit;
  cursor: pointer;
  margin-left: 5px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px;
`;

const UserInfoBoxRight = styled.div`
  margin-left: 10px;
  line-height: 20px;
  p {
    font-size: 16px;
    margin: 0px;
    font-weight: 900;
  }
  span {
    font-size: 12px;
    :nth-child(2) {
      margin-left: 10px;
    }
  }
`;
export default ContentHeader;
