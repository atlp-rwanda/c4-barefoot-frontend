import { combineReducers } from 'redux'
import { NewPasswordReducer, ResetPasswordEmailReducer } from './resetPasswordEmail';
import { fetchLocationsReducer } from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { fetchUserProfileReducer, updateUserProfileReducer, changeUserPasswordeReducer } from './userProfileReducer'
import { loginReducer } from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import { logoutReducer } from './logoutReducer';
import { CreateTravelRequestReducer } from './CreateTravelRequestReducer';
import { ViewTravelRequestReducer } from './ViewTravelRequestReducer';
import { fetchUsersReducer } from './usersReducer'
import { fetchRolesReducer } from './rolesReducer'
import { createRoles } from './createRoleReducer'
const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  fetchUserProfile: fetchUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  changeUserPassword: changeUserPasswordeReducer,
  users: fetchUsersReducer,
  roles: fetchRolesReducer,
  createRoles
})
  
export default reducers

