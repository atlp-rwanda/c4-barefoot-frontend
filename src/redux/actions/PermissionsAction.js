import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')

export const FETCH_PERMISSIONS_PENDING = 'FETCH_PERMISSIONS_PENDING'
export const FETCH_PERMISSIONS_SUCCESS = 'FETCH_PERMISSIONS_SUCCESS'
export const FETCH_PERMISSIONS_ERROR = 'FETCH_PERMISSIONS_ERROR'
export const CHECKBOX_CHANGED = 'CHECKBOX_CHANGED'
export const UPDATE_PERMISSIONS_PENDING = 'UPDATE_PERMISSIONS_PENDING'
export const UPDATE_PERMISSIONS_SUCCESS = 'UPDATE_PERMISSIONS_SUCCESS'
export const UPDATE_PERMISSIONS_ERROR = 'UPDATE_PERMISSIONS_ERROR'
export const CLEAR_PERMISSIONS_SNACKBAR = ' CLEAR_PERMISSIONS_SNACKBAR'

const lang = localStorage.getItem('lang')

export const getPermissions = (id,role) => dispatch => {
  dispatch({
    type: FETCH_PERMISSIONS_PENDING
  })

  return API.get(`/admin/permission/${id}?lang=${lang}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    dispatch({
      type: FETCH_PERMISSIONS_SUCCESS,
      payload: res.data,
      role: role
    })
  })
  .catch(err => {
    dispatch({
      type: FETCH_PERMISSIONS_ERROR,
      error: err.message
    })
  })
}

export const changePermission = (property,payload) => dispatch =>{
  dispatch({
    type: CHECKBOX_CHANGED,
    payload: payload,
    property: property
  })
}

export const updatePermission = (payload, role) => dispatch => {
  dispatch({
    type: UPDATE_PERMISSIONS_PENDING
  })
  
  return API.put(`/admin/role/update?lang=${lang}`, {
    role: role,
    permissions: payload
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(() => {
    dispatch({
      type: UPDATE_PERMISSIONS_SUCCESS,
      message: 'Permissions Updated Successfully'
    })
    
  })
  .catch((err) => {
    dispatch({
      type: UPDATE_PERMISSIONS_ERROR,
      error: err.message
    })
    
  })
}

export const clearPermissionSnackbar = () => dispatch => {
  dispatch({
    type: CLEAR_PERMISSIONS_SNACKBAR
  })
}