import axios from 'axios'
import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILED, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILED, LOADING } from "../types/userProfileTypes";
import authHeader from '../../helper/authHeader';
const userCredentials = {
    email: "manager_id@gmail.com",
    password: "manager_id"
};

export const fetchUserProfile = () => async dispatch => {
    let username = null;
    dispatch({
        type: LOADING
    })

    axios.post("https://barefoot-nomad-app-v1.herokuapp.com/api/v1//user/login", userCredentials)
        .then((res) => { localStorage.setItem('barefootUserToken', res.data.data) })

    return axios.get("https://barefoot-nomad-app-v1.herokuapp.com/api/v1/profile/manager_id", { headers: authHeader() })
        .then(res => {
            dispatch({
                type: FETCH_USER_PROFILE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_PROFILE_FAILED,
                payload: err
            });
        });
}

export const updateUserProfile = () => async dispatch => {
    dispatch({
        type: LOADING
    })
    axios.post("https://barefoot-nomad-app-v1.herokuapp.com/api/v1//user/login", userCredentials)
        .then((res) => { localStorage.setItem('barefootUserToken', res.data.data) });

    return axios.post("https://barefoot-nomad-app-v1.herokuapp.com/api/v1/profile/manager_id", { headers: authHeader() }, {})
        .then(res => {
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_USER_PROFILE_FAILED,
                payload: err
            });
        });
}