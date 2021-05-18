import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StandardLayout from './layouts/Standard';
import Landing from './pages/Landing';
import Categories from './pages/Categories';
import CategoryItems from './pages/CategoryItems';
import AllItems from './pages/AllItems';

function App() {
  return (
    <StandardLayout title={'Inventory App'}>
      <Switch>
        <Route path='/allitems'>
            <AllItems />
        </Route>
        <Route path='/categories/:category'>
          <CategoryItems />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
    </Switch>
   </StandardLayout>
  );
}

export default App;
