import { fetchVerifiedUsers } from '../../src/redux/reducers/assignUserReducers';
import * as actions from '../../src/redux/actions/assignUserActions';

describe('FETCH VERIFIED USERS reducer', () => {
  const initialState = {
    page: 1,
    pending: false,
    error: null,
    verifiedUsers: { count: 0, rows: [], loaded: false }
  };

  it('Should get initial state', () => {
    expect(fetchVerifiedUsers(undefined, {})).toEqual(initialState)
  });

  it('Should handle FETCH_USERS_ERROR', () => {
    expect(fetchVerifiedUsers({
        ...initialState,
        pending: true
      }, {
      type: actions.FETCH_USERS_ERROR,
      page: 7,
      error: 'Fatal'
    })).toEqual({
      ...initialState,
      pending: false,
      page: 7,
      error: 'Fatal'
    });
  });

  it('Should handle FETCH_USERS_PENDING', () => {
    expect(fetchVerifiedUsers(initialState, { type: actions.FETCH_USERS_PENDING }))
      .toEqual({
        ...initialState,
        pending: true,
    });
  });

  it('Should handle FETCH_USERS_SUCCESS', () => {
    expect(fetchVerifiedUsers({...initialState, pending: true}, 
      { type: actions.FETCH_USERS_SUCCESS, verifiedUsers: { count: 1, rows: ['one', 'two']}, page: 8 }
      ))
      .toEqual({
        ...initialState,
        pending: false,
        page: 8,
        verifiedUsers: {
          count: 1,
          rows: ['one', 'two'],
          loaded: true
        }
    });
  });
});
