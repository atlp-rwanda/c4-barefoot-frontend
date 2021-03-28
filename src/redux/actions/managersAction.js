import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')


export const FETCH_MANAGERS_PENDING = 'FETCH_MANAGERS_PENDING'
export const FETCH_MANAGERS_SUCCESS = 'FETCH_MANAGERS_SUCCESS'
export const FETCH_MANAGERS_ERRORS = 'FETCH_MANAGERS_ERRORS'

const lang = localStorage.getItem('lang')

export const getManagers = () => dispatch => {

  return API.get(`/assignUserstoManager/verified-users/managers?lang=${lang}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    dispatch({
      type: FETCH_MANAGERS_SUCCESS,
      payload: res.data.managers
    })
  })
  .catch(err => {
    dispatch({
      type: FETCH_MANAGERS_ERRORS,
      error: err.message
    })
  })
}