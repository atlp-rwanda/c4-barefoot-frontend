import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from '@material-ui/core/styles'
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import 'date-fns';

import theme from './theme'
import './App.css'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);