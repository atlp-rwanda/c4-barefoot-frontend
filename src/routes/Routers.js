import ResetPasswordEmailForm from '../components/resetPassword/ResetPasswordEmailForm';
import NewPassword from '../components/resetPassword/NewPassword'

import React from 'react';
import Login from '../components/views/Login'
import Signup from '../components/views/Signup';
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout } from '../components/layouts';
import Profile from '../components/views/Profile';

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
          component={Signup}
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



// import React from 'react';
// import Login from '../components/views/Login'
// import Signup from '../components/views/Signup';
// import Landing from '../components/views/LandingPage'
// import PageNotFound from '../components/views/PageNotFound'
// import Profile from '../components/views/Profile';
// import { Switch, Redirect } from 'react-router-dom';
// import RouteWithLayout  from '../components/RouteWithLayout';
// import {  DefaultLayout } from '../components/layouts';
// const Routes = () => {
//     return (
//       <Switch>
//         <Redirect
//           exact
//           from="/"
//           to="/welcome"
//         />
//         <RouteWithLayout
//           component={Landing}
//           exact
//           layout={DefaultLayout}
//           path="/welcome"
//         />
//         <RouteWithLayout
//           component={Login}
//           exact
//           layout={DefaultLayout}
//           path="/login"
//         />
//          <RouteWithLayout
//           component={Signup}
//           exact
//           layout={DefaultLayout}
//           path="/signup"
//         />
//          <RouteWithLayout
//           component={Profile}
//           exact
//           layout={DefaultLayout}
//           path="/profile"
//         />
//         <RouteWithLayout
//           component={PageNotFound}
//           exact
//           layout={DefaultLayout}
//           path="/PageNotFound"
//         />
        
//         <Redirect to="/PageNotFound" />
//       </Switch>
//     );
//   };
  
//   export default Routes;

