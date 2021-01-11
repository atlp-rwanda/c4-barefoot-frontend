import { combineReducers } from 'redux'
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { logoutReducer } from './logoutReducer';

const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
  })

export default reducers


