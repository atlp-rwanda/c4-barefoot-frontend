import React, { Component } from "react";
import Routers from './routes/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

import history from "./history";
import { getNotifications } from "./redux/actions/notificationAction";

class App extends Component{
    componentDidMount(){
        
    }
     render() {
        return (
            <Router history={history}>  
                    <Routers/>
            </Router>
        )
    }
}
export default App;