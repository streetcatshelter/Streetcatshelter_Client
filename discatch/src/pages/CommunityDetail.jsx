import React from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template, CommunityPost } from "../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Text } from "../elements/index";

// ROUTE
import { useLocation } from "react-router-dom";

//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// FUNCTION
import InfinityScroll from "../shared/InfinityScroll";
import { getCommunityDB, getMoreCommunityDB } from "../redux/modules/community";

// REDUX
import { history } from "../redux/configureStore";

const CommunityDetail = (props) => {
  const location2 = useLocation();
  const query = window.location.search;
  const pathName = location2.pathname;
  const dispatch = useDispatch();

  const location = "망원동";
    // const currentLocation = useSelector((state) => state.map.keywordList[0]);

  const path = useLocation();
  let category = null;
  if (path.pathname === "/community/catinfo") {
    category = "고양이 정보글";
  } else if (path.pathname === "/community/gathering") {
    category = `${location} 동네 모임`;
  } else if (path.pathname === "/community/sharing") {
    category = `${location} 고양이 용품 나눔`;
  }

  const getMoreCommunity = () => {
    dispatch(getMoreCommunityDB(category, location));
  };

  const communityList = useSelector((state) => state.community.list)

  React.useEffect(() => {
    if (!query) dispatch(getCommunityDB(category, location));

    return () => {
      dispatch(getCommunityDB(category, location));
    };
  }, []);

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
            addstyle={() => {
              return css`
                position: relative;
                margin: 0 auto;
                font-size: 18px;
                font-weight: bold;
                top: 90px;
              `;
            }}
          >
            <Text 
              size="18px" 
              margin="0 0 0 3vw"
              addstyle={() => {
                return css`
                  @media screen and (min-height: 1024px) {
                    margin: 12% 0 0 8%;
                  }
                `;
                }}
              >
              {category}
            </Text>
          </Grid>
          <Grid 
            margin="-85vh 0 0 0"
            addstyle={() => {
              return css`
                @media screen and (min-height: 1024px) {
                  margin: -96vh 0 0 0;
                }
                @media screen and (min-height: 812px) {
                  margin: -93vh 0 0 0;
                }
              `;
            }}>

          {communityList?.length ? (
            communityList.map((community, idx) => {
              return (
                <InfinityScroll
                  next={getMoreCommunity}
                  index={idx}
                  length={communityList.length}
                  key={community.communityId}
                >
                  <CommunityPost community={community} />
                </InfinityScroll>
              );
            })
          ) : (
            <></>
          )}
          </Grid>
        </CommunityDetailStyle>
        {pathName === '/community/sharing' && <Button
          clickEvent={() =>
            history.push({
              pathname: "/community/sharing/write",
              category: category,
            })
          }
          is_float="is_float"
        >
          <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
        </Button>}
        {pathName === '/community/catinfo' && <Button
          clickEvent={() =>
            history.push({
              pathname: "/community/catinfo/write",
              category: category,
            })
          }
          is_float="is_float"
        >
          <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
        </Button>}
        {pathName === '/community/gathering' && <Button
          clickEvent={() =>
            history.push({
              pathname: "/community/gathering/write",
              category: category,
            })
          }
          is_float="is_float"
        >
          <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
        </Button>}
      </Grid>
    </Template>
  );
};

const CommunityDetailStyle = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 92vh;
  margin: -10vh 0 0;
  @media screen and (min-height: 1024px) {
    height: 102vh;
  }
  @media screen and (min-height: 812px) {
    height: 97vh;
  }
`;

export default CommunityDetail;
