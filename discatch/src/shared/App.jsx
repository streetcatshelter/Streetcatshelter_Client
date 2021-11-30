// LIBRARY
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

// STYLE
import theme from "../shared/style";

//COMPONENTS
import { Router, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/modules/spinner";
function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.spinner.isLoaded);
  useEffect(() => {
    dispatch(loading(true));
    setTimeout(() => {
      dispatch(loading(false));
    }, 1500);
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Spinner visible={isLoaded} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
