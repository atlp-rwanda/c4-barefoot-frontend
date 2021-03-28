import {FETCH_TRIP_HISTORY_SUCCESS, FETCH_TRIP_HISTORY_ERROR,FETCH_TRIP_HISTORY_PENDING, GET_SINGLE_ACC, GET_LOCATIONS_TRAVELLED} from '../actions/userTravelHistoryAction'

const initialState = {
  pending: false,
  trips: [],
  error: null,
  acc: {},
  locations: {},
}

export function fetchTripHistory(state = initialState, action){
  switch(action.type){
    case FETCH_TRIP_HISTORY_PENDING:
      return {
        ...state,
        pending: true,
        
      }
    case FETCH_TRIP_HISTORY_SUCCESS:
      return {
        ...state,
        pending: false,
        trips: action.payload
      }
    case GET_SINGLE_ACC:
      return {
        ...state,
        pending:false,
        acc: action.payload
      }
    case GET_LOCATIONS_TRAVELLED:
      return {
        ...state,
        pending:false,
        locations: action.payload
      }
    default:
      return state
  } 
 

}