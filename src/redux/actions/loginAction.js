import { API } from './AxiosAPI';

export const USER_LOGIN = 'LOGIN';
export const LoGIN_LOADING = 'LOADING';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const DISPLAY_SKELETONS = 'DISPLAY_SKELETONS';

const detectLang = (language) => {
    if(language === "English"){
        localStorage.setItem('lang', "en")
    }else if(language === "French"){
        localStorage.setItem('lang', "fr")
    }else if(language === "Kinyarwanda"){
        localStorage.setItem('lang', "kin")
    }else{
        localStorage.setItem('lang',"en")
    }
}

export const loginAction = (userCredentials) => dispatch => {
    dispatch({
        type: LoGIN_LOADING
    });
    const lang = localStorage.getItem('lang')
    return API.post(`/user/login?lang=${lang}`,
        userCredentials
    )
        .then((res) => {
            localStorage.setItem('barefootUserToken', res.data.data);
            localStorage.setItem('userProfile', JSON.stringify(res.data.profile));
            localStorage.setItem('userRole', res.data.role);
            localStorage.setItem('userName', res.data.profile.username);
            detectLang(res.data.profile.language)
            window.location.reload()

            dispatch({
                type: USER_LOGIN
            })
        })
        .catch(err => {
            if (err.message === 'Network Error') {
                dispatch({
                    type: USER_LOGIN,
                    error: err.message
                })
            }
            if (err.response) {
                dispatch({
                    type: USER_LOGIN,
                    error: 'Email or password is invalid, try again!'
                })
            }

        });
}

export const closeSnackbar = () => dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}
export const loadSkeletons = (value) => dispatch => {
    if (value) {
        dispatch({
            type: DISPLAY_SKELETONS,
            payload: value
        });
    }
    else {
        dispatch({
            type: DISPLAY_SKELETONS,
            payload: false
        });
    }
}
 