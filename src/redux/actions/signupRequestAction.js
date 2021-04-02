import axios from 'axios';
import {API} from './AxiosAPI';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'

const lang = localStorage.getItem('lang')

export const requestSignup = (user, nextStep) => async dispatch => {
  dispatch({
    type: REQUEST_SIGNUP
  })
  return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/user/signup?lang=${lang}`, user)
    .then(res => {
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      })
      nextStep()
      }
    )
    .catch(err => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",err,'!!!!!!')
        if (err.response){
            dispatch({
                type: REQUEST_ERROR,
                error: err.response.data.error,
              })
          }else if(err.request){
            dispatch({
                type: REQUEST_ERROR,
                error: err.request.data.error,
              })
          }else if(err.message){
            dispatch({
                type: REQUEST_ERROR,
                error: err.message.data,
              })     
          }
    })
}
export const closeSnackbar = () => dispatch =>{
  dispatch({
      type: CLOSE_SNACKBAR
  });
}
