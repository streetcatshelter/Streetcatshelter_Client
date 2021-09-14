import React from "react";
import { MyPageCat, MyWork, Notice } from "..";
import { Grid } from "../../elements";

const MyPageDetail = () => {
  return (
    <Grid display="flex">
      <MyPageCat />
      <MyWork />
      <Notice />
    </Grid>
  );
};

export default MyPageDetail;
