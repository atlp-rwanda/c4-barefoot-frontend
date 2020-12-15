
import React from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import Landing from '../components/LandingPage'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout } from '../components/layouts';
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
        
        <Redirect to="/welcome" />
      </Switch>
    );
  };
  
  export default Routes;

