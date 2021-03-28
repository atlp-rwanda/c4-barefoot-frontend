import axios from 'axios'

export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS'
import {API} from './AxiosAPI';
export const FETCH_ACCOMMODATIONS_ERROR = 'FETCH_ACCOMMODATIONS_ERROR'

const lang = localStorage.getItem('lang')

export const getAccommodations = () => dispatch => {
  dispatch({
    type: FETCH_ACCOMMODATIONS_PENDING,
  })
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations?lang=${lang}`)
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

