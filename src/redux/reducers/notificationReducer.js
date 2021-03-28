import { GETNOTIFICATONS_ERROR, GETNOTIFICATONS_SUCCESS,  LOADING, READNOTIFICATION, READ_TRAVELREQUEST_INFO } from '../actions/notificationAction';

export const initialState = {
    notifications: [],
    error: null,
    pending: false,
    notification: {},
    travelRequest: { 
            
        }
    
}

export const notificationReducer = (state = initialState, action)=>{
    switch(action.type) {
        case GETNOTIFICATONS_ERROR:
            return {
                ...state,
                error: action.payload

            }
        case LOADING:
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
        
        case READ_TRAVELREQUEST_INFO:
            return {
                ...state,
                travelRequest: action.payload
            }
        default:
            return state
    }
}