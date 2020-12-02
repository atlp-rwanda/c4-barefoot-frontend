import React, { Component } from 'react'
class Signup extends Component {
    render(){
        return(
            <div className="home">
            <h3>Hi, there.</h3>
            <h5>Create your account Here!</h5>
            <form>
            <label>
                Names:
                </label><br />
                <input type="text" name="name" /><br />
                 <label></label>
                <label>
                Email:
                </label><br />
                <input type="text" name="name" /><br />
                 <label>
                password:
                </label><br />
                <input type="password" name="name" /><br />
                <button>SIGNUP</button>
            </form>
            </div>
        )
    }
}
export default Signup