import {
  MANAGER_SELECTED_TO_QUEUE, ASSIGNING_USERS_CANCELED, ASSIGNING_USERS_PENDING, ASSIGNING_USERS_SUCCESS, ASSIGNING_USERS_ERROR
} from "../actions/managerSelectedActions";

const initialState = { loading: false, loaded: false, errors: [], success: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case MANAGER_SELECTED_TO_QUEUE:
      return {
        ...state,
        pendingTasks: {
          ...state.pendingTasks,
          [action.userId]: {
            managerId: action.managerId,
            status: 'pending'
          }
        }
      };
    case ASSIGNING_USERS_CANCELED:
      return {
        ...state,
        pendingTasks: undefined,
        errors: [],
        success: [],
        loaded: false
      };
    case ASSIGNING_USERS_PENDING:
      return {
        ...state,
        loading: true
      };
    case ASSIGNING_USERS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: action.errors,
        success: action.success
      };
    case ASSIGNING_USERS_SUCCESS:
      return {
        ...state,
        pendingTasks: undefined,
        loading: false,
        loaded: true,
        errors: action.errors,
        success: action.success
      };
    default:
      return state;
  }
};
