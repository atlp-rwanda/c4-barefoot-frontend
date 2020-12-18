import axios from 'axios'

export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING'
export const  FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR'


export const getLocations = () => dispatch => {
  dispatch({
    type: FETCH_LOCATIONS_PENDING
  })
  axios.get('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/locations', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiNGZkMDg0YTAtY2RkNi00N2E1LWFhZjUtNWZkYzhiNTYyOWRkIiwidXNlcm5hbWUiOiJ0cmF2ZWxBZG1pbiIsImlhdCI6MTYwODI0MTQ0OCwiZXhwIjoxNjA4ODQ2MjQ4fQ.EqA4snWvXOEnpr0v1QEmr6zopfErCx0bCRbF3EyuXg4'
      }
    })
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_SUCCESS,
        payload: res.data.locations.rows
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

