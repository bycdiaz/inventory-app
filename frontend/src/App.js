import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StandardLayout from './layouts/Standard';
import Landing from './pages/Landing';
import Categories from './pages/Categories';
import CategoryItems from './pages/CategoryItems';
import AllItems from './pages/AllItems';
import Item from './pages/Item';
import EditItem from './pages/EditItem';

function App() {
  return (
    <StandardLayout title={'Inventory App'}>
      <Switch>
        <Route path='/items/:itemId/edit'>
            <EditItem />
        </Route>
        <Route path='/items/:itemId'>
            <Item />
        </Route>
        <Route path='/items'>
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
