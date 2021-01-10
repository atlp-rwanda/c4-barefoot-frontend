import React from 'react';
import Login from '../components/views/Login'
import SignUp from '../components/signup';
import signup from '../components/views/Signup'
import verifyAccount from '../components/signup/verifyAccount'
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import Profile from '../components/views/Profile';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout } from '../components/layouts';
import TravelAdminDefault  from '../components/travelAdminLayoutRoute/Default';
import { createLocation } from '../components/views/admin/createLocations';
import { createAccomodations } from '../components/views/admin/createAccommodations';
import { TravelAdmin } from '../components/views/admin';
import TravelAdminRoute from '../components/travelAdminLayoutRoute';
import ListLocations from '../components/views/admin/viewLocations';
import ListAccommodation from '../components/views/admin/viewAccommodations';
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
         <RouteWithLayout
          component={Profile}
          exact
          layout={DefaultLayout}
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
        <TravelAdminRoute 
            path="/admin/travel" 
            exact
            component={ TravelAdmin }
            layout={TravelAdminDefault}
        />
        <RouteWithLayout 
            path="/admin/travel/location/create" 
            component={ createLocation }
            layout={TravelAdminDefault}
        />
        <RouteWithLayout 
            path="/admin/travel/location/view" 
            component={ ListLocations }
            layout={TravelAdminDefault}
        />
        <RouteWithLayout 
            path="/admin/travel/accommodations/create" 
            component={ createAccomodations }
            layout={TravelAdminDefault}
        />
        <RouteWithLayout 
            path="/admin/travel/accommodations/view" 
            component={ ListAccommodation }
            layout={TravelAdminDefault}
        />
        
        <Redirect to="/PageNotFound" />
      </Switch>
    );
  };
  
  export default Routes;

