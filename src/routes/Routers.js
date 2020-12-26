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