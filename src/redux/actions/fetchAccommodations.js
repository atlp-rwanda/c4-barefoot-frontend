import axios from 'axios'
import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')
export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS'
export const FETCH_ACCOMMODATION_SUCCESS = 'FETCH_ACCOMMODATION_SUCCESS'
export const FETCH_AMENITIES_SUCCESS = 'FETCH_AMENITIES_SUCCESS'
export const FETCH_AMENITIES_ERROR = 'FETCH_AMENITIES_ERROR'
export const FETCH_ACCOMMODATIONS_ERROR = 'FETCH_ACCOMMODATIONS_ERROR'


export const getAccommodations = () => dispatch => {
<<<<<<< HEAD
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
=======
  const token= localStorage.getItem('barefootUserToken');
  dispatch({
    type: FETCH_ACCOMMODATIONS_PENDING,
  })
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations`,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
>>>>>>> bdee544 (fixing fetch-location action and fetch-accomodation action)
    .then(res => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_SUCCESS,
        payload: res.data.accommodations.rows
      })
    }
    )
    .catch(err => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_ERROR,
        error: err
      })
    })
}

export const getAccommodation = (id) => dispatch => {
      dispatch({
        type: FETCH_ACCOMMODATION_SUCCESS,
        payload: id
      })
}

export const getAccommodationAminity = (id) => dispatch => {
  return API.get(`/accommodations/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch({
        type: FETCH_AMENITIES_SUCCESS,
        payload: res.data
      })
    }
    )
    .catch(err => {
      dispatch({
        type: FETCH_AMENITIES_ERROR,
        error: err
      })
    })
}

