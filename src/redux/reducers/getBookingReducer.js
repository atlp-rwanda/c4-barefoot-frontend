import { GET_BOOKING_SUCCESS,GET_BOOKING_ERROR,GET_BOOKING_PENDING
} from '../actions/bookAccommodationAction'
  
const initState = {
    pending: false,
    success: false,
    bookedAccommodation:[],
    error:''
  }
  
  export const getBookingsReducer=(state = initState, action)=> {
    
    switch (action.type) {
      case GET_BOOKING_PENDING:
        return {
          ...state,
          pending:true
        }
        case GET_BOOKING_SUCCESS:
            // console.log(action.payload)
          return {
            ...state,
            success: true,
            pending:false,
            bookedAccommodation: action.payload
        }
        case GET_BOOKING_ERROR:
          return {
            ...state,
            success: false,
            pending:false,
            error:action.payload
        }
      default:
        return {
          ...state
        }
    }
  }