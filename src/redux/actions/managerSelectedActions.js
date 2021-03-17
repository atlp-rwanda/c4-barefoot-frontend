import axios from 'axios';
import { useDispatch } from 'react-redux';
import React from 'react';

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

export const assignUsersFromQueue = (dispatch) => {
  dispatch({
    type: ASSIGNING_USERS_PENDING
  });
};

export const cancelAllQueue = (dispatch) => {
  console.log({ASSIGNING_USERS_CANCELED});
  dispatch({
    type: ASSIGNING_USERS_CANCELED
  });
};

export const assignUsersToManagers = async (state) => {
  const users = Object.keys(state);
  const errors = [];
  const success = [];
  const requests = users.map(async user => {
      const ASSIGN_REQUEST = axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/assignUserstoManager/verified-users/${user}`, '', {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('barefootUserToken')
        },
        params: {
          manager_id: state[user].managerId
        }
    });
    ASSIGN_REQUEST.catch(err => {
      errors.push({
          type: ASSIGNING_USERS_ERROR,
          userId: user,
          managerId: state[user].managerId,
          error: err
        });
    });

    const res = await ASSIGN_REQUEST;
    if(res) {
      success.push({
        type: ASSIGNING_USERS_SUCCESS,
        userId: user,
        managerId: state[user].managerId,
      });
    };
  });
  const ASSIGNING_MESSAGE = await Promise.all(requests)
    .catch(err => {
      console.log(err);
      return { type: 'error', errors, success, err };
    })
    .then((res) => {
      return { type: errors.length === 0 ? 'success' : 'errors', success, errors, res};
    });
    console.log({ASSIGNING_MESSAGE});
  return ASSIGNING_MESSAGE;
};
