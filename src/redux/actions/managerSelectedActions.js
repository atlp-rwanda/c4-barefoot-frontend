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

export const handleAssignError = (action) => {
  console.log(action);
}

export const assignUsersToManagers = async (state) => {
  const users = Object.keys(state);
  const requests = users.map(async user => {
      const ASSIGN_REQUEST = axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/assignUserstoManager/verified-users/${user}`, '', {
        headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiNzI1NGE5ZTctMmUxYi00ZjgzLWFkNzMtNzhiOTBkZDNkZjc3IiwidXNlcm5hbWUiOiJtYW5hZ2VyT25lIiwiaWF0IjoxNjE0NzQyNjAxLCJleHAiOjE2MTUzNDc0MDF9.h1Eu6WjVthYy4LyVmfBJ7TXl-21Go-uHctVX4H3HuYQ'
        },
        params: {
          manager_id: state[user].managerId
        }
    });
    ASSIGN_REQUEST.catch(err => {
      return handleAssignError({
        type: ASSIGNING_USERS_ERROR,
        userId: user,
        managerId: state[user].managerId,
        error: err
      });
    });

    const res = await ASSIGN_REQUEST;
    console.log({res});
    if(ASSIGN_REQUEST) {
      // return dispatch({
      //   type: ASSIGNING_USERS_SUCCESS,
      //   userId
      // });
    }
  });
  // console.log(requests);
  console.log(Promise.all(requests));
  return state;
};
