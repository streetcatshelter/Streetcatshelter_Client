// LIBRARY
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// ELEMENTS
import { Image, Grid, Text } from "../../elements";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { EditModalSlide } from "..";

// REDUX
import { history } from "../../redux/configureStore";
import { userActions } from "../../redux/modules/user";

const Profile = (props) => {
  const dispatch = useDispatch();
  const location = props.location;
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const nickName = UserInfo.nickname === "string" ? "" : UserInfo.nickname;

  const logout = () => {
    dispatch(userActions._logout());
  };

  if (!UserInfo) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <Image
        width="70px"
        height="70px"
        borderRadius="35px"
        margin="auto"
        src={UserInfo.profileImageUrl}
      />
      <Grid margin="0px 0px 0px 20px" width="70%">
        <Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            width="95%"
            positon="relative"
          >
            <Text fontWeight="800" margin="5px 0px">
              {UserInfo.username}({nickName})
            </Text>

            <EditModalSlide
              FirstBtn="프로필수정"
              SecondBtn="로그아웃"
              FirstClick={() => {
                history.push({
                  pathname: "/userinfoedit",
                  state: { location },
                });
              }}
              SecondClick={logout}
            />
          </Grid>
        </Grid>
        <Grid>
          <Text fontWeight="900">{UserInfo.userLevel}</Text>
        </Grid>
        {UserInfo.locationList ? (
          <Grid display="flex">
            {UserInfo.locationList.map((location, idx) => {
              return (
                <Text margin="0px 5px 0px 0px" size="12px" key={idx}>
                  {location.split(" ")[2]}
                </Text>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
