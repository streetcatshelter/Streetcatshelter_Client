// LIBRARY
import React, { useState, useEffect } from "react";
import { css } from "styled-components";

// STYLE
import { flexBox } from "../shared/style";

// COMPONENTS
import {
  Template,
  CatCalendar,
  CatDiary,
  CatGallery,
  CommentList,
  CatPost,
} from "../components";

// ELEMENTS
import { Button, Grid } from "../elements";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { __getCatInfo } from "../redux/modules/cat";
import { __getComment } from "../redux/modules/comment";
const CatDetail = (props) => {
  const dispatch = useDispatch();
  const location = props.location.pathname.split("/")[2];
  const catId = props.match.params.catId;
  const cat = useSelector((state) => state.cat.catinfo);
  const commentList = useSelector((state) => state.comment.list);
  const [menu, setMenu] = useState("캘린더");
  useEffect(() => {
    dispatch(__getCatInfo(catId));
  }, [catId, dispatch]);

  useEffect(() => {
    dispatch(__getComment(catId));
  }, [catId, commentList.length, dispatch]);

  return (
    <Template props={props}>
      <CatPost cat={cat} location={location} path="detail" />
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
          history.push(`/catdetailinfowrite/${catId}`);
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
      </Button>

      <CommentList props={commentList} path="CatDetail" catId={catId} />
    </Template>
  );
};

export default CatDetail;
