import axios from 'axios';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const FETCH_MANAGERS_PENDING = 'FETCH_MANAGERS_PENDING';
export const  FETCH_MANAGERS_SUCCESS = 'FETCH_MANAGERS_SUCCESS';
export const FETCH_MANAGERS_ERROR = 'FETCH_MANAGERS_ERROR';

export const getVerifiedUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS_PENDING
  });
  const GET_USERS = axios.get(`${process.env.REACT_APP_BACKEND_LINK}/assignUserstoManager/verified-users`, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('barefootUserToken')
      },
      params: {
        page: 1
      }
  });
  GET_USERS.catch(err => {
    return dispatch({
      type: FETCH_USERS_ERROR,
      error: err
    });
  });
  const { verifiedUsers } = (await GET_USERS).data;
  if(GET_USERS) {
    return dispatch({
      type: FETCH_USERS_SUCCESS,
      verifiedUsers
    });
  }
};

export const getManagersList = () => async (dispatch) => {
  dispatch({
    type: FETCH_MANAGERS_PENDING
  });
  const GET_MANAGERS = axios.get(`${process.env.REACT_APP_BACKEND_LINK}/assignUserstoManager/verified-users/managers`, {
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('barefootUserToken')
      }
  });
  GET_MANAGERS.catch(err => {
    return dispatch({
      type: FETCH_MANAGERS_ERROR,
      error: err
    });
  });
  const { getAllManagers } = (await GET_MANAGERS).data;
  if(getAllManagers) {
    return dispatch({
      type: FETCH_MANAGERS_SUCCESS,
      getAllManagers
    });
  }
};
