// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import { CommunityCategoryCard, Template } from "../components";

// ELEMENTS
import { Grid } from "../elements/index";

// REDUX
import { history } from "../redux/configureStore";

const Community = (props) => {
  const village = useSelector((state) => state.map.keywordList[0]);
  return (
    <Template props={props}>
      <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            clickEvent={()=>history.push(`/community/${village}/catinfo`)}
            width="60px"
            height="60px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
          <CommunityCategoryCard
            clickEvent={()=>history.push(`/community/${village}/gathering`)}
            width="60px"
            height="60px"
            title="동네 모임"
            subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
          />
          <CommunityCategoryCard
            clickEvent={()=>history.push(`/community/${village}/sharing`)}
            width="60px"
            height="60px"
            title="고양이 용품 나눔"
          />
      </Grid>
    </Template>
  );
};

export default Community;
