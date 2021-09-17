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
            style={{ marginLeft: "25px", color: "gray" }}
            onClick={() => {
              history.goBack();
            }}
          />
        )}

        <Link to="/" style={{ margin: "0 auto", textDecoration: "none" }}>
          <Text
            color="D_olive"
            size="26px"
            fontWeight="600"
            addstyle={() => {
              return css`
                font-family: "Walter Turncoat";
                /* font-family: 'Nunito', sans-serif; */
              `;
            }}
          >
            disCATch
          </Text>
        </Link>

        <Search style={{ color: "gray" }} />
        <Bell style={{ margin: "0 4% 0 3%", color: "gray" }} />
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
  margin: 0 -3% 0 3%;
  border: none;
  color: gray;
  font-weight: bold;
  font-size: 12px;
  background: #fefdf8;
  &:focus {
    outline: none;
  }
`;

export default Header;
