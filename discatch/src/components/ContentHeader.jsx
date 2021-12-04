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
import UserProfileModal from "./UserProfileModal";

const ContentHeader = ({ FirstBtn, FirstClick, SecondBtn, SecondClick }) => {
  const dispatch = useDispatch();
  const pathName = useLocation();
  const pName = pathName.pathname.split("/")[3];
  const [ProfileModal, setProfileModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const UserNickName = useSelector((state) => state.mypage.userInfo?.nickname);
  const location = useSelector((state) =>
    pName === "catinfo"
      ? state.community.catInfo.data?.location
      : pName === "gathering"
      ? state.community.gathering.data?.location
      : pName === "sharing"
      ? state.community.sharing.data?.location
      : null
  );
  const nickname = useSelector((state) =>
    pName === "catinfo"
      ? state.community.catInfo.data?.nickname
      : pName === "gathering"
      ? state.community.gathering.data?.nickname
      : pName === "sharing"
      ? state.community.sharing.data?.nickname
      : state.cat.detail?.nickname
  );
  const createdAt = useSelector((state) =>
    pName === "catinfo"
      ? state.community.catInfo.data?.createdAt
      : pName === "gathering"
      ? state.community.gathering.data?.createdAt
      : pName === "sharing"
      ? state.community.sharing.data?.createdAt
      : state.cat.detail?.createdAt
  );
  const profileImageUrl = useSelector((state) =>
    pName === "catinfo"
      ? state.community.catInfo.data?.profileImageUrl
      : pName === "gathering"
      ? state.community.gathering.data?.profileImageUrl
      : pName === "sharing"
      ? state.community.sharing.data?.profileImageUrl
      : state.cat.detail?.profileImageUrl
  );

  const userRandomId = useSelector((state) =>
    pName === "catinfo"
      ? state.community.catInfo.data?.userRandomId
      : pName === "gathering"
      ? state.community.gathering.data?.userRandomId
      : pName === "sharing"
      ? state.community.sharing.data?.userRandomId
      : state.cat.detail?.userRandomId
  );

  const CreatedAt = moment(createdAt).format("YYYY-M-D hh:mm");
  const OpenProfile = () => {
    if (nickname !== UserNickName) {
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
        FirstClick={() => {
          setOpenProfileModal(true);
        }}
        SecondClick={MakeChat}
      />
      {openProfileModal && userRandomId && (
        <UserProfileModal userRandomId={userRandomId} />
      )}
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
