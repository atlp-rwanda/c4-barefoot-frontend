import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from '../components/Home'
import Login from '../components/Login'
import verifyAccount from '../components/signup/verifyAccount';
import SignUp from '../components/signup';

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/accountVerification/:token" component={ verifyAccount }/>
                <Route path="/accountVerification/" component={ verifyAccount }/>
            </Switch>
        )
    }
}
export default Routes