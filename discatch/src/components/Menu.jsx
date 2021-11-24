// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Text } from "../elements";

// ICON
import { Home, Users, Compass, Send, User } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";

const Menu = (props) => {
  const path = props.props.props.match.path;
  const preLocation = props.props.props?.location.state?.location;
  const pathLocation = props.props.props.match.params.village ? 
                        props.props.props.match.params.village : 
                        props.props.props.match.params.location;

  const userVillage0 = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]?.split("(")[0]
  );
  const userVillageA = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[1]?.split("(")[0]
  );

  const userVillage1 = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[0]?.split("(")[0]
  );
  const userVillageB = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[1]?.split("(")[0]
  );

  const userVillage2 = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[0]?.split("(")[0]
  );
  const userVillageC = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[1]?.split("(")[0]
  );

  let location = preLocation;

  if (location === undefined) {
    location = pathLocation;
  } 
  
  if (path === '/catdetail/:village/:catId' || path === '/catdetailinfo/:village/:catDetailId') {
    location = pathLocation;
  }

  const catId = props.props.props.location.pathname.split('/')[3];

  const moveToHome = () => {
    if (path === '/map/:village') {
      history.push({ pathname: '/', state: { location : pathLocation}});
    } else if (preLocation+' ' === userVillageA) {
      location = userVillage0;
      history.push({ pathname: '/', state: { location }});
    } else if (preLocation+' ' === userVillageB) {
      location = userVillage1;
      history.push({ pathname: '/', state: { location }});
    } else if (preLocation+' ' === userVillageC) {
      location = userVillage2;
      history.push({ pathname: '/', state: { location }});
    } else {
      history.push({ pathname: '/', state: { location }});
    }
  }

  const moveToCommunity = () => {
    history.push({ pathname: '/community', state: { location }});
    history.go(0);
  }

  const moveToMap = () => {
    if (path === '/catdetail/:village/:catId' || path === '/catdetailinfo/:village/:catDetailId') {
      history.push({ pathname: `/map/${location}/${catId}`, state: { catId, location }});
      history.go(0); 
    } else {
      history.push({ pathname: `/map/${location}`, state: { location }});
      history.go(0);
    }
  }

  const moveToChat = () => {
    history.push({ pathname: '/chat', state: { location }});
    history.go(0);
  }

  const moveToInfo = () => {
    history.push({ pathname: '/mypage', state: { location }});
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
        <div 
          onClick={()=>moveToHome()} 
          style={{
            textDecoration: "none",
            color: "black"
          }}>
          <Home />
          <Text textAlign="center" size="12px">
            홈
          </Text>
        </div>

        <div 
          onClick={()=>moveToCommunity()} 
          style={{
            cursor:'pointer',
            textAlign: "center",}}>
        <Users />
        <Text size="12px">커뮤니티</Text>
        </div>

        <div
          onClick={()=>moveToMap()}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
          <Compass />
          <Text textAlign="center" size="12px">
            지도
          </Text>
        </div>
        <div
          onClick={()=>moveToChat()}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Send />
          <Text textAlign="center" size="12px">
            채팅
          </Text>
        </div>
        <div
          onClick={()=>moveToInfo()}
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <User />
          <Text size="12px">내정보</Text>
        </div>
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