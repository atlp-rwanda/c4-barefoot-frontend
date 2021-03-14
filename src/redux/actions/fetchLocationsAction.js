import axios from 'axios';
import {API} from './AxiosAPI';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR'
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING'


export const getLocations = () => dispatch => {
  const token= localStorage.getItem('barefootUserToken');
  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

 dispatch({
    type: FETCH_LOCATIONS_PENDING
  })
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/locations`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_SUCCESS,
        payload: res.data.locations.rows
      })
      }
    )
    .catch(err => {
      console.log('error', err.request);
      dispatch({
        type: FETCH_LOCATIONS_ERROR,
        error: err
      })
    })
}

