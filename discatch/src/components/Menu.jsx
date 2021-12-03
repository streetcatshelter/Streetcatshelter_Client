// LIBRARY
import React from 'react';
import { useSelector } from "react-redux";

// STYLE
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Text } from "../elements";

// ICON
import { Home, Users, Compass, Send, User } from "react-feather";

// ROUTE
import { useLocation } from "react-router-dom";

// REDUX
import { history } from "../redux/configureStore";

const Menu = (props) => {
  const pathName = useLocation();
  const path = props.props.props.match.path;
  const preLocation = props.props.props?.location.state?.location;
  const pathLocation = props.props.props.match.params.village
    ? props.props.props.match.params.village
    : props.props.props.match.params.location;

  const userLocation = useSelector((state) => state.map.keywordList[0]);

  let location;
  location = userLocation ? userLocation : preLocation;

  if (
    path === "/catdetail/:village/:catId" ||
    path === "/catdetailinfo/:village/:catDetailId"
  ) {
    location = pathLocation;
  }

  if (path === '/catdetail/:village/:catId/1') {
    location = pathName.pathname.split('/')[2];
  }

  const catId = props.props.props.location.pathname.split("/")[3];

  const moveToHome = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      history.push({ pathname: "/", state: { location } });
    }
  };

  const moveToCommunity = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      history.push({ pathname: "/community", state: { location } });
    }
  };

  const moveToMap = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      if (
        path === "/catdetail/:village/:catId" ||
        path === "/catdetailinfo/:village/:catDetailId"
      ) {
        history.push({
          pathname: `/map/${location}/${catId}`,
          state: { catId, location },
        });
      } else {
        history.push({ pathname: `/map/${location}`, state: { location } });
      }
    }
  };

  const moveToChat = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      history.push({ pathname: "/chat", state: { location } });
    }
  };

  const moveToInfo = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      history.push({ pathname: "/mypage", state: { location } });
    }
  };

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
          onClick={() => moveToHome()}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Home />
          <Text textAlign="center" size="12px">
            홈
          </Text>
        </div>

        <div
          onClick={() => moveToCommunity()}
          style={{
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Users />
          <Text size="12px">커뮤니티</Text>
        </div>

        <div
          onClick={() => moveToMap()}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Compass />
          <Text textAlign="center" size="12px">
            지도
          </Text>
        </div>
        <div
          onClick={() => moveToChat()}
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
          onClick={() => moveToInfo()}
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
  height: 56px;
  background: #fbd986;
  position: fixed;
  z-index: 9;
  bottom: 0;
  @media screen and (max-height: 1024px) {
    height: 74px;
  }
  @media screen and (max-height: 731px) {
    height: 61px;
  }
  @media screen and (max-height: 720px) {
    height: 56px;
  }
  @media screen and (max-height: 667px) {
    height: 62px;
  }
  @media screen and (max-height: 568px) {
    height: 50px;
  }
`;

export default Menu;
