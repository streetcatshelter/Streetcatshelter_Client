// library
import React from "react";
import styled, { css } from "styled-components";

// style
import { flexBox } from "../shared/style";

// route
import { Link } from "react-router-dom";

// element
import { Grid, Text } from "../elements";

// icon
import { Home, Users, Compass, Send, User } from "react-feather";

const Menu = () => {
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
          to="/community"
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
          to="/map"
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
