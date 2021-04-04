import ResetPasswordEmailForm from '../components/resetPassword/ResetPasswordEmailForm';
import NewPassword from '../components/resetPassword/NewPassword'
import React from 'react';
import Login from '../components/views/Login'
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import Unauthorized from '../components/views/Unauthorized'
import Profile from '../components/views/Profile';
import adminHome from '../components/views/Admin/Home';
import BookForm from '../components/bookAccommodation/form';
import requesterHome from '../components/views/Requester/Home';
import CreateRoles from '../components/views/Admin/CreateRoles';
import SetPermissions from '../components/views/Admin/SetPermissions'
import ListOfRoles from '../components/views/Admin/ListOfRoles'
import ListUsers from '../components/views/Admin/ListUsers'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import {  DefaultLayout, AuthorizedUserLayout, AdminLayout, ErrorLayout, RequesterLayout,ManagerLayout} from '../components/layouts';
import Logout from '../components/views/Logout';
// import ManagerDashboard from '../components/sideBarDrawer/ManagerDashboard';
import ManagerTravelDashboard from '../components/manageTravel/manageTravelDashboard'
import ApprovedReports from '../components/manageTravel/ApprovedReports';
import RejectedAndCanceled from '../components/manageTravel/RejectedAndCanceledReports';
import Done from '../components/manageTravel/Done';
import ProtectedRoute from './protected.route'
import AdminRoute from './adminProtected.route'
import ManagerRoute from './managerProtested.route'
import UnauthorizedRoute from './unauthorized.route'
import userProfile from '../components/views/userProfile';
import CreateTravelRequest from '../components/views/user/CreateTravelRequest';
import CreateAccomodation from '../components/views/travelManager/CreateAccomodation';
import CreateLocation from '../components/views/travelManager/CreateLocation';
import AssignUsersToManagers from '../components/assignUsersToManagers/index';

const Routes = () => {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/welcome"
        />
        <UnauthorizedRoute
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
          path="/home"
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
        <ManagerRoute
          component={ManagerTravelDashboard}
          exact
          layout={AuthorizedUserLayout}
          path="/managerTravel"
        />
        <ManagerRoute
          component={ApprovedReports}
          exact
          layout={AuthorizedUserLayout}
          path="/managerTravel/approved"
        />
        <ManagerRoute
          component={RejectedAndCanceled}
          exact
          layout={AuthorizedUserLayout}
          path="/managerTravel/canceled"
        />

        <ManagerRoute
          component={Done}
          exact
          layout={AuthorizedUserLayout}
          path="/managerTravel/done"
        />
        <ManagerRoute
            component={AssignUsersToManagers}
            exact
            layout={ManagerLayout}
            path="/assign-users-to-managers/"
        />
        
         <UnauthorizedRoute
          component={signup}
          exact
          layout={DefaultLayout}
          path="/signup"
        />
        <UnauthorizedRoute
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
        <ProtectedRoute
          component={requesterHome}
          exact
          layout={AuthorizedUserLayout}
          path="/requester"
        />
        <ProtectedRoute
          component={BookForm}
          exact
          layout={AuthorizedUserLayout}
          path="/bookAccommodation/:locationId"
        />
        <AdminRoute
          component={adminHome}
          exact
          layout={AuthorizedUserLayout}
          path="/admin"
        />
        <AdminRoute
          component = {CreateRoles}
          exact
          layout={AuthorizedUserLayout}
          path="/admin/roles"
        />
        <AdminRoute
          component={SetPermissions}
          exact
          layout={AuthorizedUserLayout}
          path="/admin/permissions"
        />
        <AdminRoute
          component={ListOfRoles}
          exact
          layout={AuthorizedUserLayout}
          path="/admin/roleslist"
        />
        <AdminRoute
          component={ListUsers}
          exact
          layout={AuthorizedUserLayout}
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
          layout={ErrorLayout}
          path="/PageNotFound"
        />
        <RouteWithLayout
          component={Unauthorized}
          exact
          layout={ErrorLayout}
          path="/unauthorized"
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

        <ProtectedRoute
          component={CreateAccomodation}
          exact
          layout={AuthorizedUserLayout}
          path="/travelManager/accommodations/create"
        />
       
        
        <ProtectedRoute
          component={CreateLocation}
          exact
          layout={AuthorizedUserLayout}
          path="/travelManager/locations/create"
        />

        <Redirect to="/PageNotFound" />
      </Switch>
  );
};

export default Routes;

        
        
        