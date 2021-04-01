<<<<<<< HEAD
import {
  BOOK_ACCOMMODATIONS_PENDING, BOOK_ACCOMMODATIONS_SUCCESS, BOOK_ACCOMMODATIONS_ERROR,
  CLEAR_BOOK_SNACKBAR, GET_BOOKING_SUCCESS,GET_BOOKING_ERROR,GET_BOOKING_PENDING
} from '../actions/bookAccommodationAction'
=======
import {BOOK_ACCOMMODATIONS_PENDING , BOOK_ACCOMMODATIONS_SUCCESS,BOOK_ACCOMMODATIONS_ERROR,CLEAR_BOOK_SNACKBAR} from '../actions/bookAccommodationAction'
>>>>>>> 5dae83f... complition the multistep form and adding loader

const initialState = {
  pending: false,
  snackBarMessage: {
    open: false,
    severity: '',
    message: null
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 5dae83f... complition the multistep form and adding loader
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
            severity: 'err',
            message: action.error
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