// LIBRARY
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// STYLE
import theme from "../shared/style";

//COMPONENTS
import { Header, Menu } from "../components";

// PAGES
import {
  Home,
  test,
  CatInfoWrite,
  CatDetailInfoWrite,
  CatDetail,
  CommunityWrite,
  CommunityDetail,
  Community,
  NotFound,
} from "../pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catinfowrite" exact component={CatInfoWrite} />
        <Route
          path="/catdetailinfowrite"
          exact
          component={CatDetailInfoWrite}
        />
        <Route path="/catdetail" exact component={CatDetail} />
        <Route path="/communitywrite" exact component={CommunityWrite} />
        <Route path="/communitydetail" exact component={CommunityDetail} />
        <Route path="/community" exact component={Community} />
        <Route path="/test" exact component={test} />
        <Route path={"*"} exact component={NotFound} />
      </Switch>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
