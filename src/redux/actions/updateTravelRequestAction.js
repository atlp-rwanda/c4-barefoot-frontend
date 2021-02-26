import axios from "axios";
import { FETCH_ACCOMMODATIONS_ERROR } from "./fetchAccommodations";
export const UPDATE_TRAVEL_REQUEST_LOADING = 'UPDATE_TRAVEL_REQUEST_LOADING'
export const UPDATE_TRAVEL_REQUEST_SUCCESS= 'UPDATE_TRAVEL_REQUEST_SUCCESS'
export const UPDATE_TRAVEL_REQUEST_ERROR= 'UPDATE_TRAVEL_REQUEST_ERROR'
export const UPDATE_TRAVEL_REQUEST_CLEAR= 'UPDATE_TRAVEL_REQUEST_CLEAR'



const token = localStorage.getItem('barefootUserToken')

export const updateSingleTravelRequest = (id, action) => dispatch => {
    console.log(token)
    dispatch({
        type:UPDATE_TRAVEL_REQUEST_LOADING
    })
    return axios.put(`${process.env.REACT_APP_BACKEND_LINK}/directReports`, {
        body:{
            travelRequestId:id,
            action
        },
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        console.log(res.data)
        dispatch({
            type: UPDATE_TRAVEL_REQUEST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        if(err.message === 'Network Error'){
            dispatch({
                type:UPDATE_TRAVEL_REQUEST_ERROR,
                error:err.message
            })
        }
        // if(err.response){
        //     dispatch({
        //         type:UPDATE_TRAVEL_REQUEST_ERROR,
        //         error:err
        //     })
        // }
        if(err.request){
            dispatch({
                type:UPDATE_TRAVEL_REQUEST_ERROR,
                error:JSON.parse(err.request.response)
            })
        }
    })
}

export const clearUpdateTravelRequest = ()=> dispatch => {
    dispatch( 
        {
            type: UPDATE_TRAVEL_REQUEST_CLEAR
        }
    )
}