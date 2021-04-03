import axios from 'axios';

export const FETCH_ALL_USERS_PENDING = 'FETCH_ALL_USERS_PENDING';
export const FETCH_ALL_USERS_ERROR = 'FETCH_ALL_USERS_ERROR';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_USERS_PENDING
  });
  const GET_USERS = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/admin/users`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('barefootUserToken')
    }
  }).catch((err) => {
    dispatch({
      type: FETCH_ALL_USERS_ERROR,
      error: err.toJSON()
    });
  });
  if(GET_USERS) {
    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      data: GET_USERS.data
    })
  }
};
