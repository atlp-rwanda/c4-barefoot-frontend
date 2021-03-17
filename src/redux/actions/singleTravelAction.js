import axios from "axios";
import { FETCH_ACCOMMODATIONS_ERROR } from "./fetchAccommodations";
export const FETCH_SINGLE_TRAVEL_REQUEST_LOADING = 'FETCH_SINGLE_TRAVEL_REQUEST_LOADING'
export const FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS= 'FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS'
export const FETCH_SINGLE_TRAVEL_REQUEST_ERROR= 'FETCH_SINGLE_TRAVEL_REQUEST_ERROR'
export const CLEAR_SINGLE_TRAVEL_REQUEST= 'CLEAR_SINGLE_TRAVEL_REQUEST';


const token = localStorage.getItem('barefootUserToken')

export const getSingleTravelRequest = (id) => dispatch => {
    // console.log(token)
    dispatch({
        type:FETCH_SINGLE_TRAVEL_REQUEST_LOADING
    })
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/directReports/${id}`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        console.log(res.data)
        dispatch({
            type: FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        if(err.message === 'Network Error'){
            dispatch({
                type:FETCH_SINGLE_TRAVEL_REQUEST_ERROR,
                error:err.message
            })
        }
        if(err.response){
            dispatch({
                type:FETCH_SINGLE_TRAVEL_REQUEST_ERROR,
                error:err
            })
        }
        if(err.request){
            console.log('request error', err.request.response)
            dispatch({
                type:FETCH_SINGLE_TRAVEL_REQUEST_ERROR,
                error:JSON.parse(err.request.response)
            })
        }
    })
}

export const clearSingleRequest= ()=> dispatch =>{
    dispatch({
        type: CLEAR_SINGLE_TRAVEL_REQUEST
    })
}