import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducer from './reducers/reducers';

import './index.css';
import { App } from './App';

const store = createStore(reducer);

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
    <Router>
      <AppProvider />
    </Router>,
    document.getElementById('root'));
