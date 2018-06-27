import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate, purgeStoredState } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import { storages } from 'redux-persist/lib';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './indexReducers';
import rootEpic from './rootEpic';

// Env
const { PERSIST_ENABLED, PERSIST_PURGE, NODE_ENV } = process.env;

export default function configureStore(history: any) {
  // Common Middlewares
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  let enhancer = [];

  if (NODE_ENV === 'development') {
    const logger = createLogger({
      duration: true,
      timestamp: true,
      collapsed: (getState, action) => {
        const types = ['persist/REHYDRATE'];

        return types.includes(action.type);
      }
    });

    middlewares.push(logger);

    enhancer = compose(
      PERSIST_ENABLED === 'true' ? autoRehydrate() : f => f,
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
        ? window.__REDUX_DEVTOOLS_EXTENSION__({}) // eslint-disable-line
        : f => f
    );
  } else {
    enhancer = compose(autoRehydrate(), applyMiddleware(...middlewares));
  }

  const store = createStore(rootReducer, undefined, enhancer);
  if (PERSIST_ENABLED === 'true') {
    persistStore(store, {
      storage: storages.asyncLocalStorage,
      debounce: 500,
      blacklist: ['nav']
    });
  }

  if (PERSIST_PURGE === 'true') {
    purgeStoredState({ storage: storages.asyncLocalStorage });
  }

  return store;
}
