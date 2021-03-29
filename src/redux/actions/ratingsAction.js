import { API } from './AxiosAPI';

export const GET_RATINGS_SUCCESS = 'GET_RATINGS_SUCCESS';
export const GET_RATINGS_FAILED = 'GET_RATINGS_FAILED';
export const ADD_RATINGS_SUCCESS = 'ADD_RATINGS_SUCCESS';
export const ADD_RATINGS_FAILED = 'ADD_RATINGS_FAILED';
export const GET_RATINGS_PENDING = 'GET_RATINGS_PENDING'

export const addRatings = (id,datas) =>dispatch=> {
    const token = window.localStorage.getItem('barefootUserToken')
    console.log(datas)
    return API.post(`/ratings/${id}`, datas, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    }).then(() => {
        dispatch({ type: ADD_RATINGS_SUCCESS })
    }).catch(() => {
        dispatch({ type: ADD_RATINGS_FAILED })
    })
}

export const getRatings = (id) => {
    const token = window.localStorage.getItem('barefootUserToken')
    
    return(dispatch)=>{
        dispatch({type:GET_RATINGS_PENDING})
         API.get(`/ratings/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    }).then(res => {
        dispatch({ 
            type: GET_RATINGS_SUCCESS,
            payload:res
         })
    }).catch(err => {
        dispatch({ 
            type: GET_RATINGS_FAILED,
            payload:err.message
             })
    })
    }
    
}