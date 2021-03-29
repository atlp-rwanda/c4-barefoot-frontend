import axios from 'axios';

export const MANAGER_SELECTED_TO_QUEUE = 'MANAGER_SELECTED_TO_QUEUE';
export const MANAGER_SELECTED_ERROR = 'MANAGER_SELECTED_ERROR';
export const MANAGER_SELECTED_SUCCESS = 'MANAGER_SELECTED_SUCCESS';

export const ASSIGNING_USERS_PENDING = 'ASSIGNING_USERS_PENDING';
export const ASSIGNING_USERS_ERROR = 'ASSIGNING_USERS_ERROR';
export const ASSIGNING_USERS_SUCCESS = 'ASSIGNING_USERS_SUCCESS';
export const ASSIGNING_USERS_CANCELED = 'ASSIGNING_USERS_CANCELED';

export const addUsersToAssignQueue = (userId, managerId) => {
  return {
    type: MANAGER_SELECTED_TO_QUEUE,
    userId,
    managerId
  }
};

export const assignUsersFromQueue = (state) => async (dispatch) => {
  dispatch({
    type: ASSIGNING_USERS_PENDING
  });
  const users = Object.keys(state);
  const errors = [];
  const success = [];
  const requests = users.map(async user => {
    const ASSIGN_REQUEST = await axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/assignUserstoManager/verified-users/${user}`, '', {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('barefootUserToken')
      },
      params: {
        manager_id: state[user].managerId
      }
    }).then((res) => {
      success.push({
        type: ASSIGNING_USERS_SUCCESS,
        userId: user,
        managerId: state[user].managerId,
        message: res
      });
    });
    ASSIGN_REQUEST.catch(err => {
      errors.push({
          type: ASSIGNING_USERS_ERROR,
          userId: user,
          managerId: state[user].managerId,
          error: err
      });
    });
  });
  const ASSIGNING_ALL = await Promise.all([...requests])
    .catch(err => {
      return err;
    })
    .then((res) => {
      return res;
    });
  if(ASSIGNING_ALL) {
    errors.length === 0
    ? dispatch({type: ASSIGNING_USERS_SUCCESS, errors, success})
    : dispatch({type: ASSIGNING_USERS_ERROR, errors, success});
  }
};

export const cancelAllQueue = (dispatch) => {
  console.log({ASSIGNING_USERS_CANCELED});
  dispatch({
    type: ASSIGNING_USERS_CANCELED
  });
};
