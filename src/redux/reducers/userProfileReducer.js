import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILED, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILED, LOADING } from "../types/userProfileTypes";

const fetchUserInitialState = {
    loading: false,
    user: {},
    error: null
}

const updateUserProfileInitialProfile = {
    loading: false,
    successMsg: null,
    error: null
}
export function fetchUserProfileReducer(state = fetchUserInitialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: null
            }
        case FETCH_USER_PROFILE_FAILED:
            return {
                loading: false,
                user: {},
                error: action.error
            }
        default:
            return state
    }
}

export function updateUserProfileReducer(state = updateUserProfileInitialProfile, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                successMsg: action.payload,
                error: null
            }
        case UPDATE_USER_PROFILE_FAILED:
            return {
                loading: false,
                successMsg: null,
                error: action.error
            }
        default:
            return state
    }
}