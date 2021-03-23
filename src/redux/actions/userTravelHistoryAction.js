import axios from 'axios'

export const FETCH_TRIP_HISTORY_PENDING = 'FETCH_TRIP_HISTORY_PENDING'
export const FETCH_TRIP_HISTORY_SUCCESS = 'FETCH_TRIP_HISTORY_SUCCESS'
export const FETCH_TRIP_HISTORY_ERROR = 'FETCH_TRIP_HISTORY_ERROR'
export const GET_SINGLE_ACC = 'GET_SINGLE_ACC'

const token = window.localStorage.getItem('barefootUserToken')


const location = 'Nairobi'
export const getTripHistory = () => (dispatch) => {
    dispatch({type:FETCH_TRIP_HISTORY_PENDING})
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/trips/${location}`,{
    headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res =>  dispatch({
        type: FETCH_TRIP_HISTORY_SUCCESS,
        payload:res.data.rows
      })
    
    )
    .catch(err => {
      console.log(err)
      dispatch({
        type: FETCH_TRIP_HISTORY_ERROR,
        payload: err
      })
    })
}

export const getAccommodation = () => dispatch => {
  const id = localStorage.getItem('accId')
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => dispatch({
      type: GET_SINGLE_ACC,
      payload: res.data.singleAccommodation
  }))
  .catch(err => console.log(err.message))
}