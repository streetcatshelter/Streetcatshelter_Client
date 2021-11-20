// LIBRARY
import React, { useState } from "react";
import { css } from "styled-components";

// STYLE
import { flexBox } from "../shared/style";

// COMPONENTS
import {
  Template,
  CatCalendar,
  CatDiary,
  CatGallery,
  CatComment,
  CatPost,
} from "../components";

// ELEMENTS
import { Button, Grid } from "../elements";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// REDUX
import { history } from "../redux/configureStore";

const CatDetail = (props) => {
  const location = props.location.pathname.split("/")[2];
  const catId = props.match.params.catId;

  const [menu, setMenu] = useState("캘린더");

  return (
    <Template props={props}>
      <CatPost cat={catId} location={location} path="detail" />
      <Grid
        alignItems="center"
        addstyle={() => {
          return css`
            border-bottom: 2px solid #cbcf5e;
            ${flexBox("flex-start")}
          `;
        }}
      >
        <Button
          clickEvent={() => {
            setMenu("캘린더");
          }}
          color={menu === "캘린더" ? "olive" : "black"}
          margin="0 8%"
          fontSize="1em"
          fontWeight="800"
        >
          캘린더
        </Button>

        <Button
          clickEvent={() => {
            setMenu("집사일기");
          }}
          color={menu === "집사일기" ? "olive" : "black"}
          fontSize="1em"
          fontWeight="800"
        >
          집사일기
        </Button>

        <Button
          clickEvent={() => {
            setMenu("갤러리");
          }}
          color={menu === "갤러리" ? "olive" : "black"}
          margin="0 0 0 8%"
          fontSize="1em"
          fontWeight="800"
        >
          갤러리
        </Button>
      </Grid>

      {menu === "캘린더" ? (
        <CatCalendar catId={catId} location={location} />
      ) : menu === "집사일기" ? (
        <CatDiary catId={catId} location={location} />
      ) : menu === "갤러리" ? (
        <CatGallery catId={catId} location={location} />
      ) : null}

      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push({pathname:`/map/${location}/${catId}`, state: { catId }});
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
      </Button>

      <CatComment catId={catId} />
    </Template>
  );
};

export default CatDetail;
