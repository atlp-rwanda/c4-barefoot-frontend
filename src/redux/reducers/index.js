import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';

const reducers = combineReducers({
  counter: counterReducer,
  sendEmail: ResetPasswordEmailReducer,
  newPassword: NewPasswordReducer
})

export default reducers