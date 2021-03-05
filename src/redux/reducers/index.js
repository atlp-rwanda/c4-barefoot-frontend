import { combineReducers } from 'redux'
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { logoutReducer } from './logoutReducer';
import { fetchAllManagers, fetchVerifiedUsers } from './assignUserReducers';
import addAssignActionToQueue from './addAssignActionToQueue';

const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  fetchVerifiedUsers: fetchVerifiedUsers,
  fetchAllManagers: fetchAllManagers,
  addAssignActionToQueue: addAssignActionToQueue
  });

export default reducers;
