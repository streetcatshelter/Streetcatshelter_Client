// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// STYLE
import theme from '../shared/style';

//COMPONENTS
import Header from '../components/Header';
import Menu from '../components/Menu';

// PAGES
import Home from '../pages/Home';
import CatInfoWrite from '../pages/CatInfoWrite';
import CatDetailInfoWrite from '../pages/CatDetailInfoWrite';
import CatDetail from '../pages/CatDetail';
import CommunityWrite from '../pages/CommunityWrite';
import CommunityDetail from '../pages/CommunityDetail';
import Community from '../pages/Community';
import test from '../pages/test';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/catinfowrite" exact component={CatInfoWrite} />
      <Route path="/catdetailinfowrite" exact component={CatDetailInfoWrite} />
      <Route path="/catdetail" exact component={CatDetail} />
      <Route path="/communitywrite" exact component={CommunityWrite} />
      <Route path="/communitydetail" exact component={CommunityDetail} />
      <Route path="/community" exact component={Community} />
      <Route path="/test" exact component={test} />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
