import axios from 'axios'
import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING'

export const DELETE_USERS_PENDING = 'DELETE_USERS_PENDING'
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USERS_ERROR = 'DELETE_USERS_ERROR'
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR'

const lang = localStorage.getItem('lang')

export const getUsers = (page) => dispatch => {
  dispatch({
    type: FETCH_USERS_PENDING
  })
  return API.get(`/assignUserstoManager/verified-users?lang=${lang}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      page: page
    }
  })
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data.verifiedUsers
      })
      }
    )
    .catch(err => {
      dispatch({
        type: FETCH_USERS_ERROR,
        error: err
      })
    })
}

export const deleteUser = (index, email) => dispatch => {
  dispatch({
    type: DELETE_USERS_PENDING
  })

  return API.delete(`/admin/users?lang=${lang}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      email: email
    }
  })
  .then(() => {
    dispatch({
      type: DELETE_USERS_SUCCESS,
      payload: `User ${email} successfully deleted`,
      index: index
    })
  })
  .catch(err => {
    dispatch({
      type: DELETE_USERS_ERROR,
      error: err.message
    })
  })
}

export const clearSnackBar = () => dispatch => {
  dispatch({
    type: CLEAR_SNACKBAR
  })
}