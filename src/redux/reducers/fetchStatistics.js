import {
  FETCH_STATISTICS_ERROR, FETCH_STATISTICS_PENDING, FETCH_STATISTICS_SUCCESS
} from '../actions/fetchStatisticsAction';

const initialState = {
  pending: false
};

const fetchStatistics = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATISTICS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_STATISTICS_ERROR:
      return {
        ...state,
        pending: false,
          error: action.err
      };
    case FETCH_STATISTICS_SUCCESS:
      return {
        ...state,
        pending: false,
        statistics: action.statistics
      };
    default:
      return state;
  };
};

export default fetchStatistics;
