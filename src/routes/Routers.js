import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup';
import ResetPasswordEmailForm from '../components/resetPassword/ResetPasswordEmailForm';
import SuccessFulEmailSent from '../components/resetPassword/SuccessfulEmailSent';
import NewPassword from '../components/resetPassword/NewPassword'

class Routes extends Component {
    render(){
 
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route path="/forgetpassword" component={ResetPasswordEmailForm}/>
                <Route path="/emailsuccessfulsent" component={SuccessFulEmailSent}/>
                {/* <Route path="/user/reset-password?" component={NewPassword}/> */}
                <Route path="/user/reset-password" component={NewPassword}/>
            </Switch>
        )
    }
}
export default Routes

import React from 'react';
import Login from '../components/views/Login'
import Signup from '../components/views/Signup';
import Landing from '../components/views/LandingPage'
import PageNotFound from '../components/views/PageNotFound'
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout  from '../components/RouteWithLayout';
import {  DefaultLayout } from '../components/layouts';
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

