import axios from 'axios'

export const FETCH_TRIP_HISTORY_PENDING = 'FETCH_TRIP_HISTORY_PENDING'
export const FETCH_TRIP_HISTORY_SUCCESS = 'FETCH_TRIP_HISTORY_SUCCESS'
export const FETCH_TRIP_HISTORY_ERROR = 'FETCH_TRIP_HISTORY_ERROR'
export const GET_SINGLE_ACC = 'GET_SINGLE_ACC'
export const GET_LOCATIONS_TRAVELLED = 'GET_LOCATIONS_TRAVELLED'

const token = window.localStorage.getItem('barefootUserToken')


export const getTripHistory = (location) => (dispatch) => {
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

// export const getTripLocations = () => dispatch => {
//   return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/trips`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   .then(res => {
//     console.log('bcbcbcbbcbbbbcbbcbbc', res.data)
//     dispatch({
//       type: GET_LOCATIONS_TRAVELLED,
//       payload: res.data
//   })
//   })
//   .catch(err => console.log(err.message))
// }
export const getTripLocations = () => dispatch => {
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/trips`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
  .then(res=> {
    console.log(res.data.countedTrips)
    dispatch({
      type: GET_LOCATIONS_TRAVELLED,
      payload: res.data.countedTrips
    })
  })
  .catch(err => console.log(err.message))
}

