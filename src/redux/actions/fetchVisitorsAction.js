import axios from 'axios';
import { FETCH_SINGLE_TRAVEL_REQUEST_SUCCESS } from './singleTravelAction';

export const FETCH_VISITORS_LIST_PENDING = 'FETCH_VISITORS_LIST_PENDING';
export const FETCH_VISITORS_LIST_ERROR = 'FETCH_VISITORS_LIST_ERROR';
export const FETCH_VISITORS_LIST_SUCCESS = 'FETCH_VISITORS_LIST_SUCCESS';

export const getVisitors = () => async (dispatch) => {
  dispatch({
    type: FETCH_VISITORS_LIST_PENDING
  });
  const GET_VLIST = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/visitors`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('barefootUserToken')
    }
  }).catch((err) => {
    dispatch({
      type: FETCH_VISITORS_LIST_ERROR,
      error: err.toJSON()
    });
  });
  if(GET_VLIST) {
    dispatch({
      type: FETCH_VISITORS_LIST_SUCCESS,
      list: GET_VLIST.data
    });
  };
};
