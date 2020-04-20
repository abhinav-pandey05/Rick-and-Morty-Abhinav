import React from 'react';
import  {render } from 'react-dom';
import './index.css';
import Main from './components/Main';
// import { Router, IndexRoute, browserHistory } from 'react-router';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// console.log("Our store is :", store.getState());
render(
    <Provider store = {store}>
      <Main />
    </Provider>,
    document.getElementById('root')
);