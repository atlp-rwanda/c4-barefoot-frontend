import { RETURNING, TRAVEL_DATES, CURRENT_LOCATION, DESTINATION_LOCATION, SEARCH_LOCATIONS, SEARCH_ACCOMMODATIONS } from '../actions/CreateTravelRequestAction';
const initialState = {
    isReturning: false,
    departureDate: '',
    returnDate: '',
    searchLocations: [],
    currentLocation: '',
    destinationLocation: '',
    searchAccommodations: []
}

export function CreateTravelRequestReducer (state = initialState, action) {
    switch(action.type){
        case TRAVEL_DATES :
            return {
                ...state,
                departureDate: action.payload.departureDate,
                returnDate: action.payload.returnDate
            }
        case RETURNING :
            return {
                ...state,
                isReturning: action.payload
            }
        case CURRENT_LOCATION :
            return {
                ...state,
                currentLocation: action.payload
            }
        case DESTINATION_LOCATION :
            return {
                ...state,
                destinationLocation: action.payload
            }
        case SEARCH_LOCATIONS :
            return {
                ...state,
                searchLocations: action.payload
            }
        case SEARCH_ACCOMMODATIONS :
            return {
                ...state,
                searchAccommodations: action.payload
            }
        default:
            return state
    }
}