import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'

class Home extends Component{
    render(){
        return(
            <div className="home" >
                 <Button variant="contained" color="primary">Greating</Button><br />
                Hi, There.
                <p>Guys enjoy your coding.</p>
            </div>
        )
    }
}
export default Home;