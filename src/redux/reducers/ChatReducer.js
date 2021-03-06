import {CHATTED_USERS, GETALL_CHATS, NEW_MESSAGE, VISITOR_MESSAGE, GET_VISITORS, GETV_MESSAGES, SUPPORT_RESPONDS, GETSUPPORT_RESPONSE, CHAT_PENDING, CHAT_ERROR, ALL_USERS} from '../actions/ChatAction';

const initialState = {
    users: [],
    allchats: [],
    chat: {},
    message: {},
    visitors: [],
    vmessages: [],
    response: {},
    supportresponse: [],
    allusers: [],
    error: ''
}

export default function ChatReducer (state = initialState, action) {
    switch (action.type) {
        case CHATTED_USERS:
            if(action.error){
                return {
                    ...state,
                    error: action.error
                }
            }
            return {
                ...state,
                users: action.payload
            }
        case  ALL_USERS:
            return {
                ...state,
                allusers: action.payload
            }
        case NEW_MESSAGE:
            return {
                ...state,
                chat: action.payload
            }
        case GETALL_CHATS:
            return {
                ...state,
                pending: false,
                allchats: action.payload
            }
        case VISITOR_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case GET_VISITORS:
            return {
                ...state,
                visitors: action.payload
            }
        case GETV_MESSAGES:
            return {
                ...state,
                vmessages: action.payload
            }
        case SUPPORT_RESPONDS:
            return {
                ...state,
                response: action.payload
            }
        case GETSUPPORT_RESPONSE:
            return {
                ...state,
                supportresponse: action.payload
            }
        default:
            return state
    }
}