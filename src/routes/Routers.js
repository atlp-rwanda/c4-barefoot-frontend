
import React from 'react';
import Login from '../components/views/Login'
import Signup from '../components/views/Signup';
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import Profile from '../components/views/Profile';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout, RequesterLayout } from '../components/layouts';
import Logout from '../components/views/Logout';

const Routes = () => {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/welcome"
        />
        <RouteWithLayout
          component={Landing}
          exact
          layout={DefaultLayout}
          path="/welcome"
        />
        <RouteWithLayout
          component={Login}
          exact
          layout={DefaultLayout}
          path="/login"
        />
         <RouteWithLayout
          component={Signup}
          exact
          layout={DefaultLayout}
          path="/signup"
        />
         <RouteWithLayout
          component={Profile}
          exact
          layout={RequesterLayout}
          path="/profile"
        />
         <RouteWithLayout
          component={Logout}
          exact
          layout={RequesterLayout}
          path="/logout"
        />
        <RouteWithLayout
          component={PageNotFound}
          exact
          layout={DefaultLayout}
          path="/PageNotFound"
        />
        
        <Redirect to="/PageNotFound" />
      </Switch>
    );
  };
  
  export default Routes;

