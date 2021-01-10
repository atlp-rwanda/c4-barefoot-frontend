import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from "redux-form";
import {loginReducer} from './loginReducer'
import { signupRequestReducer } from './signupReducer'
import {fetchLocationsReducer} from './locationsReducer'
import { fetchAccommodationsReducer } from './accommodationsReducer'
import { createLocationReducer } from './createLocationReduce';
import { createAccommodationReducer } from './createAccommodationReducer';
import { deleteLocationReducer } from './deleteLocationReducer'
import { deleteAccommodation } from '../actions/deleteLocationAction';
import { updateLocation } from '../actions/createLocationAction';
import { updateAccommodation } from '../actions/createAccommodationAction';

const reducers = combineReducers({
  login: loginReducer,
  signup: signupRequestReducer,
  fetchLocations: fetchLocationsReducer,
  fetchAccommodations: fetchAccommodationsReducer,
  createLocation: createLocationReducer,
  createAccommodation: createAccommodationReducer,
  deleteLocation: deleteLocationReducer,
  deleteAccommodation: deleteAccommodation,
  updateLocation: updateLocation,
  updateAccommodation: updateAccommodation,
  form: reduxFormReducer,  
})

export default reducers