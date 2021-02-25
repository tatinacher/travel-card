import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router";

import { Country, Main } from "./pages";

export const App = () => (
  <>
    <Switch>
      <Route path="/country/:id">
        <Country />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
    <GlobalStyle />
  </>
);

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    }
`;
