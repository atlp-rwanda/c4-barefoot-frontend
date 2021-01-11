import { CLOSE_SNACKBAR } from '../actions/CreateTravelRequestAction';
import { FETCH_TRAVEL_REQUEST_LOADING, FETCH_TRAVEL_REQUEST_FAIL,FETCH_TRAVEL_REQUEST_SUCCESS } from '../actions/ViewTravelRequestAction';

const initialState = {
    travelRquests: [],
    fetchLoading:false,
    snackBarMessage:{
        open: false,
        message: null,
        severity: ''
    }
}

export const ViewTravelRequestReducer = (state= initialState, action) =>{
    switch(action.type){
        case FETCH_TRAVEL_REQUEST_LOADING :
            return {
                ...state,
                fetchLoading: true 
            }
        case FETCH_TRAVEL_REQUEST_SUCCESS :
            return {
                ...state,
                travelRequest: action.payload,
            }
        case FETCH_TRAVEL_REQUEST_FAIL :
            return {
                ...state,
                snackBarMessage:{
                    open: true,
                    message: action.payload,
                    severity: 'error'
                }
            }
        case CLOSE_SNACKBAR :
            return {
                ...state,
                snackBarMessage:{
                    open: false,
                    message: null,
                    severity: ''
                }
            }
        default:
            return state
    }
}