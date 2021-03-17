import {
  MANAGER_SELECTED_TO_QUEUE, ASSIGNING_USERS_CANCELED, ASSIGNING_USERS_PENDING, assignUsersToManagers
} from "../actions/managerSelectedActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case MANAGER_SELECTED_TO_QUEUE:
      return {
        ...state,
        [action.userId]: {
          managerId: action.managerId,
          status: 'pending'
        }
      };
      case ASSIGNING_USERS_CANCELED:
        // return { }; // refresh the select DOM elements
      case ASSIGNING_USERS_PENDING:
        const newState = assignUsersToManagers(state);
        console.log({newState: newState});
        return newState;
    default:
      return state;
  }
};
