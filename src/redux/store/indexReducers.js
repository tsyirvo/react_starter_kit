import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from '../reducers/postsReducer';

const rootReducer = combineReducers({
  posts,
  routing: routerReducer
});

export default rootReducer;
