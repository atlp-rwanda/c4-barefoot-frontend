import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup';
import UserProfile from '../components/userProfile/UserProfile';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/update" component={UserProfile} />
            </Switch>
        )
    }
}
export default Routes