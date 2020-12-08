import React, { Component } from "react";
import NavBar from './components/NavBar'
import Routers from './routes/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component{
     render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Routers/>
                </div>
            </Router>
        )
    }
}
export default App;