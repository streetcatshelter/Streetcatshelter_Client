// LIBRARY
import React, { useState, useEffect } from "react";

// STYLE
import { flexBox } from "../shared/style";
import styled, { css } from "styled-components";

// ROUTE
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// ELEMENTS
import { Grid } from "../elements";

// ICON
import { ArrowLeft, LogOut } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { searchMap } from "../redux/modules/map";
import { mypageActions } from "../redux/modules/mypage";
import { userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const locationA = useLocation();
  const path = props.path;
  const userInfo = useSelector((state) => state.mypage.userInfo);
  let location;
  const firstLocation = locationA.state?.location;
  const category = locationA.pathname.split("/")[3];

  const userLocation = useSelector((state) => state.map.keywordList[0])
  location = userLocation ? userLocation : firstLocation;

  if (
    path === "/catdetail/:village/:catId" ||
    path === "/catdetailinfo/:village/:catDetailId" ||
    path === '/catdetail/:village/:catId/1' ||
    path === '/community/:village/:category/postdetail/:communityId' ||
    path === '/catinfowrite/:location'
  ) {
    location = locationA.pathname.split('/')[2];;
  }

  if (userInfo.locationList && location === undefined) {
    location = userInfo?.locationList[0]?.split(' ')[2];
  }

  const sameLocationList = userInfo.locationList?.filter(
    (v) => v.split(" ")[2] === location
  );

  const locationList = userInfo.locationList?.filter(
    (v) => v.split(" ")[2] !== location
  );

  let location2;
  let location3;
  if (userInfo.locationList !== undefined && sameLocationList.length === 1) {
    if (userInfo.locationList.length === 3) {
      location2 = locationList[0]?.split(' ')[2];
      location3 = locationList[1]?.split(' ')[2];
    } else if (userInfo.locationList.length === 2) {
      location2 = locationList[0]?.split(' ')[2];
    }
  } else if (
    userInfo.locationList !== undefined &&
    sameLocationList.length === 2
  ) {
    location = sameLocationList[0]?.split(' ')[2];
    location2 = sameLocationList[1]?.split(' ')[2];
    location3 = locationList[0]?.split(' ')[2];
  } else if (
    userInfo.locationList !== undefined &&
    sameLocationList.length === 3
  ) {
    location = sameLocationList[0]?.split(' ')[2];
    location2 = sameLocationList[1]?.split(' ')[2];
    location3 = sameLocationList[2]?.split(' ')[2];
  }

  const [place, setPlace] = useState(location);

  useEffect(() => {
    dispatch(searchMap(firstLocation));
  }, [firstLocation, dispatch]);

  useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, [dispatch]);

  let options;
  if (location !== undefined && location2 === undefined) {
    options = [{ key: 1, value: location }];
  } else if (
    location !== undefined &&
    location2 !== undefined &&
    location3 === undefined
  ) {
    options = [
      { key: 1, value: location },
      { key: 2, value: location2 },
    ];
  } else if (
    location !== undefined &&
    location2 !== undefined &&
    location3 !== undefined
  ) {
    options = [
      { key: 1, value: location },
      { key: 2, value: location2 },
      { key: 3, value: location3 },
    ];
  }

  const onChangeHandler = (e) => {
    setPlace(e.target.value);
    const keyword = e.target.value;
    dispatch(searchMap(keyword));
  };
  
  const goBack = () => {
    if (path === "/community/:village/:category") {
      history.push({ pathname: "/community", state: { location } });
    } else if (path === "/community/:village/:category/postdetail/:communityId") {
      history.push({
        pathname: `/community/${location}/${category}`,
        state: { location },
      });
    } else if (path === '/catdetail/:village/:catId/1') {
      history.push({ pathname: `/map/${location}`, state : { location }})
    } else if (path === "/catdetail/:village/:catId") {
      history.push({ pathname: "/", state: { location } });
    } else if (path === "/community/:village/:category/write") {
      history.push({
        pathname: `/community/${location}/${category}`,
        state: { location },
      });
    } else {
      history.goBack();
    }
  };

  const Logout = () => {
    if (window.confirm("정말로 로그아웃하시겠습니까?") === true) {
      dispatch(userActions._logout());
    }
  };

  if (!userInfo) {
    return <div></div>;
  }

  return (
    <HeaderStyle>
      <Grid
        display="flex"
        addstyle={() => {
          return css`
            ${flexBox("space-between")}
          `;
        }}
      >
        <Grid width="20%" height="100%" margin="auto">
          {path === "/" || path === "/community" || path === "/map/:village" ? (
            <SelectStyle onChange={onChangeHandler} value={place}>
              {options &&
                options.map((pl, idx) => (
                  <option key={pl.key} value={pl.value}>
                    {pl.value}
                  </option>
                ))}
            </SelectStyle>
          ) : (
            <ArrowLeft
              style={{ margin: "20px", color: "gray" }}
              onClick={goBack}
            />
          )}
        </Grid>

        <Head>
          <Link
            to="/"
            style={{ margin: "0 auto", width: "60%", textDecoration: "none" }}
          >
            <p>
              dis<span>C</span>
              <span>A</span>
              <span>T</span>ch
            </p>{" "}
          </Link>
        </Head>

        <Grid
          width="20%"
          height="100%"
          margin="auto"
          addstyle={() => {
            return css`
              @media screen and (max-width: 280px) {
                position: relative;
                right: 25px;
              }
            `;
          }}
        >
          <Grid margin="30px 10px" height="25px" width="60px">
            {/* <SearchBtn
              style={{ color: "gray" }}
              onClick={() => {
                setSearchModal(!searchModal);
              }}
            />
            <Bell style={{ margin: "auto 0px auto 10px", color: "gray" }} /> */}

            <LogOut
              onClick={Logout}
              style={{ color: "gray", marginLeft: "30px", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {searchModal ? (
        <Grid width="100%" height="45px" background="#fefdf8">
          <SearchBar>
            <SearchInput />
            <SearchBarBtn>
              <p>검색</p>
            </SearchBarBtn>
          </SearchBar>
        </Grid>
      ) : (
        ''
      )} */}
    </HeaderStyle>
  );
};
// const SearchInput = styled.input`
//   width: 90%;
//   height: 30px;
//   border: none;
//   margin-left: 10px;
// `;
// const SearchBarBtn = styled.div`
//   width: 50px;
//   height: 35px;
//   border-radius: 15px;

//   background: #fbd986;
//   margin: auto;
//   p {
//     margin: 5px;
//     font-weight: 900;
//   }
// `;
// const SearchBar = styled.div`
//   width: 90%;
//   height: 35px;
//   border-radius: 15px;
//   border: 1px solid #fbd986;
//   margin: auto;
//   display: flex;
//   background: #fefdf8;
// `;
// const SearchBtn = styled(Search)`
//   cursor: pointer;
// `;

const HeaderStyle = styled.header`
  max-width: 420px;
  width: 100%;
  height: 60px;
  background: #fefdf8;
  position: fixed;
  top: 0;
  z-index: 9;
`;

const SelectStyle = styled.select`
  width: 60px;
  height: 25px;
  margin: 20px 10px;
  border: none;
  color: gray;
  font-weight: bold;
  font-size: 12px;
  background: #fefdf8;
  &:focus {
    outline: none;
  }
`;
const Head = styled.div`
  margin: auto;
  p {
    margin: 0px auto;
    font-size: 35px;
    font-weight: 700;
    color: #fbd986;
  }
  span {
    font-size: 45px;
    font-weight: 800;
    color: #cbcf52;
    :nth-child(2) {
      color: #d19b61;
    }
  }
`;
export default Header;
