import {API} from './AxiosAPI';
const token = window.localStorage.getItem('barefootUserToken')
export const BOOK_ACCOMMODATIONS_PENDING = 'BOOK_ACCOMMODATIONS_PENDING'
export const BOOK_ACCOMMODATIONS_SUCCESS = 'BOOK_ACCOMMODATIONS_SUCCESS'
export const BOOK_ACCOMMODATIONS_ERROR = 'BOOK_ACCOMMODATIONS_ERROR'
export const CLEAR_BOOK_SNACKBAR = 'CLEAR_BOOK_SNACKBAR'


export const bookAccommodations=(id,formData,nextStep) => dispatch => {
    dispatch({
        type: BOOK_ACCOMMODATIONS_PENDING
      })
  return API.post(`/accommodations/book/${id}`,formData,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch({
        type: BOOK_ACCOMMODATIONS_SUCCESS,
        message:res.data.message
      })
      nextStep()
    }
    )
    .catch(err => {
      dispatch({
        type: BOOK_ACCOMMODATIONS_ERROR,
        error: err
      })
    })
}

export const clearBookSnackbar = () => dispatch => {
    dispatch({
      type: CLEAR_BOOK_SNACKBAR
    })
  }
