import axios from 'axios';
import {API} from './AxiosAPI';

import { SEND_RESET_EMAIL_SUCCESS, SEND_RESET_EMAIL_FAIL, RESET_PASSWORD_SUCCESS, LOADING, LOADING_ERROR, CLOSE_SNACKBAR, RESET_PASSWORD_FAIL } from '../resetPasswordType';

const lang = localStorage.getItem('lang')

export const sendEmail = (userEmail) => dispatch =>{
        dispatch({
        type: LOADING
    });
   return API.post(`/user/request-reset-password?lang=${lang}`, {email:userEmail.email})
    .then((res)=> {
        dispatch({
            type:SEND_RESET_EMAIL_SUCCESS,
            message: res.data.message
        })
    })
    .catch(err => {
        // if(err.response){
        dispatch({
            type: SEND_RESET_EMAIL_FAIL,
            error: err.response.data.error
        })
        // }
    })
};

export const resetNewPassword = (newPassword, query)=> dispatch =>{
    dispatch({
        type: LOADING
    });
    return API.patch(`/user/reset-password${query}?lang=${lang}`, {
        password:newPassword.password,
        confirmPassword: newPassword.confirmPassword
    })
    .then((res) => {
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            message:res.data.message
        })
    })
    .catch(err => {
        if(err.response){
        console.log(err.response.data.error);
        dispatch({
            type:RESET_PASSWORD_FAIL,
            error: err.response.data
        })
        }
    })
};
export const closeSnackbar = () => dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}