import React, { Component } from 'react'
import { Link } from "react-router-dom"
class Login extends Component {
    render(){
        return(
            <div className="home">
            <h3>Hi, there.</h3>
            <h5>Login Here, and proceed on application</h5>
            <form>
                <label>
                Email:
                </label><br />
                <input type="text" name="name" /><br />
                 <label>
                password:
                </label><br />
                <input type="password" name="name" /><br />
                <button className="login-btn">LOGIN</button><br />
                <p className="forgot">forgot password? <Link to="/forgetpassword">Click Here</Link></p>
            </form>
            </div>
        )
    }
}
export default Login