import {API} from './AxiosAPI';
export const  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR'


export const getLocations = () => dispatch => {
  return API.get(`/locations`)
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_SUCCESS,
        payload: res.data.locations
      })
      }
    )
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_ERROR,
        error: err
      })
    })
}

