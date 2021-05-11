import React from "react";
import { Switch, Route } from "react-router-dom";

import StandardLayout from "./layouts/Standard";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Items from "./pages/Items";

function App() {
  return (
    <StandardLayout title={"Inventory App"}>
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
   </StandardLayout>
  );
}

export default App;
