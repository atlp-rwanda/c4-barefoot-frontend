import axios from 'axios'

export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS'
import {API} from './AxiosAPI';
export const FETCH_ACCOMMODATIONS_ERROR = 'FETCH_ACCOMMODATIONS_ERROR'


export const getAccommodations = () => dispatch => {
  return API.get(`/accommodations`)
    .then(res => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_SUCCESS,
        payload: res.data.accommodations
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

