import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import {loginReducer } from './loginReducer';

const reducers = combineReducers({
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
  })

export default reducers


