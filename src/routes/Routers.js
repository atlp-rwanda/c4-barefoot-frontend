import ResetPasswordEmailForm from '../components/resetPassword/ResetPasswordEmailForm';
import NewPassword from '../components/resetPassword/NewPassword'

import React from 'react';
import Login from '../components/views/Login'
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import Profile from '../components/views/Profile';
import { DefaultLayout, AuthorizedUserLayout } from '../components/layouts';
import Logout from '../components/views/Logout';
import UserProfile from '../components/views/userProfile';
import ChangePassword from '../components/views/changePassword';
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
        component={signup}
        exact
        layout={DefaultLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={ResetPasswordEmailForm}
        exact
        layout={DefaultLayout}
        path="/forgetpassword"
      />
      <RouteWithLayout
        component={NewPassword}
        exact
        layout={DefaultLayout}
        path="/user/reset-password"
      />
      <RouteWithLayout
        component={Logout}
        exact
        layout={AuthorizedUserLayout}
        path="/logout"
      />
      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={DefaultLayout}
        path="/PageNotFound"
      />
      <RouteWithLayout
        path="/signup"
        component={signup}
        layout={DefaultLayout}
      />
      <RouteWithLayout
        path="/user/verification/:token"
        component={verifyAccount}
        layout={DefaultLayout}
      />
      <RouteWithLayout
        path="/user/verification/"
        component={verifyAccount}
        layout={DefaultLayout}
      />

      <Redirect to="/PageNotFound" />
    </Switch>
  );
};

export default Routes;
