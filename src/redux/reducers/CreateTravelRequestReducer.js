import { RETURNING, TRAVEL_DATES, CURRENT_LOCATION, DESTINATION_LOCATION, SEARCH_LOCATIONS, SEARCH_ACCOMMODATIONS, SELECT_ACCOMMODATION, HANDLE_ERRORS, CLOSE_SNACKBAR, ADD_TRAVEL_REASON, SEND_TRAVEL_REQUEST, SEND_TRAVEL_REQUEST_LOADING } from '../actions/CreateTravelRequestAction';
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
    snackBarMessage:{
        open: false,
        message: null,
        severity: ''
    },
    success: false,
    sendLoading:false,
    travelReason: ''
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
                searchAccommodations: action.payload,
                displaySelection: true
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
                snackBarMessage:{
                    open: true,
                    severity: 'error',
                    message: action.payload
                },
            }
        case CLOSE_SNACKBAR :
            return {
                ...state,
                snackBarMessage:{
                    open: false,
                    severity:'',
                    message: null
                },
            }
        case ADD_TRAVEL_REASON :
            return {
                ...state,
                travelReason: action.payload
            }
        case SEND_TRAVEL_REQUEST_LOADING :
            return {
                ...state,
                sendLoading: true
            }
        case SEND_TRAVEL_REQUEST :
            return {
                ...state,
                success: action.payload,
                sendLoading: false,
                displaySelection: false,
                displaySelected: false,
                currentLocation: '',
                destinationLocation: '',
                departureDate: '',
                returnDate: '',
                isReturning:false,
                selectedAccommodation:[],
                travelReason: '',
                snackBarMessage:{
                    open: true,
                    message: action.payload,
                    severity: 'success'
                }
            }
        default:
            return state
    }
}