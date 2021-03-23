import {
  RETRIEVE_COMMENTS,
  RETRIEVE_COMMENTS_FAIL,
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_FAIL,
} from "../actions/actionType";

const initialState = {
  comments: [],
  currentComment: {},
  error: {},
  status: "",
  loading:false
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_COMMENTS:
      return { ...state, comments: action.payload, loading:true, status: "comment_retrieve_success" };
    case RETRIEVE_COMMENTS_FAIL:
      return { ...state, error: action.payload, loading:false, status: "comment_retrieve_fail" };
    case SUBMIT_COMMENT:
      return { ...state, currentComment: action.payload, loading:true,  status: "comment_submit_success" };
    case SUBMIT_COMMENT_FAIL:
      return { ...state, error: action.payload,loading:false, status: "comment_submit_fail" };
    default:
      return state;
  }
};
export default commentReducer;
import {FETCH_ACCOMMODATIONS_PENDING, FETCH_ACCOMMODATIONS_SUCCESS, FETCH_ACCOMMODATIONS_ERROR} from '../actions/fetchAccommodations'

const initialState = {
  pending: false,
  accommodations: [],
  error: null
}

export function fetchAccommodationsReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ACCOMMODATIONS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: action.payload
      }
    case FETCH_ACCOMMODATIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  } 
 

}
