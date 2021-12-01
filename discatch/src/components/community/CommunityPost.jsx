// LIBRARY
import React from "react";

// ELEMENTS
import { Grid, Text } from "../../elements/index";

// STYLE
import styled, { css } from "styled-components";

// ICON
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MessageCircle, Eye } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

// REDUX
import { history } from "../../redux/configureStore";

// ROUTE
import { useLocation } from "react-router-dom";

const CommunityPost = ({ community }) => {
  const path = useLocation();
  const location = path.pathname.split("/")[2];
  const communityId = community.communityId;
  const category = path.pathname.split("/")[3];
  let name;
  if (community.nickname === "" || community.nickname === null) {
    name = community.username;
  } else {
    name = community.nickname;
  }

  return (
    <Grid height="30px">
      <CommunityPostStyle>
        <Grid
          clickEvent={() =>
            history.push(
              `/community/${location}/${category}/postdetail/${communityId}`
            )
          }
        >
          <Grid
            addstyle={() => {
              return css`
                display: flex;
                justify-content: space-between;
              `;
            }}
          >
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                `;
              }}
            >
              <Avatar
                src={community.profileImageUrl}
                style={{ width: "25px", height: "25px", borderRadius: "25px" }}
              />
              <Text width="100%" margin="4px" fontWeight="bold">
                {name}
              </Text>
              <Text
                width="100%"
                size="10px"
                margin="0 0 0 80px"
                fontWeight="bold"
                addstyle={() => {
                  return css`
                    @media screen and (max-width: 768px) {
                      margin: 0 0 0 80px;
                    }
                    @media screen and (max-width: 414px) {
                      margin: 0 0 0 70px;
                    }
                    @media screen and (max-width: 375px) {
                      margin: 0 0 0 40px;
                    }
                    @media screen and (max-width: 320px) {
                      margin: 0;
                    }
                    @media screen and (max-width: 280px) {
                      margin: 0 0 0 -50px;
                    }
                  `;
                }}
              >
                {community.createdAt}
              </Text>
            </Grid>
          </Grid>
          <Grid
            addstyle={() => {
              return css`
                position: relative;
                top: -50px;
              `;
            }}
          >
            <Text fontWeight={"bold"} margin={"8px 0 -4px 0"}>
              {community.title}
            </Text>
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: space-between;
                `;
              }}
            >
              <Grid></Grid>
              <Grid
                addstyle={() => {
                  return css`
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    right: 20px;
                    margin: 10px 0 0 120px;
                    @media screen and (max-width: 360px) {
                      margin: 10px 0 0 210px;
                    }
                    @media screen and (max-width: 320px) {
                      margin: 10px 0 0 175px;
                    }
                    @media screen and (max-width: 280px) {
                      margin: 10px 0 0 12px;
                    }
                  `;
                }}
              >
                <Grid
                  addstyle={() => {
                    return css`
                      display: flex;
                    `;
                  }}
                >
                  <Eye style={{ width: "13px", margin: "-4px 3px 0 0" }} />
                  <Text size={"12px"} fontWeight={"bold"} width="35px">
                    {String(community.cntView).length > 3
                      ? `${String(community.cntView)[0]}${"0".repeat(
                          String(community.cntView).length - 4
                        )}K`
                      : community.cntView}
                  </Text>
                </Grid>
                <Grid
                  addstyle={() => {
                    return css`
                      display: flex;
                    `;
                  }}
                >
                  <MessageCircle
                    style={{ width: "13px", margin: "-4px 3px 0 0" }}
                  />
                  <Text size={"12px"} fontWeight={"bold"} width="35px">
                    {String(community.cntComment).length > 3
                      ? `${String(community.cntComment)[0]}${"0".repeat(
                          String(community.cntComment).length - 4
                        )}K`
                      : community.cntComment}
                  </Text>
                </Grid>
                <Grid
                  addstyle={() => {
                    return css`
                      display: flex;
                    `;
                  }}
                >
                  <FavoriteIcon
                    style={{
                      width: "13px",
                      margin: "-4px 3px 0 0",
                      color: community.cntLikeit > 0 ? "red" : "gray",
                    }}
                  />
                  <Text size={"12px"} fontWeight={"bold"} width="35px">
                    {String(community.cntLikeit).length > 3
                      ? `${String(community.cntLikeit)[0]}${"0".repeat(
                          String(community.cntLikeit).length - 4
                        )}K`
                      : community.cntLikeit}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CommunityPostStyle>
    </Grid>
  );
};

const CommunityPostStyle = styled.div`
  position: relative;
  top: 20px;
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width: 100%;
  height: 77px;
  margin: 66px 0;
  padding: 4px;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    margin: 59px 0;
  }
  @media screen and (max-width: 540px) {
    margin: 61px 0;
  }
  @media screen and (max-width: 414px) {
    margin: 62px 0;
  }
  @media screen and (max-width: 411px) and (max-height: 731px) {
    margin: 61px 0;
  }
  @media screen and (max-width: 375px) {
    margin: 63px 0;
  }
  @media screen and (max-width: 375px) and (max-height: 667px) {
    margin: 66px 0;
  }
  @media screen and (max-width: 360px) {
    margin: 61px 0;
  }
`;

export default CommunityPost;
