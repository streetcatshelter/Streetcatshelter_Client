// LIBRARY
import React from "react";

// COMPONENTS
import { CommunityCategoryCard, Template } from "../components";

// ELEMENTS
import { Grid } from "../elements/index";

// ROUTE
import { Link } from "react-router-dom";

const Community = (props) => {
  return (
    <Template props={props}>
      <Grid margin="10vh 0 0 0">
        <Link to="/community/catinfo" style={{ textDecoration: "none" }}>
          <CommunityCategoryCard
            width="60px"
            height="60px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
        </Link>
        <Link to="/community/gathering" style={{ textDecoration: "none" }}>
          <CommunityCategoryCard
            width="60px"
            height="60px"
            title="동네 모임"
            subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
          />
        </Link>
        <Link to="/community/sharing" style={{ textDecoration: "none" }}>
          <CommunityCategoryCard
            width="60px"
            height="60px"
            title="고양이 용품 나눔"
          />
        </Link>
      </Grid>
    </Template>
  );
};

export default Community;
