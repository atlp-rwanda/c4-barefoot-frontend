import {CHATTED_USERS, LAST_MESSAGE, GETALL_CHATS} from '../actions/ChatAction';

const initialState = {
    users: [],
    last: [],
    allchats: []
}

export default function ChatReducer (state = initialState, action) {
    switch (action.type) {
        case CHATTED_USERS:
            return {
                ...state,
                users: action.payload
            }
        case LAST_MESSAGE:
            return {
                ...state,
                last: action.payload
            }
        case GETALL_CHATS:
            return {
                ...state,
                allchats: action.payload
            }
        default:
            return state
    }
}