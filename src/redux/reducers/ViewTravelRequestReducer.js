import { CLOSE_SNACKBAR } from '../actions/CreateTravelRequestAction';
import { FETCH_TRAVEL_REQUEST_LOADING, FETCH_TRAVEL_REQUEST_FAIL, FETCH_TRAVEL_REQUEST_SUCCESS, STATUS_FILTERING } from '../actions/ViewTravelRequestAction';

const initialState = {
    travelRequests: [],
    fetchLoading: false,
    status: 'pending',
    snackBarMessage: {
        open: false,
        message: null,
        severity: ''
    }
}

export const ViewTravelRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRAVEL_REQUEST_LOADING:
            return {
                ...state,
                fetchLoading: true
            }
        case FETCH_TRAVEL_REQUEST_SUCCESS:
            return {
                ...state,
                travelRequests: action.payload,
                fetchLoading: false,
            }
        case FETCH_TRAVEL_REQUEST_FAIL:
            return {
                ...state,
                snackBarMessage: {
                    open: true,
                    message: action.payload,
                    severity: 'error'
                }
            }
        case CLOSE_SNACKBAR:
            return {
                ...state,
                snackBarMessage: {
                    open: false,
                    message: null,
                    severity: ''
                }
            }
        case STATUS_FILTERING:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state
    }
}