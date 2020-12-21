import axios from 'axios'
import { SEND_RESET_EMAIL,SEND_RESET_EMAIL_FAIL, RESET_PASSWORD, RESET_PASSWORD_FAIL, LOADING,LOADING_ERROR } from '../resetPasswordType';

export const sendEmail = (userEmail) => dispatch =>{
        dispatch({
        type: LOADING
    });
    axios.patch('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/request-reset-password', {email:userEmail.email})
    .then(()=> {
        dispatch({
            type:SEND_RESET_EMAIL
        })
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: SEND_RESET_EMAIL,
            error: err.response.message
        })
    })
};

export const resetNewPassword = (newPassword)=> dispatch =>{
    dispatch({
        type: LOADING
    });
    axios.patch('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/reset-password', {
        password:newPassword.password,
        confirmPassword: newPassword.confirmPassword
    })
    .then(() => {
        dispatch({
            type: RESET_PASSWORD
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type:RESET_PASSWORD,
            error: err.message
        })
    })
}