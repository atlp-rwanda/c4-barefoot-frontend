import { FETCH_USERS_PAGE_CHANGE } from "../actions/assignUserActions";

const initialState = 1;

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_PAGE_CHANGE:
            return action.page;
        default:
            return state;
    }
};
