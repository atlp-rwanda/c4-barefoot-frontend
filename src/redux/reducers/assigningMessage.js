import { ASSIGNING_USERS_ERROR, ASSIGNING_USERS_SUCCESS } from "../actions/assigningUserToManager";

const types = {
  success: 'success',
  error: 'error',
  pending: 'pending'
};

const initialState = {
  type: '',
  show: true,
  message: {}
};

const assigningMessage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ASSIGNING_USERS_ERROR:
      return {
        type: types.error,
        show: true
      };
    case ASSIGNING_USERS_SUCCESS:
      return {
        type: types.success,
        show: true
      };
  }
};

export default assigningMessage;
