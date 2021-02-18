import axios from "axios";
import { FETCH_ACCOMMODATIONS_ERROR } from "./fetchAccommodations";
export const FETCH_SINGLE_TRAVEL_REQUEST_LOADING = 'FETCH_SINGLE_TRAVEL_REQUEST_LOADING'
export const FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS= 'FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS'
export const FETCH_SINGLE_TRAVEL_REQUEST_ERROR= 'FETCH_SINGLE_TRAVEL_REQUEST_ERROR'


const token = localStorage.getItem('barefootUserToken')

export const getSingleTravelRequest = (id) => dispatch => {
    // console.log(token)
    dispatch({
        type:FETCH_SINGLE_TRAVEL_REQUEST_LOADING
    })
    return axios.get(`https://nomad-barefoot.herokuapp.com/api/v1/directReports/${id}`, {
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