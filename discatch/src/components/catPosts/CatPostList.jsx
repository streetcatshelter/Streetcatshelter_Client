import React from "react";
import { Grid, Text, Image } from "../../elements";

import { history } from "../../redux/configureStore";

const CatPostList = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="70px"
        bgColor="ivory"
        display="flex"
        padding="10px 0px 0px 10px"
        margin="15px 0px"
        clickEvent={() => {
          history.push("/catdetail");
        }}
        cursor="pointer"
      >
        <Image />
        <Grid
          width="70%"
          height="70px"
          display="flex"
          flexDirection="column"
          padding="0px 0px 0px 10px"
        >
          <Grid display="flex" height="50%">
            <Text fontWeight="700" color="black" margin="0px" width="40%">
              CatName
            </Text>{" "}
            <Text fontWeight="700" color="black" margin="0px" width="50%">
              중성화: Y
            </Text>
          </Grid>
          <Grid height="60%">
            <Text margin="0px">#해쉬태그 #해쉬태그 #해쉬태그 #해쉬태그</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CatPostList;
