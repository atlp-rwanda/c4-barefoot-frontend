import {
    FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILED,
    CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILED, FETCH_USER_PROFILE_LOADING, UPDATE_USER_PROFILE_LOADING,
    CHANGE_USER_PASSWORD_LOADING, CLOSE_SNACKBAR,UPDATE_PROFILE_PICTURE_LOADING,UPDATE_PROFILE_PICTURE_SUCCESS,UPDATE_PROFILE_PICTURE_FAILED
} from "../types/userProfileTypes";
const fetchUserInitialState = {
    loading: false,
    user: {},
    error: null
}

const updateUserProfileInitialState = {
    profileLoading:false,
    loading: false,
    successMsg: null,
    error: null,
    snackbarOpen: false,
    success: false
}


const changeUserPasswordInitialState = {
    loading: false,
    successMsg: null,
    error: null,
    snackbarOpen: false,
    success: false
}

export function fetchUserProfileReducer(state = fetchUserInitialState, action) {
    switch (action.type) {
        case FETCH_USER_PROFILE_LOADING:
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
                error: action.payload
            }
        default:
            return state
    }
}

export function updateUserProfileReducer(state = updateUserProfileInitialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE_PICTURE_LOADING:
            return {
                ...state,
                profileLoading: true
            }
        case UPDATE_PROFILE_PICTURE_SUCCESS:
            return {
                loading: false,
                profileLoading: false,
                successMsg: "successfully update your profile",
                error: null,
                success: true,
                snackbarOpen: true,
            }
        case UPDATE_PROFILE_PICTURE_FAILED:
            return {
                loading: false,
                profileLoading: false,
                successMsg: null,
                error: action.payload,
                success: false,
                snackbarOpen: true,
            }
        case UPDATE_USER_PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                profileLoading: false,
                successMsg: "successfully update your profile",
                error: null,
                success: true,
                snackbarOpen: true,
            }
        case UPDATE_USER_PROFILE_FAILED:
            return {
                loading: false,
                profileLoading: false,
                successMsg: null,
                error: action.payload,
                success: false,
                snackbarOpen: true,
            }
        case CLOSE_SNACKBAR:
            return {
                ...updateUserProfileInitialState,
                snackbarOpen: false,
            }
        default:
            return state
    }
}

export function changeUserPasswordeReducer(state = changeUserPasswordInitialState, action) {
    switch (action.type) {
        case CHANGE_USER_PASSWORD_LOADING:
            return {
                ...state,
                loading: true
            }
        case CHANGE_USER_PASSWORD_SUCCESS:
            return {
                loading: false,
                successMsg: action.payload,
                error: null,
                success: true,
                snackbarOpen: true
            }
        case CHANGE_USER_PASSWORD_FAILED:
            return {
                loading: false,
                successMsg: null,
                error: action.payload,
                success: false,
                snackbarOpen: true
            }
        case CLOSE_SNACKBAR:
            return {
                ...changeUserPasswordInitialState,
                snackbarOpen: false,
            }
        default:
            return state
    }
}