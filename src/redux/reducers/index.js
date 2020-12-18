import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import {fetchLocations} from './locationsReducer'
import { fetchAccommodations } from './accommodationsReducer'

const reducers = combineReducers({
  counter: counterReducer,
  fetchLocations: fetchLocations,
  fetchAccommodations: fetchAccommodations
})

export default reducers