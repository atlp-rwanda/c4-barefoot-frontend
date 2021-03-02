import {FETCH_ROLES_SUCCESS, FETCH_ROLES_ERROR} from '../actions/fetchRolesAction'
import {DELETE_ROLE_SUCCESS, DELETE_ROLE_PENDING, DELETE_ROLE_ERROR, CLEAR_SNACKBAR,EDIT_ROLE,CLEAN_ROLE,UPDATE_ROLE,UPDATE_ROLE_FAILED} from '../actions/fetchRolesAction'

const initialState = {
  pending: true,
  roles: {},
  error: null,
  load: false,
  snackBarMessage: {
    open: false,
    severity: '',
    message: null
  },
  role:null
}

export function RolesReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        pending: false,
        roles: action.payload
      }
    case FETCH_ROLES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    case UPDATE_ROLE_FAILED:
      return {
      ...state,
      pending: false,
      error: action.error
    }

    case UPDATE_ROLE:
      return {
      ...state,
      pending: false,
      snackBarMessage: {
        open: true,
        severity: 'success',
        message: 'Role updated successfully!'
      },
      role:null
    }

    case DELETE_ROLE_PENDING:
      return {
        ...state,
        load: true
      }
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        load: false,
        roles: {
          ...state.roles,
          rows: [...state.roles.rows.slice(0, action.payload), ...state.roles.rows.slice(action.payload + 1)]
        },
        snackBarMessage: {
          open: true,
          severity: 'success',
          message: 'Role deleted successfully!'
        }
      }
      case EDIT_ROLE:
        const loop = ()=>{
          for(let i=0;i<state.roles.rows.length;i++){
            if(state.roles.rows[i].id == action.id){
              return state.roles.rows[i];
            }
        }
      }
      const role=loop();
        return {
          ...state,
          role: role
        }
      case CLEAN_ROLE:
        
        return {
          ...state,
          role: null
        }
    case DELETE_ROLE_ERROR:
      return{
        ...state,
        load: false,
        error: action.error,
        snackBarMessage: {
          open: true,
          severity: 'error',
          message: action.error
        }
      }
    case CLEAR_SNACKBAR:
      return{
        ...state,
        snackBarMessage: {
          open: false,
          severity: '',
          message: null
        }
        
      }
    default:
      return state
  } 
 

}