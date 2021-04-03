import fetchStatistics from '../../src/redux/reducers/fetchStatistics';
import {
  FETCH_STATISTICS_PENDING,
  FETCH_STATISTICS_ERROR,
  FETCH_STATISTICS_SUCCESS
} from '../../src/redux/actions/fetchStatisticsAction';

describe('fetchStatistics reducer', () => {
  const initialState = {
    pending: false
  };
  it('Should get initial state', () => {
    expect(fetchStatistics(undefined, {})).toEqual(initialState);
  });

  it('Should handle FETCH', () => {
    expect(fetchStatistics(initialState, {
      type: FETCH_STATISTICS_PENDING,
    })).toEqual({
      ...initialState,
      pending: true
    });
  });

  it('Should handle FETCH_STATISTICS_ERROR', () => {
    expect(fetchStatistics(initialState, {
      type: FETCH_STATISTICS_ERROR,
      pending: true,
      err: 'Fatal'
    })).toEqual({
      ...initialState,
      pending: false,
      error: 'Fatal'
    });
  });

  it('Should handle FETCH_STATISTICS_SUCCESS', () => {
    expect(fetchStatistics(initialState, {
      type: FETCH_STATISTICS_SUCCESS,
      pending: true,
      statistics: ['1', '2', '0']
    })).toEqual({
      ...initialState,
      pending: false,
      statistics: ['1', '2', '0']
    });
  });
});
