import {NEW_MESSAGE,CHAT_USERS} from '../actions/SendMessageAction';

const initialState = {
    users: [],
    message: {}
}

export default function chatReducer (state = initialState, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case CHAT_USERS:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state
    }
}