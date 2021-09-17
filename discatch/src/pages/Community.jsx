// LIBRARY
import React from "react";

// COMPONENTS
import { CommunityCategoryCard, Template } from "../components";

// ELEMENTS
import { Grid } from "../elements/index";

// REDUX
import { history } from "../redux/configureStore";

const Community = (props) => {
  return (
    <Template props={props}>
      <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            clickEvent={()=>history.push('/community/catinfo')}
            width="60px"
            height="60px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
          <CommunityCategoryCard
            clickEvent={()=>history.push('/community/gathering')}
            width="60px"
            height="60px"
            title="동네 모임"
            subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
          />
          <CommunityCategoryCard
            clickEvent={()=>history.push('/community/sharing')}
            width="60px"
            height="60px"
            title="고양이 용품 나눔"
          />
      </Grid>
    </Template>
  );
};

export default Community;
