import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div>
             <div className="navbar">
             <div className="logo">
             <h2>Barefoot Nomad</h2>
             </div>
             <div className="navlinks">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/forgetpassword">Send Email</Link></li>
                <li><Link to="/emailsuccessfulsent">Success Email</Link></li>
                <li><Link to="/newpassword">New Password</Link></li>
                </ul>
             </div>
             </div>
            </div>
        )
    }
}
export default NavBar;