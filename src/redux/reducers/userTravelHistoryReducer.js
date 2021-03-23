import {FETCH_TRIP_HISTORY_SUCCESS, FETCH_TRIP_HISTORY_ERROR,FETCH_TRIP_HISTORY_PENDING, GET_SINGLE_ACC} from '../actions/userTravelHistoryAction'

const initialState = {
  pending: true,
  trips: [],
  error: null,
  acc: {}
}

export function fetchTripHistory(state = initialState, action){
  console.log("ASASASASA",action.type)
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
        acc: action.payload
      }
    default:
      return state
  } 
 

}