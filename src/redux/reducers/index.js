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
import {getBookingsReducer} from './getBookingReducer'
import { bookAccommodationsReducer } from './bookAccommodationReducer'
import { convertorReducer } from './convertorReducer'
import { managerReducer } from './managersReducer'
import {fetchAccommodationReducer} from './fetchAccommodationReducer'
<<<<<<< HEAD
import {fetchReviewsReducer,addRatesAndReview} from './ratingsReducer'
=======
import {fetchReviewsReducer} from './ratingsReducer'
>>>>>>> 838b477... getting ratings from database

const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  fetchAccommodation:fetchAccommodationReducer,
<<<<<<< HEAD
  fetchReviews: fetchReviewsReducer,
  addReviews:addRatesAndReview,
=======
  fetchReviews:fetchReviewsReducer,
>>>>>>> 838b477... getting ratings from database
  bookAccommodations: bookAccommodationsReducer,
  bookedAccommodations:getBookingsReducer,
  convertMoney: convertorReducer,
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

