import ResetPasswordEmailForm from '../components/resetPassword/ResetPasswordEmailForm';
import NewPassword from '../components/resetPassword/NewPassword'
import React from 'react';
import Login from '../components/views/Login'
import SignUp from '../components/signup';
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import Profile from '../components/views/Profile';
import {  DefaultLayout, AuthorizedUserLayout, ManagerLayout } from '../components/layouts';
import Logout from '../components/views/Logout';
// import ManagerDashboard from '../components/sideBarDrawer/ManagerDashboard';
import ManagerTravelDashboard from '../components/manageTravel/manageTravelDashboard'
import ApprovedReports from '../components/manageTravel/ApprovedReports';
import RejectedAndCanceled from '../components/manageTravel/RejectedAndCanceledReports';
import Done from '../components/manageTravel/Done';
import ProtectedRoute from './protected.route'
import Notification from '../components/Notications'

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
        <ProtectedRoute
          component={Profile}
          exact
          layout={AuthorizedUserLayout}
          path="/profile"
        />
        <ProtectedRoute
          component={Notification}
          exact
          layout={AuthorizedUserLayout}
          path="/notification/:id"
        />
        {/* <RouteWithLayout
          component={ManagerDashboard}
          exact
          layout={ManagerLayout}
          path="/managerDashboard"
        /> */}
        <RouteWithLayout
          component={ManagerTravelDashboard}
          exact
          layout={ManagerLayout}
          path="/managerTravel"
        />
        <RouteWithLayout
          component={ApprovedReports}
          exact
          layout={ManagerLayout}
          path="/managerTravel/approved"
        />
        <RouteWithLayout
          component={RejectedAndCanceled}
          exact
          layout={ManagerLayout}
          path="/managerTravel/canceled"
        />

        <RouteWithLayout
          component={Done}
          exact
          layout={ManagerLayout}
          path="/managerTravel/done"
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
          layout={AuthorizedUserLayout}
          path="/forgetpassword"
        />
        <RouteWithLayout
          component={NewPassword}
          exact
          layout={AuthorizedUserLayout}
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
            component={ verifyAccount }
            layout={DefaultLayout}
        />
        <RouteWithLayout 
            path="/user/verification/" 
            component={ verifyAccount }
            layout={DefaultLayout}
        />
        
        <Redirect to="/PageNotFound" />
      </Switch>
    );
  };
  
  export default Routes;
