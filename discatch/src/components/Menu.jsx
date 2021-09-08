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
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <Home />
          <p
            style={{
              margin: "0",
            }}
          >
            홈
          </p>
        </Link>
        <Link
          to="/community"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <Users />
          <p
            style={{
              margin: "0",
            }}
          >
            커뮤니티
          </p>
        </Link>
        <Link
          to="/map"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <Compass />
          <p
            style={{
              margin: "0",
            }}
          >
            지도
          </p>
        </Link>
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <Send />
          <p
            style={{
              margin: "0",
            }}
          >
            채팅
          </p>
        </Link>
        <Link
          to="/mypage"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <User />
          <p
            style={{
              margin: "0",
            }}
          >
            내정보
          </p>
        </Link>
      </Grid>
    </MenuStyle>
  );
};

const MenuStyle = styled.footer`
  width: 100%;
  height: 50px;
  background: #fbd986;
  position: fixed;
  z-index: 9;
  left: 0;
  bottom: 0;
`;

export default Menu;
