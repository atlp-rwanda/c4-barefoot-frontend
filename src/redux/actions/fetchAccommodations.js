import axios from 'axios'

export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const  FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS'
export const FETCH_ACCOMMODATIONS_ERROR = 'FETCH_ACCOMMODATIONS_ERROR'

export const FETCH_AMENITIES_PENDING = 'FETCH_AMENITIES_PENDING'
export const  FETCH_AMENITIES_SUCCESS = 'FETCH_AMENITIES_SUCCESS'
export const FETCH_AMENITIES_ERROR = 'FETCH_AMENITIES_ERROR'


export const getAccommodations = (page) => dispatch => {
  dispatch({
    type: FETCH_ACCOMMODATIONS_PENDING
  })
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations`, { params: { page: page }})
    .then(res => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_SUCCESS,
        count: res.data.accommodations.count,
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

export const getAmenities = (id) => dispatch => {
  dispatch({
    type: FETCH_AMENITIES_PENDING
  })
  return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/amenities/${id}`)
    .then(res => {
      dispatch({
        type: FETCH_AMENITIES_SUCCESS,
        // count: res.data.amenities.count,
        payload: res.data.amenities
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
