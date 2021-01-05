import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import { fetchLocationsReducer } from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { fetchtUserProfileReducer } from './userProfileReducer'

const reducers = combineReducers({
  counter: counterReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  fetchUserProfile: fetchtUserProfileReducer
})

export default reducers