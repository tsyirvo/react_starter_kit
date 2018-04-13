// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from '../routes/routes';
import configureStore from '../redux/store/configStore';
import theme from '../styles/appStyles';

const appHistory = createHistory();
const store = configureStore(appHistory);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={appHistory}>
          <Route path="/" component={Routes} />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
