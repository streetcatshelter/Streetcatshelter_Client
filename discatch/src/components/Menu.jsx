// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// ROUTE
import { Link, useLocation } from "react-router-dom";

// ELEMENTS
import { Grid, Text } from "../elements";

// ICON
import { Home, Users, Compass, Send, User } from "react-feather";

const Menu = () => {
  const path = useLocation();
  const pathLocation = path.pathname.split('/')[2];
  const userLocation = useSelector((state) => state.map.keywordList[0]);
  const userVillage = useSelector((state) => state.mypage.userVillage[0]?.split('@')[0]);
  let location = userLocation ? userLocation : userVillage;
  
  if (pathLocation !== undefined) {
    if (location !== pathLocation) {
      location = pathLocation;
    }
  }

  return (
    <MenuStyle>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox("space-around")}
          `;
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Home />
          <Text textAlign="center" size="12px">
            홈
          </Text>
        </Link>
        <Link
          to={{pathname: '/community', state: { location }}}
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <Users />
          <Text size="12px">커뮤니티</Text>
        </Link>
        <Link
          to={{pathname: `/map/${location}`, state: { location }}}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Compass />
          <Text textAlign="center" size="12px">
            지도
          </Text>
        </Link>
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Send />
          <Text textAlign="center" size="12px">
            채팅
          </Text>
        </Link>
        <Link
          to="/mypage"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <User />
          <Text size="12px">내정보</Text>
        </Link>
      </Grid>
    </MenuStyle>
  );
};

const MenuStyle = styled.footer`
  max-width: 420px;
  width: 100%;
  height: 50px;
  background: #fbd986;
  position: fixed;
  z-index: 9;

  bottom: 0;
`;

export default Menu;