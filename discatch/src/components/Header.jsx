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
import { Search, Bell, ArrowLeft, LogOut } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { searchMap } from "../redux/modules/map";
import { mypageActions } from "../redux/modules/mypage";
import { userActions } from "../redux/modules/user";

const Header = (props) => {
  const preLocation = props.location;
  const locationA = useLocation();
  const dispatch = useDispatch();
  const path = props.path;
  const userInfo = useSelector((state) => state.mypage.userInfo);
  let location;
  const firstLocation = locationA.state?.location;
  const category = locationA.pathname.split('/')[3];

  if (preLocation !== undefined) {
    location = preLocation;
  } else if (userInfo.locationList && path.length === 1) {
    location = userInfo.locationList[0]?.split("@")[0];
  } else {
    location = firstLocation;
  }

  if (
    userInfo?.locationList &&
    location + " " === userInfo?.locationList[0]?.split("@")[1]?.split("(")[0]
  ) {
    location = userInfo?.locationList[0]?.split("@")[0];
  } else if (
    userInfo?.locationList &&
    location + " " === userInfo?.locationList[1]?.split("@")[1]?.split("(")[0]
  ) {
    location = userInfo?.locationList[1]?.split("@")[0];
  } else if (
    userInfo?.locationList &&
    location + " " === userInfo?.locationList[2]?.split("@")[1]?.split("(")[0]
  ) {
    location = userInfo?.locationList[2]?.split("@")[0];
  } else if (location === undefined) {
    location = locationA.pathname.split("/")[2];
  }

  const sameLocationList = userInfo.locationList?.filter(
    (v) => v.split("@")[0] === location
  );

  const locationList = userInfo.locationList?.filter(
    (v) => v.split("@")[0] !== location
  );

  let location2;
  let location3;
  if (userInfo.locationList !== undefined && sameLocationList.length === 1) {
    if (userInfo.locationList.length === 3) {
      location2 = locationList[0]?.split("@")[0];
      location3 = locationList[1]?.split("@")[0];
    } else if (userInfo.locationList.length === 2) {
      location2 = locationList[0]?.split("@")[0];
    }
  } else if (
    userInfo.locationList !== undefined &&
    sameLocationList.length === 2
  ) {
    location = sameLocationList[0]?.split("@")[0];
    location2 = sameLocationList[1]?.split("@")[0];
    location3 = locationList[0]?.split("@")[0];
  } else if (
    userInfo.locationList !== undefined &&
    sameLocationList.length === 3
  ) {
    location = sameLocationList[0]?.split("@")[0];
    location2 = sameLocationList[1]?.split("@")[0];
    location3 = sameLocationList[2]?.split("@")[0];
  }

  const [place, setPlace] = useState(location);

  useEffect(() => {
    dispatch(searchMap(firstLocation));
  }, [firstLocation, dispatch]);

  useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, [dispatch])

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
    history.push({pathname:'/', state: { location : keyword }});
    history.go(0);
  };

  const goBack = () => {
    if (path === '/community/:village/:category') {
      history.push({ pathname: "/community", state: { location } });
      history.go(0);
    } else if (path === '/community/:village/:category/postdetail/:communityId') {
      history.push({ pathname: `/community/${location}/${category}`, state: { location }});
      history.go(0);
    } else if (path === '/catdetail/:village/:catId') {
      history.push({ pathname: '/', state: { location } });
      history.go(0);
    } else if (path === '/community/:village/:category/write') {
      history.push({ pathname: `/community/${location}/${category}`, state: { location } });
      history.go(0);
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
          {path === "/" || path === "/community" || path === "/map/:village"? (
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
          }}>
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
