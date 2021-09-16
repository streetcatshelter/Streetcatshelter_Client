import React from "react";

// COMPONENTS
import { Template, CommunityPostList } from "../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Text } from "../elements/index";

// ROUTE
import { Link, useLocation } from "react-router-dom";

//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CommunityDetail = (props) => {
  const path = useLocation();
  console.log(path.pathname);
  let title = null;
  if (path.pathname === "/community/catinfo") {
    title = "고양이 정보글";
    console.log(123);
  } else if (path.pathname === "/community/gathering") {
    title = "평창동 동네 모임";
  } else if (path.pathname === "/community/sharing") {
    title = "평창동 고양이 용품 나눔";
  }
  return (
    <Template props={props}>
      <Grid
        bgColor="bgColor"
        margin="-10vh 0 0 0"
        addstyle={() => {
          return css`
            position: relative;
            top: 80px;
          `;
        }}
      >
        <CommunityDetailStyle>
          <Grid
            width="350px"
            addstyle={() => {
              return css`
                position: relative;
                margin: 10px auto;
                font-size: 18px;
                font-weight: bold;
                top: 90px;
              `;
            }}
          >
            <Text size="18px" margin="20px 0 0 0">
              {title}
            </Text>
          </Grid>
          <Grid margin="30px 0 0 0">
            <CommunityPostList />
          </Grid>
        </CommunityDetailStyle>
        <Link to="/communitypostwrite">
          <Button is_float="is_float">
            <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
          </Button>
        </Link>
      </Grid>
    </Template>
  );
};

const CommunityDetailStyle = styled.div`
  width: 100%;
  margin: -100px auto;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CommunityDetail;
