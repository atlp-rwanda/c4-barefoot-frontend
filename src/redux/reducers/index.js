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
import {fetchReviewsReducer,addRatesAndReview} from './ratingsReducer'

const reducers = combineReducers({
  logout: logoutReducer,
  login: loginReducer,
  sendEmail: ResetPasswordEmailReducer,
  signup: signupRequestReducer,
  newPassword: NewPasswordReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  fetchAccommodation:fetchAccommodationReducer,
  fetchReviews: fetchReviewsReducer,
  addReviews:addRatesAndReview,
  fetchReviews:fetchReviewsReducer,
  fetchReviews: fetchReviewsReducer,
  addReviews:addRatesAndReview,
  bookAccommodations: bookAccommodationsReducer,
  bookedAccommodations:getBookingsReducer,
  manageTravel:fetchTravelReducer,
  manageSingleTravel:fetchSingleTravelReducer,
  updateTravel:updateSingleTravelReducer,
  bookAccommodations: bookAccommodationsReducer,
  convertMoney: convertorReducer,
  fetchUserProfile: fetchUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  changeUserPassword: changeUserPasswordeReducer,
  users: UsersReducer,
  roles: RolesReducer,
  permissions: permissionsReducer,
  createRoles,
  managerReducer,
  createTravelRequest: CreateTravelRequestReducer

})

export default reducers

