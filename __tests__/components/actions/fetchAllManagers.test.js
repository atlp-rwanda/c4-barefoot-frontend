import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Assigning from '../../../src/redux/actions/assignUserActions';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('FETCH VERIFIED USERS actions', () => {
  let store;
  const allManagers ={
    "title": "Managers",
    "getAllManagers": [
        {
            "id": "fb94de4d-47ff-4079-89e8-b0186c0a3be8",
            "first_name": "Manager",
            "last_name": "Two",
            "profile_picture": "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
            "email": "managertwo@gmail.com",
            "username": "managertwo",
            "address": "Kigali",
            "user_role": {
                "id": "7254a9e7-2e1b-4f83-ad73-78b90dd3df77",
                "name": "manager",
                "description": null,
                "createdAt": "2021-03-16T07:31:59.564Z",
                "updatedAt": "2021-03-16T07:31:59.564Z"
            }
        }
    ]
};
  beforeEach(() => {
    moxios.install();
    store = mockStore({
      fetchVerifiedUsers: {},
      fetchAllManagers: {},
      fetchVerifiedUsersPage: {}
    });
  });
  afterEach(() => moxios.uninstall());

  it('Creates FETCH_MANAGERS_SUCCESS action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(allManagers);
    });
    store.dispatch(Assigning.getManagersList()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(Assigning.FETCH_MANAGERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.FETCH_MANAGERS_SUCCESS);
    });
  });

  it('Creates FETCH_MANAGERS_ERROR action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        message: 'Fatal Error!'
      });
    });
    store.dispatch(Assigning.getVerifiedUsers(1)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(Assigning.FETCH_MANAGERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.FETCH_USERS_ERROR);
    });
  });
});
