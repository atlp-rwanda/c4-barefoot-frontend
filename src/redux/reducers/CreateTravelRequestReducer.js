import {
    RETURNING, TRAVEL_DATES, CURRENT_LOCATION, DESTINATION_LOCATION,
    SEARCH_LOCATIONS, SEARCH_ACCOMMODATIONS, SELECT_ACCOMMODATION, HANDLE_ERRORS,
    CLOSE_SNACKBAR, ADD_TRAVEL_REASON, SEND_TRAVEL_REQUEST, SEND_TRAVEL_REQUEST_LOADING,
    ADD_MULTI_CITY_TRAVEL_REQUEST, REMOVE_MULTI_CITY_TRAVEL_REQUEST,
    SEARCH_ACCOMMODATIONS_LOADING, SEARCH_LOCATIONS_LOADING, OPEN_MODAL,
    CANCEL_TRAVEL_REQUEST, DESELECT_ACCOMMODATION
} from '../actions/CreateTravelRequestAction';

const initialState = {
    availableLocations: [],
    searchLocationsLoading: false,
    availableAccommodations: [],
    searchAccommodationsLoading: false,
    currentLocation: '',
    destinationLocation: '',
    departureDate: '',
    returnDate: '',
    selectedAccommodation: '',
    travelReason: '',
    // isReturning: false,
    selectedLocations: [],
    displaySelection: false,
    displaySelected: false,
    snackBarMessage: {
        open: false,
        message: null,
        severity: ''
    },
    success: false,
    sendLoading: false,

    Modal: {
        open: false,
        data: {}
    }
}

export function CreateTravelRequestReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_LOCATIONS:
            return {
                ...state,
                availableLocations: action.payload,
                searchLocationsLoading: false
            }
        case SEARCH_LOCATIONS_LOADING:
            return {
                ...state,
                searchLocationsLoading: true
            }
        case CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload
            }
        case TRAVEL_DATES:
            return {
                ...state,
                departureDate: action.payload.departureDate,
                returnDate: action.payload.returnDate
            }
        case DESTINATION_LOCATION:
            return {
                ...state,
                destinationLocation: action.payload
            }
        case SEARCH_ACCOMMODATIONS:
            return {
                ...state,
                availableAccommodations: action.payload,
                searchAccommodationsLoading: false,
                displaySelection: true
            }
        case SEARCH_ACCOMMODATIONS_LOADING:
            return {
                ...state,
                searchAccommodationsLoading: true,
                displaySelection: true
            }
        case ADD_MULTI_CITY_TRAVEL_REQUEST:
            return {
                ...state,
                selectedLocations: [...state.selectedLocations, action.payload],
                availableAccommodations: [],
                selectedAccommodation: '',
                currentLocation: action.payload.destination,
                destinationLocation: '',
                departureDate: action.payload.returnDate,
                returnDate: ''
            }
        case REMOVE_MULTI_CITY_TRAVEL_REQUEST:
            return {
                ...state,
                selectedLocations: action.payload,
            }
        case SELECT_ACCOMMODATION:
            return {
                ...state,
                selectedAccommodation: action.payload.accommodation,
                displaySelection: action.payload.displaySelection,
                displaySelected: action.payload.displaySelected
            }
        case DESELECT_ACCOMMODATION:
            return {
                ...state,
                selectedAccommodation: '',
                displaySelection: true,
                displaySelected: true
            }
        case HANDLE_ERRORS:
            return {
                ...state,
                snackBarMessage: {
                    open: true,
                    severity: 'error',
                    message: action.payload
                }
            }
        case CLOSE_SNACKBAR:
            return {
                ...state,
                snackBarMessage: {
                    open: false,
                    severity: '',
                    message: null
                },
            }
        case OPEN_MODAL:
            return {
                ...state,
                Modal: {
                    open: action.payload.open,
                    data: action.payload.data
                },
            }
        case ADD_TRAVEL_REASON:
            return {
                ...state,
                travelReason: action.payload
            }
        case SEND_TRAVEL_REQUEST_LOADING:
            return {
                ...state,
                sendLoading: true
            }
        case SEND_TRAVEL_REQUEST:
            return {
                ...state,
                success: action.payload,
                sendLoading: false,
                displaySelection: false,
                displaySelected: false,
                currentLocation: [],
                destinationLocation: [],
                departureDate: '',
                returnDate: '',
                selectedAccommodation: [],
                travelReason: '',
                snackBarMessage: {
                    open: true,
                    message: 'The travel request is successfully sent!',
                    severity: 'success'
                },
                selectedLocations: [],
            }
        case CANCEL_TRAVEL_REQUEST:
            return {
                ...state,
                currentLocation: '',
                destinationLocation: '',
                isReturning: false,
                departureDate: '',
                returnDate: '',
                availableAccommodations: [],
                selectedAccommodation: [],
                selectedLocations: [],
                displaySelection: false,
                displaySelected: false,
                travelReason: '',
            }
        default:
            return state
    }
}
