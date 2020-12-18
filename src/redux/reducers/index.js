import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import {loginReducer} from './loginReducer'

const reducers = combineReducers({
  counter: counterReducer,
  login: loginReducer
})

export default reducers