import { combineReducers } from 'redux'
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import { fetchLocationsReducer } from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
// import { fetchUserReducer } from "./usersReducer";
import { logoutReducer } from './logoutReducer';
import { fetchTravelReducer } from './travelRequestReducer';
import { fetchSingleTravelReducer } from './singleTravelReducer'
import { updateSingleTravelReducer } from "./updateTravelReducer";
import { fetchUserProfileReducer, updateUserProfileReducer, changeUserPasswordeReducer } from './userProfileReducer'
import { loginReducer } from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import { CreateTravelRequestReducer } from './CreateTravelRequestReducer';
import { ViewTravelRequestReducer } from './ViewTravelRequestReducer';
import { UsersReducer } from './usersReducer'
import { RolesReducer } from './rolesReducer'
import { createRoles } from './createRoleReducer'
import { permissionsReducer } from './permissionsReducer'
import {managerReducer} from './managersReducer'
import fetchAllUsers from './getAllUsersReducer';
import fetchStatistics from './fetchStatistics';
import fetchVisitors from './fetchVisitors';

const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  // verifiedUser: fetchUserReducer,
  manageTravel:fetchTravelReducer,
  manageSingleTravel:fetchSingleTravelReducer,
  updateTravel:updateSingleTravelReducer,

  fetchUserProfile: fetchUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  changeUserPassword: changeUserPasswordeReducer,
  users: UsersReducer,
  roles: RolesReducer,
  permissions: permissionsReducer,
  createRoles,
  fetchAllUsers,
  fetchStatistics,
  fetchVisitors,
  managerReducer
  
})
  
export default reducers

