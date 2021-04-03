import axios from 'axios'
import {API} from './AxiosAPI';
export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING'
export const  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const  FETCH_USERS_ADMIN_SUCCESS = 'FETCH_USERS_ADMIN_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_USERS_ADMIN_ERROR = 'FETCH_USERS_ADMIN_ERROR'

const token = localStorage.getItem('barefootUserToken')
const lang = localStorage.getItem('lang')

export const getUsers = () => dispatch => {
    // dispatch({
    //     type:FETCH_USERS_LOADING
    // })
    return API.get('/assignUserstoManager/verified-users', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {  
        console.log(res.data)
        dispatch({
            type:FETCH_USERS_SUCCESS,
            payload:res.data.verifiedUsers.rows
            })         
        }).catch(err => {
            if(err.message === 'Network Error'){
            dispatch({
                type: FETCH_USERS_ERROR,
                error: err.message
            })
        }
        if(err.response){
            dispatch({
                type: FETCH_USERS_ERROR,
                error:err
            })

        }
        })
}


export const adminGetUsers = () => dispatch => {
    
    return API.get('/admin/users', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {  
        dispatch({
            type:FETCH_USERS_ADMIN_SUCCESS,
            payload:res.data.users,
            count:res.data.users.count
            })         
        }).catch(err => {
            if(err.message === 'Network Error'){
            dispatch({
                type: FETCH_USERS_ERROR,
                error: err.message
            })
        }
        if(err.response){
            dispatch({
                type: FETCH_USERS_ERROR,
                error:err
            })

        }
        })
}