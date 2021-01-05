import React from 'react';
import Login from '../components/views/Login'
import Signup from '../components/views/Signup';
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound';
import UserProfile from '../components/views/userProfile';
import ChangePassword from '../components/views/changePassword';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import { DefaultLayout } from '../components/layouts';
import LoggedInUserLayout from '../components/layouts/LoggedInUser/LoggedInUser';
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
        component={UserProfile}
        exact
        layout={LoggedInUserLayout}
        path="/profile"
      />
      <RouteWithLayout
        component={ChangePassword}
        exact
        layout={LoggedInUserLayout}
        path="/changePassword"
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