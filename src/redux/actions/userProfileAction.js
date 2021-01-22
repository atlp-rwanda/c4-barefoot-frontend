import { API } from './AxiosAPI';
import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILED, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILED, FETCH_USER_PROFILE_LOADING, UPDATE_USER_PROFILE_LOADING, CHANGE_USER_PASSWORD_LOADING, CLOSE_SNACKBAR } from "../types/userProfileTypes";
import { authHeader, getUserProfile } from '../../helper/sessionData';

export const fetchUserProfile = () => async dispatch => {
    console.log('loading dispatched')
    dispatch({
        type: FETCH_USER_PROFILE_LOADING
    });
    const { username } = getUserProfile();
    return API.get(`profile/${username}`, { headers: authHeader() })
        .then(res => {
            console.log('success dispatched')
            dispatch({
                type: FETCH_USER_PROFILE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            if (err.message) {
                console.log('error dispatched')
                dispatch({
                    type: FETCH_USER_PROFILE_FAILED,
                    payload: "network error occured failed to fetch your profile info"
                });
            }
            if (err.response) {
                console.log('error dispatched')
                dispatch({
                    type: FETCH_USER_PROFILE_FAILED,
                    payload: "no user profile info found"
                });
            }
        })

}

export const updateUserProfile = (body) => dispatch => {
    dispatch({
        type: UPDATE_USER_PROFILE_LOADING
    })
    return API.patch("/profile/update-profile", body, { headers: authHeader() })
        .then(res => {
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(err => {
            if (err.message) {
                dispatch({
                    type: UPDATE_USER_PROFILE_FAILED,
                    payload: "network error occured failed to update profile info"
                });
            }
            if (err.response) {
                dispatch({
                    type: UPDATE_USER_PROFILE_FAILED,
                    payload: "failed to update your profile info"
                });
            }

        })
}

export const changeUserPassword = (body) => dispatch => {
    dispatch({
        type: CHANGE_USER_PASSWORD_LOADING
    })
    return API.patch("/profile/change-password", body, { headers: authHeader() })
        .then(res => {
            dispatch({
                type: CHANGE_USER_PASSWORD_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(err => {
            if (err.message) {
                dispatch({
                    type: CHANGE_USER_PASSWORD_FAILED,
                    payload: "network error occured failed to change your password"
                });
            }
            if (err.response) {
                dispatch({
                    type: CHANGE_USER_PASSWORD_FAILED,
                    payload: "no user with this password found "
                });
            }

        })
}

export const closeSnackbar = () => dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}
