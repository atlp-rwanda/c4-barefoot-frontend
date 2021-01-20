import React from 'react';
import Login from '../components/views/Login'
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import Profile from '../components/views/Profile';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
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
      {/*   <RouteWithLayout
        component={Profile}
        exact
        layout={AuthorizedUserLayout}
        path="/profile"
      /> */}
      <RouteWithLayout
        component={Logout}
        exact
        layout={AuthorizedUserLayout}
        path="/logout"
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
