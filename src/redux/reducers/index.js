import { combineReducers } from 'redux'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import {loginReducer } from './loginReducer';

const reducers = combineReducers({
  login: loginReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
})

export default reducers