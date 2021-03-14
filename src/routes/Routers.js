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
// import ManagerDashboard from '../components/sideBarDrawer/ManagerDashboard';
import ManagerTravelDashboard from '../components/manageTravel/manageTravelDashboard'
import ApprovedReports from '../components/manageTravel/ApprovedReports';
import RejectedAndCanceled from '../components/manageTravel/RejectedAndCanceledReports';
import Done from '../components/manageTravel/Done';
import ProtectedRoute from './protected.route'
import userProfile from '../components/views/userProfile';
import CreateTravelRequest from '../components/views/user/CreateTravelRequest';
import CreateAccomodation from '../components/views/travelManager/CreateAccomodation';

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
        component={userProfile}
        exact
        layout={AuthorizedUserLayout}
        path="/userprofile"
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
        
        <ProtectedRoute
          component={CreateAccomodation}
          exact
          layout={AuthorizedUserLayout}
          path="/travelManager/createAccomodation"
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
        <ProtectedRoute
          component={adminHome}
          exact
          layout={AdminLayout}
          path="/admin"
        />
        <ProtectedRoute
          component={requesterHome}
          exact
          layout={RequesterLayout}
          path="/requester"
        />
        <ProtectedRoute
          component={BookForm}
          exact
          layout={RequesterLayout}
          path="/bookAccommodation/:locationId"
        />
        <RouteWithLayout
          component = {CreateRoles}
          exact
          layout={AdminLayout}
          path="/admin/roles"
        />
        <RouteWithLayout
          component={SetPermissions}
          exact
          layout={AdminLayout}
          path="/admin/permissions"
        />
        <RouteWithLayout
          component={ListOfRoles}
          exact
          layout={AdminLayout}
          path="/admin/roleslist"
        />
        <RouteWithLayout
          component={ListUsers}
          exact
          layout={AdminLayout}
          path="/admin/users"
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
        <ProtectedRoute
          exact
          path="/requester/create-travel-request"
          component={CreateTravelRequest}
          layout={AuthorizedUserLayout}
        />

        <Redirect to="/PageNotFound" />
      </Switch>
  );
};

export default Routes;
