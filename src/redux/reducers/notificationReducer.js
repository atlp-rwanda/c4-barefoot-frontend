import { request } from 'express';
import { GETNOTIFICATONS_ERROR, GETNOTIFICATONS_SUCCESS,  LOADING, READNOTIFICATION, READ_TRAVELREQUEST_INFO } from '../actions/notificationAction';
const initialState = {
    notifications: [],
    error: null,
    pending: false,
    notification: {},
    travelRequest: { 
            
            "travelId": "dbd111f6-224b-44a5-bf1a-e7ac6f01bf36",
            "managerId": "fb94de4d-47ff-4079-89e8-b0186c0a3be8",
            "userId": "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
            "status": "pending",
            "createdAt": "2021-03-21T14:57:09.559Z",
            "updatedAt": "2021-03-21T14:57:09.562Z",
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
        case READNOTIFICATION: 
        console.log(action.payload)
            return {
                ...state,
                notification: action.payload
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