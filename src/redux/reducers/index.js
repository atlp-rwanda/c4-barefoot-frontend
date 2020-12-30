import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'

const reducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  signup: signupRequestReducer
})

export default reducers