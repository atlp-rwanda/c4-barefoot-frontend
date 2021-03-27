import axios from "axios";
import { FETCH_ACCOMMODATIONS_ERROR } from "./fetchAccommodations";
export const FETCH_TRAVEL_REQUEST_LOADING = 'FETCH_TRAVEL_REQUEST_LOADING'
export const FETCH_TRAVEL_REQUEST_SUCCESS= 'FETCH_TRAVEL_REQUEST_SUCCESS'
export const FETCH_TRAVEL_REQUEST_ERROR= 'FETCH_TRAVEL_REQUEST_ERROR'


const token = localStorage.getItem('barefootUserToken')
console.log(token);

export const getTravelRequest = () => dispatch => {
    console.log(token)
    dispatch({
        type:FETCH_TRAVEL_REQUEST_LOADING
    })
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/directReports`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        // console.log(res.data)
        dispatch({
            type: FETCH_TRAVEL_REQUEST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        if(err.message === 'Network Error'){
            dispatch({
                type:FETCH_TRAVEL_REQUEST_ERROR,
                error:err.message
            })
        }
        // if(err.response){
        //     dispatch({
        //         type:FETCH_TRAVEL_REQUEST_ERROR,
        //         error:err
        //     })
        // }
        if(err.request){
            dispatch({
                type:FETCH_TRAVEL_REQUEST_ERROR,
                error:JSON.parse(err.request.response)
            })
        }
    })
}


