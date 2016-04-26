import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers';

// export default function(data) {
//   const reducer = combineReducers(reducers);
//   const finalCreateStore = applyMiddleware(thunk)(createStore);
//   const store = finalCreateStore(reducer, data);
//
//   return store;
// }

export function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const store = createStore(reducer, initialState, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

  return store;
}
