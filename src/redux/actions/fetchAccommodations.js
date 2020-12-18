import axios from 'axios'

export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const  FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS'
export const FETCH_ACCOMMODATIONS_ERROR = 'FETCH_ACCOMMODATIONS_ERROR'


export const getAccommodations = () => dispatch => {
  dispatch({
    type: FETCH_ACCOMMODATIONS_PENDING
  })
  axios.get('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/accommodations', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiNGZkMDg0YTAtY2RkNi00N2E1LWFhZjUtNWZkYzhiNTYyOWRkIiwidXNlcm5hbWUiOiJ0cmF2ZWxBZG1pbiIsImlhdCI6MTYwODI0MTQ0OCwiZXhwIjoxNjA4ODQ2MjQ4fQ.EqA4snWvXOEnpr0v1QEmr6zopfErCx0bCRbF3EyuXg4'
      }
    })
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

