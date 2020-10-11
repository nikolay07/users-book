import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditFields from "./EditFields";
import PageNotFound from "./PageNotFound";
import UsersBook from "./UsersBook";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <UsersBook />
      </Route>
      <Route path="/edit">
        <EditFields />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
