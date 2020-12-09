import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import Landing from '../components/LandingPage'
class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={ Landing }/>
                <Route path="/login" component={ Login}/>
                <Route path="/signup" component={ Signup }/>
            </Switch>
        )
    }
}
export default Routes