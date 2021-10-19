import React, { useState, useEffect } from "react";

/* == Custom - Elements*/
import { Image, Grid, Text } from "../../elements";

/* == Library - style */
import styled from "styled-components";

import { EditModalSlide } from "..";

/* == Redux */
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/configureStore";
import { userActions } from "../../redux/modules/user";
import { mypageActions } from "../../redux/modules/mypage";
const Profile = () => {
  const dispatch = useDispatch();
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const NickName = UserInfo.nickname === "string" ? "" : UserInfo.nickname;
  console.log(UserInfo);
  useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, []);
  const logout = () => {
    dispatch(userActions._logout());
  };
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
            <Text fontWeight="800">
              {UserInfo.username}({NickName})
            </Text>

            <EditModalSlide
              FirstBtn="프로필수정"
              SecondBtn="로그아웃"
              FirstClick={() => {
                history.push("/userinfoedit");
              }}
              SecondClick={logout}
            />
          </Grid>
        </Grid>
        <Grid>
          <Text fontWeight="800">{UserInfo.userLevel}</Text>
        </Grid>
        <Grid>
          <Text size="12px">
            {UserInfo.location},{UserInfo.location2},{UserInfo.location3}
          </Text>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
