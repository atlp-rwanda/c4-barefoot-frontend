import { RETURNING, TRAVEL_DATES } from '../actions/CreateTravelRequestAction';
const initialState = {
    isReturning: false,
    departureDate: new Date().toLocaleDateString(),
    returnDate: new Date().toLocaleDateString()
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
        default:
            return state
    }
}