// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// ROUTE
import { Link } from "react-router-dom";

// ELEMENTS
import { Grid, Text } from "../elements";

// ICON
import { Home, Users, Compass, Send, User } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";

const Menu = (props) => {
  const preLocation = props.props.props?.location.state?.location;
  const userLocation = useSelector((state) => state.map.keywordList[0]);
  const userVillage = useSelector((state) => state.mypage.userVillage[0]?.split('@')[0]);
  let location = userLocation ? userLocation : preLocation;
  if (location === undefined) {
    location = userVillage;
  }

  const moveToCommunity = () => {
    history.push({pathname: '/community', state: { location }});
    history.go(0);
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
          to={{pathname: '/', 
          state: { location }}}
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

        <div 
          onClick={()=>moveToCommunity()} 
          style={{
            cursor:'pointer',
            textAlign: "center",}}>
        <Users />
        <Text size="12px">커뮤니티</Text>
        </div>

        <Link
          to={{pathname: `/map/${location}`, 
              state: { location }}}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
          <Compass />
          <Text textAlign="center" size="12px">
            지도
          </Text>
        </Link>
        <Link
          to={{pathname:"/chat", state: { location }}}
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
          to={{pathname:"/mypage", state: { location }}}
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