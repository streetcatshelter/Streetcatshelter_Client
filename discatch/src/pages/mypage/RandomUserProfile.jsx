// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { Template, ProgressBar } from "../../components";

// REDUX
import { history } from "../../redux/configureStore";
import { mypageActions } from "../../redux/modules/mypage";

const RandomUserProfile = (props) => {
  const dispatch = useDispatch();
  const userRandomId = props.match.params?.userRandomId;
  const userRandomProfile = useSelector(
    (state) => state.mypage.userRandomProfile
  );

  useEffect(() => {
    dispatch(mypageActions._getUserProfile(userRandomId));
  }, [userRandomId, dispatch]);

  return (
    <Template props={props}>
      <Wrapper>
        <Head>
          <Left>
            <img
              src={userRandomProfile.profileImageUrl}
              alt="randomUserImage"
            />
          </Left>
          <Right>
            <ProfileInfo>
              <p>{userRandomProfile.nickname}</p>
              <p>{userRandomProfile.userLevel}</p>
            </ProfileInfo>
            <Location>
              {userRandomProfile.location &&
                userRandomProfile.location.map((place, idx) => {
                  return <p key={idx}>{place.split(" ")[2]}</p>;
                })}
            </Location>
          </Right>
        </Head>
        <Body>
          <UserActive>
            <ProgressBar path="random" />
            <ActiveBox>
              <div>
                <p>고양이</p>
                <p>{userRandomProfile.catNum}</p>
                <p>마리</p>
              </div>
              <div>
                <p>댓글</p>
                <p>{userRandomProfile.commentNum}</p>
                <p>개</p>
              </div>
              <div>
                <p>좋아요</p>
                <p>{userRandomProfile.likedNum}</p>
                <p>개</p>
              </div>
            </ActiveBox>
            <ActiveDate>
              <p>최근 활동</p>
              <p>
                {userRandomProfile.lastActivity === null
                  ? "-"
                  : userRandomProfile.lastActivity}
              </p>
            </ActiveDate>
          </UserActive>
          <LikedCatBox>
            <p>❤좋아요한 고양이❤</p>
            {userRandomProfile.cat && userRandomProfile.cat.length > 0 ? (
              <LikeCatWrapper>
                {userRandomProfile.cat.map((cat, idx) => {
                  const location = cat.catLocation;
                  let fullLocation;
                  if (location === userRandomProfile?.location[0]?.split(' ')[2]) {
                    fullLocation = userRandomProfile?.location[0];
                  } else if (location === userRandomProfile?.location[1]?.split(' ')[2]) {
                    fullLocation = userRandomProfile?.location[1];
                  } else if (location === userRandomProfile?.location[2]?.split(' ')[2]) {
                    fullLocation = userRandomProfile?.location[2];
                  }
                  return (
                    <LikeCat
                      onClick={() => {
                        history.push({
                          pathname: `/catdetail/calendar/${location}/${cat.catId}/3`,
                          state: { location : fullLocation },
                        });
                      }}
                    >
                      <img src={cat.catImage} alt="likedCat" key={idx} />
                    </LikeCat>
                  );
                })}
              </LikeCatWrapper>
            ) : (
              <p>아직 좋아요한 고양이가 없다옹!</p>
            )}
          </LikedCatBox>
        </Body>
      </Wrapper>
    </Template>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
const Head = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  border-bottom: 0.2px solid rgba(203, 207, 94, 1);
  p {
    margin: 0px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProfileInfo = styled.div`
  p {
    font-size: 12px;
    :nth-child(1) {
      font-weight: 900;
      font-size: 14px;
    }
  }
`;
const Location = styled.div`
  display: flex;
  p {
    font-size: 12px;
    font-weight: 700;
    margin-right: 5px;
  }
`;
const Body = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  margin-bottom: 10px;
`;
const Left = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin: auto;
  }
`;
const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserActive = styled.div`
  width: 100%;
  // height: 100%;
  margin: auto;
`;
const LikeCat = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(252, 246, 222, 1);
  cursor: pointer;
  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
const ActiveBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  div {
    margin: 10px 5px;
    justify-content: center;
    width: 33%;
    display: flex;
    border: 0.2px solid rgba(203, 207, 94, 1);
    border-radius: 10px;
    p {
      text-align: center;
      font-size: 12px;
      :nth-child(1) {
        font-weight: 900;
      }
      :nth-child(2) {
        background: #f9c852;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        text-align: center;
        font-weight: 900;
      }
    }
  }
`;
const ActiveDate = styled.div`
  border: 0.2px solid rgba(203, 207, 94, 1);
  border-radius: 10px;
  height: 100%;
  margin: 5px;
  p {
    margin: 5px auto;
    font-size: 12px;
    width: 95%;
    :nth-child(1) {
      font-weight: 900;
    }
  }
`;
const LikedCatBox = styled.div`
  width: 98%;
  margin: 15px auto 10px auto;
  p {
    font-size: 14px;
    font-weight: 900;
    margin: 5px 0px;
    :nth-child(2) {
      font-weight: 700;
      font-size: 12px;
      text-align: center;
      margin: 10px 0px;
    }
  }
`;
const LikeCatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
`;

export default RandomUserProfile;
