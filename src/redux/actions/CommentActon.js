import axios from 'axios'

export const RETRIEVE_COMMENTS_PENDING = "RETRIEVE_COMMENTS_PENDING"
export const RETRIEVE_COMMENTS_SUCCESS = "RETRIEVE_COMMENTS_SUCCESS"
export const RETRIEVE_COMMENTS_FAIL = "RETRIEVE_COMMENTS_FAIL"
export const SUBMIT_COMMENT_PENDING = "SUBMIT_COMMENT_PENDING"
export const SUBMIT_COMMENT_SUCCESS = "SUBMIT_COMMENT_SUCCESS"
export const SUBMIT_COMMENT_FAIL = "SUBMIT_COMMENT_FAIL"
  // import httpservice from "../../services/httpServices";
  
  const token = localStorage.getItem('barefootUserToken')
  export const retrieveComments = (requestId) => async (dispatch) => {
    dispatch({
      type: RETRIEVE_COMMENTS_PENDING
    })
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/comment/${requestId}`, {
      headers:{
          Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        dispatch({
          type: RETRIEVE_COMMENTS_SUCCESS,
          payload: res.data
        })
        }
      )
      .catch(err => {
        dispatch({
          type: RETRIEVE_COMMENTS_FAIL,
          error: err.data
        })
      })
  };
  
  export const submitComment = (requestId, data) => async (dispatch) => {
    dispatch({
      type: SUBMIT_COMMENT_PENDING
    })
    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/comment/${requestId}`, data, {
      headers:{
          Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        dispatch({
          type: SUBMIT_COMMENT_SUCCESS,
          payload: res.data
        })
        }
      )
      .catch(err => {
        dispatch({
          type: SUBMIT_COMMENT_FAIL,
          error: err.data
        })
      })
  };
  