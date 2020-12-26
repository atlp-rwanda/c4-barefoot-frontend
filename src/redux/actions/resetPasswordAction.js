import axios from 'axios'
import { SEND_RESET_EMAIL,SEND_RESET_EMAIL_FAIL, RESET_PASSWORD, RESET_PASSWORD_FAIL, LOADING,LOADING_ERROR, CLOSE_SNACKBAR } from '../resetPasswordType';

export const sendEmail = (userEmail) => dispatch =>{
        dispatch({
        type: LOADING
    });
    axios.post('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/request-reset-password', {email:userEmail.email})
    .then((res)=> {
        console.log(res.data.message)
        dispatch({
            type:SEND_RESET_EMAIL,
            message: res.data.message
        })
    })
    .catch(err => {
        if(err.response){
        console.log(err.response.data.error);
        dispatch({
            type: SEND_RESET_EMAIL,
            error: err.response.data.error
        })
        }
    })
};

export const resetNewPassword = (newPassword, query)=> dispatch =>{
    dispatch({
        type: LOADING
    });
    const q = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtaWRlc2pldW5lcyIsImlhdCI6MTYwODk2NzU1NCwiZXhwIjoxNjA5NTcyMzU0fQ.LQz45uMO0FiS8nFc11ViPJTpzV7HyYfkei4uw_U-8sQ'
    axios.patch(`https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/reset-password${q}`, {
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