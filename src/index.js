import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';

import App from './containers/App/App.view';

import rootReducer from './reducers';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.main')
);
