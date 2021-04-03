import fetchVisitors from '../../src/redux/reducers/fetchVisitors';
import {
  FETCH_VISITORS_LIST_PENDING,
  FETCH_VISITORS_LIST_ERROR,
  FETCH_VISITORS_LIST_SUCCESS
} from '../../src/redux/actions/fetchVisitorsAction';

describe('fetchVisitors reducer', () => {
  const initialState = {
    pending: false,
    count: undefined
  };
  it('Should get initial state', () => {
    expect(fetchVisitors(undefined, {})).toEqual(initialState);
  });

  it('Should handle FETCH', () => {
    expect(fetchVisitors(initialState, {
      type: FETCH_VISITORS_LIST_PENDING,
    })).toEqual({
      ...initialState,
      pending: true
    });
  });

  it('Should handle FETCH_VISITORS_LIST_ERROR', () => {
    expect(fetchVisitors(initialState, {
      type: FETCH_VISITORS_LIST_ERROR,
      pending: true,
      err: 'Fatal'
    })).toEqual({
      ...initialState,
      pending: false,
      error: 'Fatal'
    });
  });

  it('Should handle FETCH_VISITORS_LIST_SUCCESS', () => {
    expect(fetchVisitors(initialState, {
      type: FETCH_VISITORS_LIST_SUCCESS,
      pending: true,
      list: ['1', '2', '0']
    })).toEqual({
      ...initialState,
      pending: false,
      count: 3
    });
  });
});
