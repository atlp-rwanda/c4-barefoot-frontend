import axios from 'axios';

export const FETCH_STATISTICS_PENDING = 'FETCH_STATISTICS_PENDING';
export const FETCH_STATISTICS_ERROR = 'FETCH_STATISTICS_ERROR';
export const FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS';

export const getStatistics = () => async (dispatch) => {
  dispatch({
    type: FETCH_STATISTICS_PENDING
  });
  const GET_STATS = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/statistics`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('barefootUserToken')
    }
  }).catch((err) => {
    dispatch({
      type: FETCH_STATISTICS_ERROR,
      error: err.toJSON()
    });
  });
  if(GET_STATS) {
    dispatch({
      type: FETCH_STATISTICS_SUCCESS,
      statistics: GET_STATS.data
    });
  };
};
