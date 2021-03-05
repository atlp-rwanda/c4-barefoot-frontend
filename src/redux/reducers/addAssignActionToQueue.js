import {
  MANAGER_SELECTED_TO_QUEUE, ASSIGNING_USERS_CANCELED, ASSIGNING_USERS_PENDING, assignUsersToManagers
} from "../actions/managerSelectedActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case MANAGER_SELECTED_TO_QUEUE:
      console.log(state);
      return {
        ...state,
        [action.userId]: {
          managerId: action.managerId,
          status: 'pending'
        }
      };
      case ASSIGNING_USERS_CANCELED:
        return { };
      case ASSIGNING_USERS_PENDING:
        return assignUsersToManagers(state);
    default:
      return state;
  }
};
