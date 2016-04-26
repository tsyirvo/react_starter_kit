import React from 'react';
import {Provider} from 'react-redux';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import routes from '../routes/routes';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={appHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
  store: React.PropTypes.shape({
    subscribe: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    getState: React.PropTypes.func.isRequired
  })
};
