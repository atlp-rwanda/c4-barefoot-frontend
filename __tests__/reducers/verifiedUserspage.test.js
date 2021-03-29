import fetchVerifiedUsersPage from '../../src/redux/reducers/fetchVerifiedUsersPage';
import * as actions from '../../src/redux/actions/assignUserActions';

describe('CHANGE USERSLIST PAGE reducer', () => {
  const initialState = 1;

  it('Should get initial state', () => {
    expect(fetchVerifiedUsersPage(undefined, {})).toEqual(initialState)
  });

  it('Should handle FETCH_USERS_PAGE_CHANGE', () => {
    expect(fetchVerifiedUsersPage(initialState, { type: actions.FETCH_USERS_PAGE_CHANGE, page: 3 }))
    .toEqual(3);
  });
});
