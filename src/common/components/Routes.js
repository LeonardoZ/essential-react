import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../pages/login/page';
import SignInPage from '../../pages/signin/page';
import LoggedPage from '../../pages/logged/page';
import HomePage from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="home" component={HomePage} />
    <Route path="signin" component={SignInPage} />
    <Route path="logged" component={LoggedPage} />
  </Route>
);
