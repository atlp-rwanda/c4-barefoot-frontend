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
    error: '',
    pending: false
}

export default function ChatReducer (state = initialState, action) {
    switch (action.type) {
        case CHAT_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case CHAT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        case CHATTED_USERS:
            return {
                ...state,
                pending: false,
                users: action.payload,
                error: ''
            }
        case ALL_USERS:
            return {
                ...state,
                pending: false,
                allusers: action.payload,
                error: ''
            }
        case NEW_MESSAGE:
            return {
                ...state,
                pending: false,
                chat: action.payload,
                error: ''
            }
        case GETALL_CHATS:
            return {
                ...state,
                pending: false,
                allchats: action.payload,
                error: ''
            }
        case VISITOR_MESSAGE:
            return {
                ...state,
                pending: false,
                message: action.payload,
                error: ''
            }
        case GET_VISITORS:
            return {
                ...state,
                pending: false,
                visitors: action.payload,
                error: ''
            }
        case GETV_MESSAGES:
            return {
                ...state,
                pending: false,
                vmessages: action.payload,
                error: ''
            }
        case SUPPORT_RESPONDS:
            return {
                ...state,
                pending: false,
                response: action.payload,
                error: ''
            }
        case GETSUPPORT_RESPONSE:
            return {
                ...state,
                pending: false,
                supportresponse: action.payload,
                error: ''
            }
        default:
            return state
    }
}