import React from "react";

/* == components*/
import { Header, Menu } from "./";

/* == Custom - Elements*/
import { Grid } from "../elements";

const Template = (props) => {
  const path = props.props.match.path;
  return (
    <div>
      <Header path={path} />
      <Grid display="flex" flexDirection="column" margin="15% 0">
        {props.children}
      </Grid>
      <Menu />
    </div>
  );
};

export default Template;
