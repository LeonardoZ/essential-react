/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// Routes
import Routes from './common/components/Routes';

// Reducers
import reducers from './common/reducers';

// Base styling
import './common/base.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
   <Provider store={createStoreWithMiddleware(reducers)}>
     <Router history={browserHistory}>
       {Routes}
     </Router>
   </Provider>
), document.getElementById(DOM_APP_EL_ID));

