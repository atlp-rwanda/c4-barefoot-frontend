import React, { Component } from "react";
import Navbar from './components/NavBar'
import Routers from './routes/Routers'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
class App extends Component{
     render() {
        return (
            <Router>
            <div className="container">
               <Navbar />
                <Routers /> 
            </div>
            </Router>
        )
    }
}
export default App;