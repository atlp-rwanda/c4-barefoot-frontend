import {CONVERT_MONEY_ERROR,CONVERT_MONEY_SUCCESS} from '../actions/convertorAction';


const initialState = {
    money: null,
    err:null
  }
  
  export function convertorReducer(state = initialState, action){
    switch(action.type){
      case CONVERT_MONEY_SUCCESS:
        return {
          ...state,
          money: action.result
        }
      case CONVERT_MONEY_ERROR:
        return {
          ...state,
          err: action.error
        }
      default:
        return state
    } 
   
  
  }