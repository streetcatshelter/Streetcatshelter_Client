// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// ROUTE
import { useLocation } from "react-router-dom";

// COMPONENTS
import { EditModalSlide } from "../components";

// REDUX
import { chatActions } from "../redux/modules/chat";

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
  const pathName = useLocation();
  const pName = pathName.pathname.split('/')[3];
  const [ProfileModal, setProfileModal] = useState(false);
  const userInfo = localStorage.getItem("userInfo");
  const userName = userInfo?.split('"')[5];
  const UserNickName = useSelector((state) => state.mypage.userInfo?.nickname);
  let location, username, createdAt, nickname, profileImageUrl, userProfile
  const { catLocation, catUsername, catCreatedAt, catNickname, catProfileImageUrl, catUserProfile} = useSelector((state) => ({
          catLocation: null,
          catUsername: null,
          catCreatedAt: state.cat.detail?.createdAt,
          catNickname: state.cat.detail?.nickname,
          catProfileImageUrl: state.cat.detail?.profileImageUrl,
          catUserProfile: state.mypage.userInfo.profileImageUrl,
        })
  );

  const { cLocation, cUsername, cCreatedAt, cNickname, cProfileImageUrl, cUserProfile} = useSelector((state) => ({
    cLocation: state.community.catInfo.data?.location,
    cUsername: state.community.catInfo.data?.username,
    cCreatedAt: state.community.catInfo.data?.createdAt
          ? state.community.catInfo.data?.createdAt
          : Array(1),
    cNickname: state.community.catInfo.data?.nickname,
    cProfileImageUrl: state.cat.detail?.profileImageUrl,
    cUserProfile: state.mypage.userInfo.profileImageUrl,
    })
  );


  const { gLocation, gUsername, gNickname, gCreatedAt, gProfileImageUrl, gUserProfile } = useSelector(
    (state) => ({
      gLocation: state.community.gathering.data?.location,
      gUsername: state.community.gathering.data?.username,
      gNickname: state.community.gathering.data?.nickname,
      gCreatedAt: state.community.gathering.data?.createdAt
        ? state.community.gathering.data.createdAt
        : Array(1),
        gProfileImageUrl: state.community.gathering.data?.profileImageUrl,
        gUserProfile: state.mypage.userInfo.profileImageUrl,
    })
  );

  const { sLocation, sUsername, sNickname, sCreatedAt, sProfileImageUrl, sUserProfile } = useSelector(
    (state) => ({
      sLocation: state.community.sharing.data?.location,
      sUsername: state.community.sharing.data?.username,
      sNickname: state.community.sharing.data?.nickname,
      sCreatedAt: state.community.sharing.data?.createdAt
        ? state.community.sharing.data.createdAt
        : Array(1),
      sProfileImageUrl: state.community.sharing.data?.profileImageUrl,
      sUserProfile: state.mypage.userInfo.profileImageUrl,
    })
  );
  
  if (pName === 'catinfo') {
    location = cLocation;
    username = cUsername;
    createdAt = cCreatedAt;
    nickname = cNickname;
    profileImageUrl = cProfileImageUrl;
    userProfile = cUserProfile;
  } else if (pName === 'gathering') {
    location = gLocation;
    username = gUsername;
    createdAt = gCreatedAt;
    nickname = gNickname;
    profileImageUrl = gProfileImageUrl;
    userProfile = gUserProfile;
  } else if (pName === 'sharing') {
    location = sLocation;
    username = sUsername;
    createdAt = sCreatedAt;
    nickname = sNickname;
    profileImageUrl = sProfileImageUrl;
    userProfile = sUserProfile;
  } else {
    location = catLocation;
    username = catUsername;
    createdAt = catCreatedAt;
    nickname = catNickname;
    profileImageUrl = catProfileImageUrl;
    userProfile = catUserProfile;
  }

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
      <Wrapper>
        <UserInfoBox onClick={OpenProfile}>
          <Avatar
            src={userProfile ? userProfile : profileImageUrl}
            alt="profileImage"
          />
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
