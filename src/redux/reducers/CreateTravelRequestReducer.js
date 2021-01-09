import { RETURNING, TRAVEL_DATES, CURRENT_LOCATION, DESTINATION_LOCATION, SEARCH_LOCATIONS, SEARCH_ACCOMMODATIONS, SELECT_ACCOMMODATION, HANDLE_ERRORS, CLOSE_SNACKBAR } from '../actions/CreateTravelRequestAction';
const initialState = {
    searchLocations: [],
    currentLocation: '',
    destinationLocation: '',
    isReturning: false,
    departureDate: '',
    returnDate: '',
    searchAccommodations: [],
    selectedAccommodation:[],
    displaySelection:false,
    displaySelected: false,
    errors:'',
    success: false,
    snackbarOpen: false
}

export function CreateTravelRequestReducer (state = initialState, action) {
    switch(action.type){
        case SEARCH_LOCATIONS :
            return {
                ...state,
                searchLocations: action.payload
            }
        case CURRENT_LOCATION :
            return {
                ...state,
                currentLocation: action.payload
            }
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
        case DESTINATION_LOCATION :
            return {
                ...state,
                destinationLocation: action.payload
            }
        case SEARCH_ACCOMMODATIONS :
            return {
                ...state,
                displaySelection: action.payload
            }
        case SELECT_ACCOMMODATION :
            return {
                ...state,
                selectedAccommodation: action.payload.accommodation,
                displaySelection: action.payload.displaySelection,
                displaySelected: action.payload.displaySelected
            }
        case HANDLE_ERRORS :
            return {
                ...state,
                errors: action.payload,
                snackbarOpen: true
            }
        case CLOSE_SNACKBAR :
            return {
                ...state,
                snackbarOpen: false,
            }
        default:
            return state
    }
}