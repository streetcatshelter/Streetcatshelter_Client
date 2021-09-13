// LIBRARY
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// STYLE
import theme from "../shared/style";

import { Grid } from "../elements";

//COMPONENTS
import { Header, Menu } from "../components";

// PAGES
import {
  Home,
  test,
  CatInfoWrite,
  CatDetailInfoWrite,
  CatDetail,
  CommunityPostWrite,
  CommunityPostEdit,
  CommunityPostDetail,
  CommunityDetail,
  Community,
  NotFound,
  Slider,
  UserInfoWrite,
} from "../pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid display="flex" flexDirection="column" margin="15% 0">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/slider" exact component={Slider} />
          <Route path="/userinfowrite" exact component={UserInfoWrite} />
          <Route path="/catinfowrite" exact component={CatInfoWrite} />
          <Route
            path="/catdetailinfowrite"
            exact
            component={CatDetailInfoWrite}
          />
          <Route path="/catdetail" exact component={CatDetail} />
          <Route
            path="/communitypostwrite"
            exact
            component={CommunityPostWrite}
          />
          <Route
            path="/communitypostedit"
            exact
            component={CommunityPostEdit}
          />
          <Route path="/community/catinfo" exact component={CommunityDetail} />
          <Route
            path="/community/gathering"
            exact
            component={CommunityDetail}
          />
          <Route path="/community/sharing" exact component={CommunityDetail} />
          <Route
            path="/communitypostdetail"
            exact
            component={CommunityPostDetail}
          />
          <Route path="/community" exact component={Community} />
          <Route path="/test" exact component={test} />
          <Route path={"*"} exact component={NotFound} />
        </Switch>
      </Grid>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
