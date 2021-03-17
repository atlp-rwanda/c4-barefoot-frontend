export const ASSIGNING_USERS_ERROR = 'ASSIGNING_USERS_ERROR';
export const ASSIGNING_USERS_SUCCESS = 'ASSIGNING_USERS_SUCCESS';

export const SHOW_RESULT_MESASGE = 'SHOW_RESULT_MESASGE';

export const assignUsersError = () => dispatch => {
  return dispatch({
    type: ASSIGNING_USERS_ERROR,
  });
};

export const assignUsersSuccess = () => dispatch => {
  return dispatch({
    type: ASSIGNING_USERS_SUCCESS,
  });
};

export const showMessage = () => dispatch => {
  return dispatch({
    type: SHOW_RESULT_MESASGE
  });
};
