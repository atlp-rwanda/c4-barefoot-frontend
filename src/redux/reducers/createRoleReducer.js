import { CREATE_ROLE_ERROR, CREATE_ROLE_PENDING, CREATE_ROLE_SUCCESS, CLEAR_SNACKBAR,UPDATE_ROLE,UPDATE_ROLE_FAILED } from '../actions/createRoleAction'

const initialState ={
  pending: false,
  snackBarMessage:{
    open: false,
    severity: '',
    message: null
  },
  error: null
}

export const createRoles = (state = initialState, action) => {
  switch(action.type){
    case CREATE_ROLE_PENDING:
      return{
        ...state,
        pending: true
      }
    case CREATE_ROLE_SUCCESS:
      return{
        ...state,
        pending: false,
        snackBarMessage:{
          open:true,
          severity:"success",
          message:"Role Successfully Created!"
        } 
      }
    case CREATE_ROLE_ERROR:
      return{
        ...state,
        pending: false,
        error: action.error
      }
      case UPDATE_ROLE:
        return {
        ...state,
        pending: false,
        snackBarMessage:{
          open:true,
          severity:"success",
          message:"Role Successfully Updated!"
        } 
        }
      case UPDATE_ROLE_FAILED:
        return {
        ...state,
        pending: false,
        error: action.error
      }
    case CLEAR_SNACKBAR:
      return{
        ...state,
        snackBarMessage: false
      }
    default:
      return state
  }
}