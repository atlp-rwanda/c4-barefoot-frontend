import { 
    FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR,
    FETCH_MANAGERS_ERROR, FETCH_MANAGERS_SUCCESS, FETCH_MANAGERS_PENDING
} from '../actions/assignUserActions';

const initialUsersState = {
    page: 1,
    pending: false,
    error: null,
    verifiedUsers: { count: 0, rows: [], loaded: false }
};
const initialManagersState = {
    pending: false,
    error: null,
    getAllManagers: [ ],
    loaded: false
};

export function fetchVerifiedUsers(state = initialUsersState, action){
    switch(action.type){
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                page: action.page,
                error: action.error
            }
        case FETCH_USERS_PENDING:
            return {
                ...initialUsersState,
                pending: true
            };
        case FETCH_USERS_SUCCESS:
        return {
            ...state,
            pending: false,
            page: action.page,
            verifiedUsers: {
                count: action.verifiedUsers.count,
                loaded: true,
                rows: action.verifiedUsers.rows
            }
        }
        default:
        return state;
    }
};

export function fetchAllManagers(state = initialManagersState, action){
    switch(action.type){
        case FETCH_MANAGERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_MANAGERS_PENDING:
            
            return {
                ...state,
                pending: true
            };
        case FETCH_MANAGERS_SUCCESS:
        return {
            ...state,
            pending: false,
            getAllManagers: action.getAllManagers
        }
        default:
        return state;
    }
};
