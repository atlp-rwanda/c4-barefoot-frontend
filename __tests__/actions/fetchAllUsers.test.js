import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/fetchAllUsers';
import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('FETCH ALL USERS actions', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({
      fetchAccommodations: {}
    });
  });
  afterEach(() => moxios.uninstall());

  it('handles FETCH_ALL_USERS_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {users: {count: 1}}
        },
        data: {users: {count: 1}}
      });
    });
    return store.dispatch(actions.getAllUsers()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(actions.FETCH_ALL_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(actions.FETCH_ALL_USERS_SUCCESS);
    });
  });

  it('handles FETCH_ALL_USERS_ERROR', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          data: 'internal server error',
        },
        toJSON: () => ({err: 'stringified Fatal'})
      });
    });
    return store.dispatch(actions.getAllUsers()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(actions.FETCH_ALL_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(actions.FETCH_ALL_USERS_ERROR);
    });
  });
});
