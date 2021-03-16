import { API } from './AxiosAPI';
import {
    FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILED,
    CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILED, FETCH_USER_PROFILE_LOADING, UPDATE_USER_PROFILE_LOADING,
    CHANGE_USER_PASSWORD_LOADING, CLOSE_SNACKBAR,UPDATE_PROFILE_PICTURE_LOADING,UPDATE_PROFILE_PICTURE_SUCCESS,UPDATE_PROFILE_PICTURE_FAILED
} from "../types/userProfileTypes";
import { authHeader, getUserProfile } from '../../helper/sessionData';
import axios from 'axios'

export const fetchUserProfile = () => dispatch => {
    dispatch({
        type: FETCH_USER_PROFILE_LOADING
    });
    const { username } = getUserProfile();
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/profile/${username}`, { headers: authHeader() })
        .then(res => {
            dispatch({
                type: FETCH_USER_PROFILE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_PROFILE_FAILED,
                payload: "no user profile info found"
            });
        })
}

export const updateUserProfile = (body) => async dispatch => {
 
    
    if (body.profile_picture) {
        dispatch({
            type: UPDATE_PROFILE_PICTURE_LOADING
        })
        const response = await axios.post('https://api.cloudinary.com/v1_1/mjackson/image/upload', body.profile_picture).catch(err => err)
        if (!response.data.secure_url) {
            return dispatch({
                type: UPDATE_PROFILE_PICTURE_FAILED,
                payload: "failed to update your profile picture"
            });
        }
        body = { profile_picture: response.data.secure_url }
       
    }
    
        dispatch({
            type: UPDATE_USER_PROFILE_LOADING
        })
        return axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/profile/update-profile`, body, { headers: authHeader() })
            .then(async res => {
                await dispatch({
                    type: UPDATE_USER_PROFILE_SUCCESS,
                    payload: res.data.data
                });
                dispatch(fetchUserProfile())
            })
            .catch(err => {
                dispatch({
                    type: UPDATE_USER_PROFILE_FAILED,
                    payload: "failed to update your profile info"
                });
            })

}

export const changeUserPassword = (body) => async dispatch => {
    dispatch({
        type: CHANGE_USER_PASSWORD_LOADING
    })
    return axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/profile/change-password`, body, { headers: authHeader() })
        .then(async res => {
            await dispatch({
                type: CHANGE_USER_PASSWORD_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(err => {
            dispatch({
                type: CHANGE_USER_PASSWORD_FAILED,
                payload: "no user with this password found "
            });
        })
}

export const closeSnackbar = () => async dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}


