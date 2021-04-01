import {
  FETCH_VISITORS_LIST_ERROR,
  FETCH_VISITORS_LIST_PENDING,
  FETCH_VISITORS_LIST_SUCCESS
} from "../actions/fetchVisitorsAction";


const initialState = {
  pending: false,
  count: undefined
};

const fetchVisitors = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VISITORS_LIST_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_VISITORS_LIST_ERROR:
      return {
        ...state,
        pending: false,
          error: action.err
      };
    case FETCH_VISITORS_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
          count: action.list.length
      };
    default:
      return state;
  };
};

export default fetchVisitors;
