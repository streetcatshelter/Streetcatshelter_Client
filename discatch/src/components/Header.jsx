// library
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// style
import { flexBox } from "../shared/style";

// route
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// element
import { Grid } from "../elements";

// icon
import { Search, Bell, ArrowLeft } from "react-feather";

// REDUX
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { searchMap } from "../redux/modules/map";
import { mypageActions } from "../redux/modules/mypage";

const Header = (props) => {
  const locationA = useLocation();
  const dispatch = useDispatch();
  const path = props.path;
  const userInfo = useSelector((state) => state.mypage.userInfo);
  let location1;
  if (userInfo.locationList && path.length === 1) {
    location1 = userInfo?.locationList[0].split('@')[0]
  } else {
    location1 = locationA.state?.userLocation;
  }
  const locationList = userInfo.locationList?.filter(v => v.split('@')[0] !== location1);
  let location2;
  let location3;
  if (userInfo.locationList !== undefined) {
    location2 = locationList[0].split('@')[0];
    location3 = locationList[1].split('@')[0];
  }

  const [searchModal, setSearchModal] = useState(false);
  
  useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, []);
  
  useEffect(() => {
    dispatch(searchMap(locationA.state?.location));
  }, []);

  let options;
  if (location1 !== undefined && location2 === undefined) {
    options = [
      { key: 1, value: location1 }
    ]
  } else if (location1 !== undefined && location2 !== undefined && location3 === undefined) {
    options = [
      { key: 1, value: location1 },
      { key: 2, value: location2 }
            ];
  } else if (location1 !== undefined && location2 !== undefined && location3 !== undefined) {
    options = [
      { key: 1, value: location1 },
      { key: 2, value: location2 },
      { key: 3, value: location3 },
    ];
  }

  const [place, setPlace] = useState(location1);
  const onChangeHandler = (e) => {
    setPlace(e.target.value);
    const keyword = e.target.value;
    dispatch(searchMap(keyword));
  };

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
              {options && options.map((pl, idx) => (
                <option key={pl.key} value={pl.value}>
                  {pl.value}
                </option>
              ))}
            </SelectStyle>
          ) : (
            <ArrowLeft
              style={{ margin: "20px", color: "gray" }}
              onClick={() => {
                history.goBack();
              }}
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

        <Grid width="20%" height="100%" margin="auto">
          <Grid margin="20px 10px" height="25px" width="60px">
            <SearchBtn
              style={{ color: "gray" }}
              onClick={() => {
                setSearchModal(!searchModal);
              }}
            />
            <Bell style={{ margin: "auto 0px auto 10px", color: "gray" }} />
          </Grid>
        </Grid>
      </Grid>
      {searchModal ? (
        <Grid width="100%" height="45px" background="#fefdf8">
          <SearchBar>
            <SearchInput />
            <SearchBarBtn>
              <p>검색</p>
            </SearchBarBtn>
          </SearchBar>
        </Grid>
      ) : (
        ""
      )}
    </HeaderStyle>
  );
};
const SearchInput = styled.input`
  width: 90%;
  height: 30px;
  border: none;
  margin-left: 10px;
`;
const SearchBarBtn = styled.div`
  width: 50px;
  height: 35px;
  border-radius: 15px;

  background: #fbd986;
  margin: auto;
  p {
    margin: 5px;
    font-weight: 900;
  }
`;
const SearchBar = styled.div`
  width: 90%;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #fbd986;
  margin: auto;
  display: flex;
  background: #fefdf8;
`;
const SearchBtn = styled(Search)`
  cursor: pointer;
`;

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
