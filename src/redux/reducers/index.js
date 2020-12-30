import { combineReducers } from 'redux'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import {loginReducer } from './loginReducer';
import { logoutReducer } from './logoutReducer';

const reducers = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
})

export default reducers