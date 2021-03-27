import axios from 'axios';
import {API} from './AxiosAPI';
export const LOGOUT_PENDING = "LOGOUT_PENDING";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const logoutAction = (authToken) => dispatch => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    dispatch({
        type: LOGOUT_PENDING
    })

    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/user/logout`).then(() => {
        localStorage.removeItem('barefootUserToken');
        dispatch({
            type: LOGOUT_SUCCESS
        })
    })
        .catch(err => {
            if (err.message === "Network Error") {
                dispatch({
                    type: LOGOUT_FAIL,
                    error: 'Network Error'
                })
            }
            if (err.response) {
                dispatch({
                    type: LOGOUT_FAIL,
                    error: err.response.data.message
                })
            }

        })

}
