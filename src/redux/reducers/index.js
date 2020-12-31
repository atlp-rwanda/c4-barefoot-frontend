import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import counterReducer from './counterReducer'
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'

const reducers = combineReducers({
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
  })

export default reducers


