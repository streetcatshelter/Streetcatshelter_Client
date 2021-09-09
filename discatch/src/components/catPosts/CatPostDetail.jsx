import React from "react";
import { Grid } from "../../elements";
import { CatPost, Gallery, Diary, CommentList } from "..";

const CatPostDetail = () => {
  return (
    <React.Fragment>
      <Grid display="flex" flexDirection="column" overflow="hidden">
        <CatPost />
        <Gallery />
        <Diary />
        <CommentList />
      </Grid>
    </React.Fragment>
  );
};

export default CatPostDetail;
