import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')
export const FETCH_ACCOMMODATIONS_PENDING = 'FETCH_ACCOMMODATIONS_PENDING'
export const FETCH_ACCOMMODATIONS_BY_LOCATION = 'FETCH_ACCOMMODATIONS_BY_LOCATION'
export const FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR = 'FETCH_ACCOMMODATIONS_BY_LOCATION__ERROR'
export const SELECT_ACCOMMODATION = 'SELECT_ACCOMMODATION'


export const getAccommodationsByLocation = (id,page=1) => dispatch => {
    // dispatch({
    //     type: FETCH_ACCOMMODATIONS_PENDING
    //   })
  return API.get(`/accommodations/location/${id}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_BY_LOCATION,
        payload: res.data.accommodations,
        id:id
      })
    }
    )
    .catch(err => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR,
        error: err
      })
    })
}

export const selectAccommodation= (id) => dispatch => {
  dispatch({
      type: SELECT_ACCOMMODATION,
      payload:id
    })
}