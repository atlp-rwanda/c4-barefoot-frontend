import {
    FETCH_SINGLE_ACCOMMODATION_SUCCESS, FETCH_SINGLE_ACCOMMODATION_FAILURE,
    FETCH_SINGLE_ACCOMMODATION_PENDING
} from '../actions/fetchAccommodation'

const initState = {
    pending: false,
    accommodation: {},
    error:''
}

export const fetchAccommodationReducer = (state=initState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_ACCOMMODATION_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SINGLE_ACCOMMODATION_SUCCESS:
            return {
                pending: false,
                accommodation: action.payload.singleAccommodation,
                error: ''
            }
        case FETCH_SINGLE_ACCOMMODATION_FAILURE:
            return {
                pending: false,
                accommodation: [],
                error: action.payload
            }
           
        default:
            return state
    }
}