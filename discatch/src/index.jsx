import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
