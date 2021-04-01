import axios from 'axios'
import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')
export const FETCH_SINGLE_ACCOMMODATION_SUCCESS = 'FETCH_SINGLE_ACCOMMODATION_SUCCESS'
export const FETCH_SINGLE_ACCOMMODATION_PENDING = 'FETCH_SINGLE_ACCOMMODATION_PENDING'
export const FETCH_SINGLE_ACCOMMODATION_FAILURE = 'FETCH_SINGLE_ACCOMMODATION_FAILURE'

export const fetchAccommodationRequest = () => {
    return {
        type: FETCH_SINGLE_ACCOMMODATION_PENDING
    }
}

export const fetchAccommodationSuccess = accommodation => {
    return {
        type: FETCH_SINGLE_ACCOMMODATION_SUCCESS,
        payload: accommodation
    }
}
export const fetchAccommodationFailure = error => {
    return {
        type: FETCH_SINGLE_ACCOMMODATION_FAILURE,
        payload: error
    }
}

export const getSingleAccommodation = (id) => dispatch => {
  return API.get(`/accommodations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(fetchAccommodationSuccess(res.data))
    }).catch(err => {
        dispatch(fetchAccommodationFailure(err.message))
    })
}


