import { API } from './AxiosAPI';

const token = window.localStorage.getItem('barefootUserToken')

export const CREATE_ROLE_PENDING = 'CREATE_ROLE_PENDING'
export const CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS'
export const CREATE_ROLE_ERROR = 'CREATE_ROLE_ERROR'
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR'
export const UPDATE_ROLE = "UPDATE_ROLE"
export const UPDATE_ROLE_FAILED = "UPDATE_ROLE_FAILED"

const lang = localStorage.getItem('lang')

export const createRoleAction = (payload) => dispatch => {
  dispatch({
    type: CREATE_ROLE_PENDING
  })
  return API.post(`/admin/roles?lang=${lang}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(() => {
      dispatch({
        type: CREATE_ROLE_SUCCESS
      })
    })
    .catch(err => {
      dispatch({
        type: CREATE_ROLE_ERROR,
        error: err.message
      })
    })
}
export const updateRoleAction = (id, data) => dispatch => {
  dispatch({
    type: CREATE_ROLE_PENDING
  })
  return API.put(`/admin/roles/${id}?lang=${lang}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(() => {
      dispatch({
        type: UPDATE_ROLE
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATE_ROLE_FAILED,
        err: err.message
      })
    })
}
export const clearSnackBar = () => dispatch => {
  dispatch({
    type: CLEAR_SNACKBAR
  })
}