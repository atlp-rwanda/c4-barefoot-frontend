import React, { Component } from "react";
import Routers from './routes/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

import history from "./history";

import history from "./history";

class App extends Component{
     render() {
        return (
            <Router history={history}>  
                    <Routers/>
            </Router>
        )
    }
}
export default App;