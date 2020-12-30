import axios from 'axios'
import { SEND_RESET_EMAIL_SUCCESS,SEND_RESET_EMAIL_FAIL,RESET_PASSWORD, LOADING,LOADING_ERROR, CLOSE_SNACKBAR } from '../resetPasswordType';

export const sendEmail = (userEmail) => dispatch =>{
        dispatch({
        type: LOADING
    });
   return axios.post('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/request-reset-password', {email:userEmail.email})
    .then((res)=> {
        console.log(res)
        console.log(res.data.message)
        dispatch({
            type:SEND_RESET_EMAIL_SUCCESS,
            message: res.data.message
        })
    })
    .catch(err => {
        if(err.response){
        console.log(err.response.data.error);
        dispatch({
            type: SEND_RESET_EMAIL_FAIL,
            error: err.response.data.error
        })
        }
    })
};

export const resetNewPassword = (newPassword, query)=> dispatch =>{
    dispatch({
        type: LOADING
    });
    return axios.patch(`https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/reset-password${query}`, {
        password:newPassword.password,
        confirmPassword: newPassword.confirmPassword
    })
    .then((res) => {
        console.log(res)
        dispatch({
            type: RESET_PASSWORD,
            message:res.data.message
        })
    })
    .catch(err => {
        if(err.response){
        console.log(err.response.data.error);
        dispatch({
            type:RESET_PASSWORD,
            error: err.response.data
        })
        }
    })
};
export const closeSnackbar = () => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}