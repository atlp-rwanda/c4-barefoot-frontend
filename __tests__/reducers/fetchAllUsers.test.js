import getAllUsers from '../../src/redux/reducers/getAllUsersReducer';
import {
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_ERROR,
  FETCH_ALL_USERS_SUCCESS
} from '../../src/redux/actions/fetchAllUsers';

describe('fetchAllUsers reducer', () => {
  const initialState = {
    count: undefined,
    pending: false
  };
  it('Should get initial state', () => {
    expect(getAllUsers(undefined, {})).toEqual(initialState);
  });

  it('Should handle FETCH_ALL_USERS_PENDING', () => {
    expect(getAllUsers(initialState, {
      type: FETCH_ALL_USERS_PENDING,
    })).toEqual({
      ...initialState,
      pending: true
    });
  });

  it('Should handle FETCH_ALL_USERS_ERROR', () => {
    expect(getAllUsers(initialState, {
      type: FETCH_ALL_USERS_ERROR,
      pending: true,
      err: 'Fatal'
    })).toEqual({
      ...initialState,
      pending: false,
      error: 'Fatal'
    });
  });

  it('Should handle FETCH_ALL_USERS_SUCCESS', () => {
    expect(getAllUsers(initialState, {
      type: FETCH_ALL_USERS_SUCCESS,
      pending: true,
      data: {users: {count: 7}}
    })).toEqual({
      ...initialState,
      pending: false,
      count: 7
    });
  });
});
