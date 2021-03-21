import {FETCH_TRIP_HISTORY_SUCCESS, FETCH_TRIP_HISTORY_ERROR} from '../actions/fetchAccommodations'

const initialState = {
  pending: true,
  trips: [],
  error: null
}

export function fetchTripHistory(state = initialState, action){
  switch(action.type){
    case FETCH_TRIP_HISTORY_SUCCESS:
      return {
        ...state,
        pending: false,
        trips: action.payload
      }
    case FETCH_TRIP_HISTORY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  } 
 

}