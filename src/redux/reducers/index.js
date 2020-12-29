import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'

const reducers = combineReducers({
  counter: counterReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer
})

export default reducers