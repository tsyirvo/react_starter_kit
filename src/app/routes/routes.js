import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/app';
import About from '../components/about';
import Home from '../components/home';
import RestaurantList from '../components/restaurants/restaurant-list';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/restaurants' component={RestaurantList}/>
    <Route path='/about' component={About}/>
  </Route>
);
