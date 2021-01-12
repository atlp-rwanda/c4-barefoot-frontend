import React from 'react';
import Login from '../components/views/Login'
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import Profile from '../components/views/Profile';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout } from '../components/layouts';
import RequesterDefault  from '../components/RequesterLayoutRoute/Default';
import CreateTravelRequest from '../components/views/user/CreateTravelRequest';
import ViewTravelRequest from '../components/views/user/ViewTravelRequest';
import RequesterRoute from '../components/RequesterLayoutRoute';
import Logout from '../components/views/Logout';
import DirectReports from '../components/views/user/DirectReports';

// import { redirectUser, toBeRedirected } from '../../../services/userInfo';

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
        <RequesterRoute
          component={Logout}
          exact
          layout={RequesterDefault}
          path="/logout"
        />
         <RequesterRoute
          component={Profile}
          exact
          layout={RequesterDefault}
          path="/profile"
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
            component={ verifyAccount }
            layout={DefaultLayout}
        />
        <RouteWithLayout 
            path="/user/verification/" 
            component={ verifyAccount }
            layout={DefaultLayout}
        />
        <RequesterRoute 
            path="/requester/create-travel-request" 
            exact
            component={ CreateTravelRequest }
            layout={RequesterDefault}
        />
        <RequesterRoute 
            path="/requester/view-travel-requests" 
            exact
            component={ ViewTravelRequest }
            layout={RequesterDefault}
        />
        <RequesterRoute 
            path="/manager/direct-reports" 
            exact
            component={ DirectReports }
            layout={RequesterDefault}
        />
        
        <Redirect to="/PageNotFound" />
      </Switch>
    );
  };
  
  export default Routes;

