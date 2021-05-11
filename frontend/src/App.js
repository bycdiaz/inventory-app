import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Items from "./pages/Items";

function App() {
  return (
     <Switch>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/items">
        <Items />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
   </Switch>
  );
}

export default App;
