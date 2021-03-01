import axios from 'axios';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const getVerifiedUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS_PENDING
  });
  const GET_USERS = axios.get(`${process.env.REACT_APP_BACKEND_LINK}//assignUserstoManager/verified-users`, {
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
