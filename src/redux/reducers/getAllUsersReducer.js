import {
  FETCH_ALL_USERS_SUCCESS, FETCH_ALL_USERS_ERROR, FETCH_ALL_USERS_PENDING
} from '../actions/fetchAllUsers';

const initialState = {
  count: undefined,
  pending: false
};

const getAllUsers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_ALL_USERS_ERROR:
      return {
        ...state,
        pending: false,
          error: action.err
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        count: action.data.users.count
      };
    default:
      return state;
  };
};

export default getAllUsers;
