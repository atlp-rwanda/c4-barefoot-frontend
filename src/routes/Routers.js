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
import BookedAccommodations from '../components/rateAndReviewAccommodation/bookedAccommodations';
import BookForm from '../components/bookAccommodation/form';
import requesterHome from '../components/views/Requester/Home';
import CreateRoles from '../components/views/Admin/CreateRoles';
import SetPermissions from '../components/views/Admin/SetPermissions'
import ListOfRoles from '../components/views/Admin/ListOfRoles'
import ListUsers from '../components/views/Admin/ListUsers'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../components/RouteWithLayout';
import { DefaultLayout, AuthorizedUserLayout, AdminLayout, ErrorLayout, RequesterLayout } from '../components/layouts';
import Logout from '../components/views/Logout';
// import ManagerDashboard from '../components/sideBarDrawer/ManagerDashboard';
import ManagerTravelDashboard from '../components/manageTravel/manageTravelDashboard'
import ApprovedReports from '../components/manageTravel/ApprovedReports';
import RejectedAndCanceled from '../components/manageTravel/RejectedAndCanceledReports';
import Done from '../components/manageTravel/Done';
import ProtectedRoute from './protected.route'
import Ratings from '../components/rateAndReviewAccommodation/rateAccommodation'
import Reviews from '../components/rateAndReviewAccommodation/reviews'


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
        component={Ratings}
        exact
        layout={AuthorizedUserLayout}
        path="/review/:id"
      />
      <ProtectedRoute
        component={Reviews}
        exact
        layout={AuthorizedUserLayout}
        path="/reviews/:id"
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
        component={BookedAccommodations}
        exact
        layout={RequesterLayout}
        path="/bookedAccommodations"
        component={BookForm}
        exact
        layout={RequesterLayout}
        path="/requester/bookAccommodation/:locationId"
      />
      <RouteWithLayout
        component={CreateRoles}
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
