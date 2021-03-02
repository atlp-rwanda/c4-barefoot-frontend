import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')

export const DELETE_ROLE_PENDING = 'DELETE_ROLE_PENDING'
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS'
export const FETCH_ROLES_ERROR = 'FETCH_ROLES_ERROR'
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS'
export const DELETE_ROLE_ERROR = 'DELETE_ROLE_ERROR'
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR'
export const EDIT_ROLE='EDIT_ROLE'
export const CLEAN_ROLE='CLEAN_ROLE'
export const UPDATE_ROLE="UPDATE_ROLE"
export const UPDATE_ROLE_FAILED="UPDATE_ROLE_FAILED"
export const CREATE_ROLE_PENDING = 'CREATE_ROLE_PENDING'

export const getRoles = () => dispatch => {
  return API.get(`/admin/roles`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch({
        type: FETCH_ROLES_SUCCESS,
        payload: res.data.roles
      })
      }
    )
    .catch(err => {
      dispatch({
        type: FETCH_ROLES_ERROR,
        error: err
      })
    })
}

export const updateRoleAction =(id,data)=>dispatch=>{
  dispatch({
    type: CREATE_ROLE_PENDING
  })
  return API.put(`/admin/roles/${id}`,data,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(()=>{
    dispatch({
      type:UPDATE_ROLE
    })
  })
  .catch(err=>{
    dispatch({
      type:UPDATE_ROLE_FAILED,
      err:err.message
    })
  })
}

export const deleteRoleAction = (payload, title) => dispatch => {
  dispatch({
    type: DELETE_ROLE_PENDING
  })
  return API.delete('/admin/roles',
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      role: title
    }
  })
  .then(() => {
    dispatch({
      type: DELETE_ROLE_SUCCESS,
      payload: payload
    })
  })
  .catch(err => {
    dispatch({
      type: DELETE_ROLE_ERROR,
      error: err.message
    })
  })
  
}

export const editRoleAction=(id)=>dispatch=>{
  dispatch({
    type: EDIT_ROLE,
    id:id
  })
}

export const cleanEditRoleAction=()=>dispatch=>{
  dispatch({
    type: CLEAN_ROLE
  })
}



export const clearSnackBar = () => dispatch => {
  dispatch({
    type: CLEAR_SNACKBAR
  })
}