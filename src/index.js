import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { createDefaultAppState } from './Models/appState';
import configureStore from './State/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(createDefaultAppState())}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
