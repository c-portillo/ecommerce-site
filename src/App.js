import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

const AccessoriesPage = (props) => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/accessories' component={AccessoriesPage} />
      </Switch>
    </div>
  );
}

export default App;
