import React, { Component } from "react";
import NavBar from './components/NavBar'
import Routers from './routes/Routers'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer'

class App extends Component{
     render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Routers/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default App;