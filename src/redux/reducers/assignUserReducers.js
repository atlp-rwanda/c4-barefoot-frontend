import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/assignUserActions';

const initialState = {
    pending: false,
    error: null,
    verifiedUsers: { }
};

export function fetchVerifiedUsers(state = initialState, action){
    switch(action.type){
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false
            }
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_USERS_SUCCESS:
        return {
            ...state,
            pending: false,
            verifiedUsers: action.verifiedUsers
        }
        default:
        return state;
  }
};
