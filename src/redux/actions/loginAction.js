import axios from 'axios';

export const USER_LOGIN = 'LOGIN';
export const LoGIN_LOADING = 'LOADING';

export const loginAction = (userCredentials) => dispatch => {
    dispatch({
        type: LoGIN_LOADING
    });
    axios.post('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/login',
    {
        email: userCredentials.email,
        password: userCredentials.password
    }
    )
    .then(() => {
        dispatch({
            type: USER_LOGIN
        })
    })
    .catch(err=>{
        dispatch({
            type: USER_LOGIN,
            error: err.message
        })
    });
}
