import { combineReducers } from 'redux'
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { logoutReducer } from './logoutReducer';
import { fetchTravelReducer } from './travelRequestReducer';
import { fetchSingleTravelReducer } from './singleTravelReducer'
import { updateSingleTravelReducer } from "./updateTravelReducer";
import { fetchUserProfileReducer, updateUserProfileReducer, changeUserPasswordeReducer } from './userProfileReducer'
import { CreateTravelRequestReducer } from './CreateTravelRequestReducer';
import { ViewTravelRequestReducer } from './ViewTravelRequestReducer';
import { UsersReducer } from './usersReducer'
import { RolesReducer } from './rolesReducer'
import { createRoles } from './createRoleReducer'
import { permissionsReducer } from './permissionsReducer'
import {managerReducer} from './managersReducer'

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
  managerReducer
  
})
  
export default reducers


