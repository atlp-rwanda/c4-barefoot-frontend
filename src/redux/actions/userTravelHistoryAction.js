import axios from 'axios'

export const FETCH_TRIP_HISTORY_PENDING = 'FETCH_TRIP_HISTORY_PENDING'
export const FETCH_TRIP_HISTORY_SUCCESS = 'FETCH_TRIP_HISTORY_SUCCESS'
import {API} from './AxiosAPI';
export const FETCH_TRIP_HISTORY_ERROR = 'FETCH_TRIP_HISTORY_ERROR'

const token = window.localStorage.getItem('barefootUserToken')

export const getTripHistory = () => dispatch => {
    const location = 'Cairo'
  return API.get(`/trips/${location}`,{
    headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
        console.log(res.data.rows);
      dispatch({
        type: FETCH_TRIP_HISTORY_SUCCESS,
      })
    }
    )
    .catch(err => {
      dispatch({
        type: FETCH_TRIP_HISTORY_ERROR,
        error: err
      })
    })
}

