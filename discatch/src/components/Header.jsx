// library
import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";

// style
import { flexBox } from "../shared/style";

// route
import { Link } from "react-router-dom";

// element
import { Grid, Text } from "../elements";

// icon
import { Search, Bell, ArrowLeft } from "react-feather";

import { history } from "../redux/configureStore";

const Header = (props) => {
  const path = props.path;
  const options = useMemo(
    () => [
      { key: 1, value: "지역" },
      { key: 2, value: "망원동" },
      { key: 3, value: "고척동" },
      { key: 4, value: "개봉동" },
    ],
    []
  );

  const [place, setPlace] = useState("");
  const onChangeHandler = (e) => {
    setPlace(e.target.value);
  };

  return (
    <HeaderStyle>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox("space-between")}
          `;
        }}
      >
        <Grid width="20%" height="100%" margin="auto">
          {path === "/" || path === "/community" ? (
            <SelectStyle onChange={onChangeHandler} value={place}>
              {options.map((pl, idx) => (
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
            <Search style={{ color: "gray" }} />
            <Bell style={{ margin: "auto 0px auto 10px", color: "gray" }} />
          </Grid>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  max-width: 420px;
  width: 100%;
  height: 60px;
  background: #fefdf8;
  position: fixed;
  top: 0;

  z-index: 9;
  display: flex;
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
