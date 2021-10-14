import React, { useState } from "react";

/* == Custom - Elements*/
import { Image, Grid, Text } from "../../elements";

/* == Library - style */
import styled from "styled-components";

import { EditModalSlide } from "..";

/* == Redux */
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/configureStore";
import { userActions } from "../../redux/modules/user";
const Profile = () => {
  const userInfo = localStorage.getItem("userInfo");
  const userInfoParse = JSON.parse(userInfo);

  const dispatch = useDispatch();
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
        src={userInfoParse.picture}
      />
      <Grid margin="0px 0px 0px 20px" width="70%">
        <Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            width="95%"
            positon="relative"
          >
            <Text fontWeight="800">{userInfoParse.name}</Text>

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
          <Text fontWeight="800">👑 대장냥</Text>
        </Grid>
        <Grid>
          <Text size="12px">평창동,망원동,하안동</Text>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
