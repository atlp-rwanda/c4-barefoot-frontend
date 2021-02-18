import { FETCH_SINGLE_TRAVEL_REQUEST_LOADING, FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS, FETCH_SINGLE_TRAVEL_REQUEST_ERROR } from "../actions/singleTravelAction";

const initialState = {
    loading:false,
    travel:[],
    error:null
}

export const fetchSingleTravelReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_SINGLE_TRAVEL_REQUEST_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                travel: action.payload
            }
        case FETCH_SINGLE_TRAVEL_REQUEST_ERROR:
            return{
                ...state,
                loading:false,
                error:action.err
            }
        default:
            return state
    }
}