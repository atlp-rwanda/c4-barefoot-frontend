import {CHATTED_USERS, GETALL_CHATS, NEW_MESSAGE, VISITOR_MESSAGE} from '../actions/ChatAction';

const initialState = {
    users: [],
    allchats: [],
    chat: {},
    message: {}
}

export default function ChatReducer (state = initialState, action) {
    switch (action.type) {
        case CHATTED_USERS:
            return {
                ...state,
                users: action.payload
            }
        case NEW_MESSAGE:
            return {
                ...state,
                chat: action.payload
            }
        case GETALL_CHATS:
            return {
                ...state,
                allchats: action.payload
            }
        case VISITOR_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}