// library
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// route
import { Link } from "react-router-dom";

// element
import { Grid, Text, Button } from "../elements";

// icon
import { Home, Users, Compass, Send, User } from "react-feather";

// redux
import { __getCatLocation } from '../redux/modules/cat';

const Menu = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.keywordList[0]);
  const userVillage = useSelector((state) => state.mypage.userVillage[0]?.split('@')[0]);
  const userLocation = location ? location : userVillage;

  useEffect(() => {
    location === undefined
      ? dispatch(__getCatLocation(userVillage))
      : dispatch(__getCatLocation(location));
  }, [userVillage, location]);

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
          to={{pathname: '/community', state: { userLocation }}}
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
          to={{pathname: `/map/${userLocation}`, state: { userLocation }}}
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
