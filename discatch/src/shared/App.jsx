// LIBRARY
import React from "react";
import { ThemeProvider } from "styled-components";
// STYLE
import theme from "../shared/style";
import { Grid } from "../elements";

//COMPONENTS
import { Header, Menu, Router } from "../components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid display="flex" flexDirection="column" margin="15% 0">
        <Router />
      </Grid>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
