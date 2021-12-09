// LIBRARY
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// STYLE
import { flexBox } from "../../shared/style";
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Text } from "../../elements";

// ICON
import { Home, Users, Compass, Send, User } from "react-feather";

// ROUTE
import { useLocation } from "react-router-dom";

// REDUX
import { history } from "../../redux/configureStore";

import { Toast } from "../";
const Menu = (props) => {
  const pathName = useLocation();
  const path = props.props.props.match.path;
  const userInfo = useSelector((state) => state.mypage.userInfo);

  // 동네 이름 설정
  const preLocation = props.props.props?.location.state?.location;
  const firstLocation = userInfo.locationList
    ? userInfo?.locationList[0]?.split(" ")[2]
    : null;

  const pathLocation = props.props.props.match.params.village
    ? props.props.props.match.params.village
    : props.props.props.match.params.location;

  const userLocation = useSelector((state) => state.map.keywordList[0]);
  let location;
  location = userLocation ? userLocation : preLocation;

  if (location === undefined && pathLocation !== undefined) {
    location = pathLocation;
  } else if (location === undefined && pathLocation === undefined) {
    location = firstLocation;
  } 

  if (
    path === "/catdetailinfo/:village/:catDetailId" ||
    path === "/catdetail/:menu/:village/:catId/1" ||
    path === "/community/:village/:category/postdetail/:communityId"
  ) {
    location = pathName.pathname.split("/")[2];
  } else if (path === "/catdetail/:menu/:village/:catId") {
    location = pathName.pathname.split("/")[3];
  } else if (path === "/catdetailinfowrite/:catId") {
    location = location?.split(" ")[2];
  }

  if (
    userInfo.locationList &&
    location !== userInfo?.locationList[0]?.split(" ")[2] &&
    location !== userInfo?.locationList[1]?.split(" ")[2] &&
    location !== userInfo?.locationList[2]?.split(" ")[2]
  ) {
    location = preLocation;
  }

  if (location?.split(" ").length === 3) {
    location = location?.split(" ")[2];
  }

  const catId = props.props.props.location.pathname.split("/")[3];

  // 토스트 모달
  const [toastState, setToastState] = useState(false);
  
  // 홈으로 이동
  const moveToHome = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      setToastState(true);
    } else {
      history.push({ pathname: "/", state: { location } });
    }
  };

  // 커뮤니티로 이동
  const moveToCommunity = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      setToastState(true);
    } else {
      history.push({ pathname: "/community", state: { location } });
    }
  };

  // 지도로 이동
  const moveToMap = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      setToastState(true);
    } else {
      if (
        path === "/catdetail//:menu/:village/:catId" ||
        path === "/catdetailinfo/:village/:catDetailId"
      ) {
        history.push({
          pathname: `/map/${location}/${catId}`,
          state: { catId, location },
        });
      } else if (path === "/catdetail/:village/:catId/2") {
        history.goBack();
      } else {
        history.push({ pathname: `/map/${location}`, state: { location } });
      }
    }
  };

  // 채팅으로 이동
  const moveToChat = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      setToastState(true);
    } else {
      history.push({ pathname: "/chat", state: { location } });
    }
  };

  // 내정보로 이동
  const moveToInfo = () => {
    if (location === undefined) {
      history.push("/userinfoedit");
      setToastState(true);
    } else {
      history.push({ pathname: "/mypage", state: { location } });
    }
  };

  // 토스트 모달 
  useEffect(() => {
    if (toastState) {
      setTimeout(() => {
        setToastState(false);
      }, 1500);
    }
  }, [toastState]);

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
            cursor: "pointer",
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
            cursor: "pointer",
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
            cursor: "pointer",
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
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <User />
          <Text size="12px">내정보</Text>
        </div>
      </Grid>
      {toastState && <Toast message="동네 정보를 입력해주세요!" />}
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
