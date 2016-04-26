import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import {configureStore} from './store/configure-store';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.body.appendChild(document.createElement('div'))
  );
};

// store.subscribe(render);
render();
