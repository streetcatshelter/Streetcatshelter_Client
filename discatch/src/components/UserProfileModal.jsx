// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { ProgressBar } from "./";

// ICON
import { X } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";
import { mypageActions } from "../redux/modules/mypage";


const UserProfileModal = (props) => {
  const dispatch = useDispatch();
  const userRandomProfile = useSelector(
    (state) => state.mypage.userRandomProfile
  );
  useEffect(() => {
    dispatch(mypageActions._getUserProfile(props.userRandomId));
  }, [props.userRandomId, dispatch]);

  return (
    <Background>
      <Overlay onClick={props.openModal} />
      <Window>
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
            <X onClick={props.openModal} />
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
                    ? "최근 활동 내역이 없습니다."
                    : userRandomProfile.lastActivity}
                </p>
              </ActiveDate>
            </UserActive>
            <LikedCatBox>
              <p>❤좋아요한 고양이❤</p>
              <LikeCatWrapper>
                {userRandomProfile.cat &&
                  userRandomProfile.cat.map((cat, idx) => {
                    const location = cat.catLocation;
                    return (
                      <LikeCat
                        onClick={() => {
                          history.push({
                            pathname: `/catdetail/${location}/${cat.catId}`,
                            state: { location },
                          });
                        }}
                      >
                        <img src={cat.catImage} alt="likedCat" key={idx} />
                      </LikeCat>
                    );
                  })}
              </LikeCatWrapper>
            </LikedCatBox>
          </Body>
        </Wrapper>
      </Window>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Window = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  max-width: 420px;
  width: 100vw;
  height: 80vh;
  border-radius: 20px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  background: #fefdf8;
  z-index: 1000;
  overflow: auto;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Wrapper = styled.div`
width:100%;
height:100%;
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
    width: 50px;
    height: 50px;
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
  height: 100%;
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
width:100%;
height: 100%;
display: flex;
div{
  margin:10px 5px;
  justify-content:center;
  width:33%;
  height:100%;
  display:flex;
  border:0.2px solid rgba(203, 207, 94, 1);
  border-radius:10px;
  p{
    text-align:center;
    font-size:12px;
    :nth-child(1){
      font-weight:900;
    }
    :nth-child(2){
      background:#f9c852;
      width:18px;
      height:18px;
      border-radius:50%;
      text-align:center;
      font-weight:900;
    }
  }
}
`;
const ActiveDate = styled.div`
  border: 0.2px solid rgba(203, 207, 94, 1);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 5px;
  p {
    margin: 5px auto;
    font-size: 12px;
    width: 95%;
    :nth-child(1){font-weight:900;}
  }
`;
const LikedCatBox = styled.div`
  width: 98%;
  height: 100%;
  margin: 15px auto 10px auto;
  p {
    font-size: 14px;
    font-weight: 900;
    margin: 5px 0px;
  }
`;
const LikeCatWrapper = styled.div`
  width:100%;
  height: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
`;

export default UserProfileModal;
