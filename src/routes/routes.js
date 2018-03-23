import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { Home, Posts } from '../pages';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  </div>
);

export default Main;
