import { UPDATE_TRAVEL_REQUEST_LOADING, UPDATE_TRAVEL_REQUEST_SUCCESS, UPDATE_TRAVEL_REQUEST_ERROR, UPDATE_TRAVEL_REQUEST_CLEAR } from "../actions/updateTravelRequestAction";

const initialState = {
    loading:false,
    travel:null,
    error:null
}

export const updateSingleTravelReducer = (state=initialState, action) => {
    switch (action.type){
        case UPDATE_TRAVEL_REQUEST_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_TRAVEL_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                travel: action.payload
            }
        case UPDATE_TRAVEL_REQUEST_ERROR:
            return{
                ...state,
                loading:false,
                error:action.error
            }

        case UPDATE_TRAVEL_REQUEST_CLEAR:
            return initialState
            
        default:
            return state
    }
}