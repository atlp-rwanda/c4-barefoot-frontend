import { GETNOTIFICATONS_ERROR, GETNOTIFICATONS_SUCCESS, GETNOTIFICATONS_PENDING, READNOTIFICATION } from '../actions/notificationAction';
const initialState = {
    notifications: [],
    error: null,
    pending: false,
    notification: {}
}

export const notificationReducer = (state = initialState, action)=>{
    switch(action.type) {
        case GETNOTIFICATONS_ERROR:
            return {
                ...state,
                error: action.payload

            }
        case GETNOTIFICATONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GETNOTIFICATONS_SUCCESS:
            return {
                ...state,
                pending: false,
                notifications : action.payload
            }
        case READNOTIFICATION: 
        console.log(action.payload)
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state
    }
}