import {BOOK_ACCOMMODATIONS_PENDING , BOOK_ACCOMMODATIONS_SUCCESS,BOOK_ACCOMMODATIONS_ERROR,CLEAR_BOOK_SNACKBAR} from '../actions/bookAccommodationAction'

const initialState = {
  pending: false,
  snackBarMessage: {
    open: false,
    severity: '',
    message: null
  }
}

export function bookAccommodationsReducer(state = initialState, action){
  switch(action.type){
    case BOOK_ACCOMMODATIONS_PENDING:
      return {
        ...state,
        pending: true
      }
    case BOOK_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        snackBarMessage: {
            open: true,
            severity: 'success',
            message: action.message
          }
      }
    case BOOK_ACCOMMODATIONS_ERROR:
        return {
          ...state,
          pending: false,
          snackBarMessage: {
            open: true,
            severity: 'error',
            message: "Booking accommodation failed Please try again"
          }
        }
    case CLEAR_BOOK_SNACKBAR:
        return{
            ...state,
            snackBarMessage:{
            open: false,
            severity: '',
            message: null
            }
        }
    default:
      return state
  } 
 

}