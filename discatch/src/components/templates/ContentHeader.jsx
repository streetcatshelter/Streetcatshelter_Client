// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { EditModalSlide } from "../../components";

// MOMENT
import moment from "moment";

// REDUX
import { chatActions } from "../../redux/modules/chat";
import { history } from "../../redux/configureStore";

const ContentHeader = ({ FirstBtn, FirstClick, SecondBtn, SecondClick }) => {
  const dispatch = useDispatch();
  const [profileModal, setProfileModal] = useState(false);

  const userNickName = useSelector((state) => state.mypage.userInfo?.nickname);
  const location = useSelector(
    (state) => state.community.communityDetail.location
  );
  const nickname = useSelector(
    (state) => state.community.communityDetail.nickname
  );
  const createdAt = useSelector(
    (state) => state.community.communityDetail.createdAt
  );
  const profileImageUrl = useSelector(
    (state) => state.community.communityDetail.profileImageUrl
  );

  const userRandomId = useSelector(
    (state) => state.community.communityDetail.userRandomId
  );

  const CreatedAt = moment(createdAt).format("YYYY-M-D hh:mm");
  const OpenProfile = () => {
    setProfileModal(!profileModal);
  };
  const MakeChat = () => {
    const chatuser = { chatUser: [userNickName, nickname] };
    dispatch(chatActions._createRoom(chatuser));
    setProfileModal(!profileModal);
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
        <UserInfoBox>
          <Avatar src={profileImageUrl} alt="profileImage" />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <UserInfoBoxCenter onClick={OpenProfile}>
              <p>{nickname}</p>
              <div style={{ display: "flex" }}>
                {locationName !== null && (
                  <span>{locationName?.split(" ")[2]}</span>
                )}
                <span>{CreatedAt}</span>
              </div>
            </UserInfoBoxCenter>
            {nickname === userNickName && (
              <EditModalSlide
                FirstBtn={FirstBtn}
                SecondBtn={SecondBtn}
                FirstClick={FirstClick}
                SecondClick={SecondClick}
              />
            )}
          </div>
        </UserInfoBox>
      </Wrapper>
      {nickname !== userNickName ? (
        <EditModalSlide
          FirstBtn="프로필보기"
          SecondBtn="채팅하기"
          Profile="profile"
          openModal={profileModal}
          FirstClick={() => {
            history.push(`/user/${userRandomId}`);
          }}
          SecondClick={MakeChat}
        />
      ) : (
        <EditModalSlide
          FirstBtn="내프로필보기"
          SecondBtn="내프로필수정"
          Profile="profile"
          openModal={profileModal}
          FirstClick={() => {
            history.push(`/user/${userRandomId}`);
          }}
          SecondClick={() => {
            history.push("/userinfoedit");
          }}
        />
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
  width: 100%;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px;
`;
const UserInfoBoxCenter = styled.div`
  margin-left: 10px;
  line-height: 20px;
  p {
    font-size: 14px;
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
