import {
  RETRIEVE_COMMENTS_SUCCESS,
  RETRIEVE_COMMENTS_FAIL,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAIL,
} from "../actions/CommentActon";

const initialState = {
  comments: [],
  currentComment: {},
  error: {},
  status: "",
  loading:false
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading:true, status: "comment_retrieve_success" };
    case RETRIEVE_COMMENTS_FAIL:
      return { ...state, error: action.payload, loading:false, status: "comment_retrieve_fail" };
    case SUBMIT_COMMENT_SUCCESS:
      return { ...state, currentComment: action.payload, loading:true,  status: "comment_submit_success" };
    case SUBMIT_COMMENT_FAIL:
      return { ...state, error: action.payload,loading:false, status: "comment_submit_fail" };
    default:
      return state;
  }
};
export default commentReducer;
