import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
// $FlowFixMe
import registerServiceWorker from './utils/registerServiceWorker';

import './index.css';

const root = document.getElementById('root');

if (root === null) throw new Error('Root element not found');

ReactDOM.render(<App />, root);
registerServiceWorker();
