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

// REDUX
import { history } from "../redux/configureStore";

const Menu = (props) => {
  const path = props.props.props.match.path;
  const preLocation = props.props.props?.location.state?.location;
  const pathLocation = props.props.props.match.params.village
    ? props.props.props.match.params.village
    : props.props.props.match.params.location;

  const userVillage = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]
  );

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
  const userLocation = useSelector((state) => state.map.keywordList[0]);
  let location = preLocation;
  if (location === undefined) {
    location = pathLocation ? pathLocation : userVillage;
  }

  if (
    path === "/catdetail/:village/:catId" ||
    path === "/catdetailinfo/:village/:catDetailId"
  ) {
    location = pathLocation;
  }

  if (location !== userVillage && location !== userVillage && location !== userVillage) {
    location = userVillage;
  }

  location = userLocation ? userLocation : location;
  const catId = props.props.props.location.pathname.split("/")[3];

  const moveToHome = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      alert("동네 정보를 입력해주세요!");
    } else {
      if (path === "/map/:village") {
        history.push({ pathname: "/", state: { location } });
      } else if (preLocation === userVillageA?.split(' ')[2]) {
        location = userVillage0;
        history.push({ pathname: "/", state: { location } });
      } else if (preLocation === userVillageB?.split(' ')[2]) {
        location = userVillage1;
        history.push({ pathname: "/", state: { location } });
      } else if (preLocation === userVillageC?.split(' ')[2]) {
        location = userVillage2;
        history.push({ pathname: "/", state: { location } });
      } else {
        history.push({ pathname: "/", state: { location } });
      }
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
