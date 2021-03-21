import {FETCH_TRIP_HISTORY_SUCCESS, FETCH_TRIP_HISTORY_ERROR} from '../actions/fetchAccommodations'

const initialState = {
  pending: true,
  trips: [{
    accommodationId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc8",
    createdAt: "2021-01-05T10:55:52.538Z",
    destination: "Nairobi",
    originCity: "Kigali",
    reason: "Trippin",
    returnDate: "2021-10-10T00:00:00.000Z",
    travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    tripDate: "2020-10-10T00:00:00.000Z",
    tripId: "1a52f79e-568a-45b3-9151-4dfa40bb1217",
    updatedAt: "2021-01-05T10:55:52.538Z"
  }],
  error: null
}

export function fetchTripHistory(state = initialState, action){
  switch(action.type){
    case FETCH_TRIP_HISTORY_SUCCESS:
      return {
        ...state,
        // pending: false,
        trips: action.payload
      }
    case FETCH_TRIP_HISTORY_ERROR:
      return {
        ...state,
        // pending: false,
        error: action.error
      }
    default:
      return state
  } 
 

}