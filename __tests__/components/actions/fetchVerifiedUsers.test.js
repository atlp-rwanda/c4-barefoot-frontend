import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Assigning from '../../../src/redux/actions/assignUserActions';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('FETCH VERIFIED USERS actions', () => {
  let store;
  const verifiedUsersResponse = {
    "status": 200,
    "message": "verified users",
    "verifiedUsers": {
      "count": 2,
      "rows": [{
          "id": "83b2a3e7-9ba4-4d3f-b3a3-d31940ee2edc",
          "first_name": "Requester",
          "last_name": "One",
          "email": "sequester@gmail.com",
          "username": "requesterOne",
          "occupation": "requester_occupation",
          "bio": null,
          "verified": true,
          "user_role_id": "45429837-ed2c-435d-bc22-ad9c5dbe3782",
          "manager_id": "fb94de4d-47ff-4079-89e8-b0186c0a3be8",
          "profile_picture": "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
          "language": "English",
          "address": "Kigali",
          "createdAt": "2021-03-16T07:32:00.556Z",
          "updatedAt": "2021-03-26T10:18:32.069Z"
        },
        {
          "id": "a9610cf3-4056-41dd-92ca-463088e23d07",
          "first_name": "Manager",
          "last_name": "Manager",
          "email": "With_LineManager@gmail.com",
          "username": "With_LineManager",
          "occupation": "manager_occupation",
          "bio": null,
          "verified": true,
          "user_role_id": "7254a9e7-2e1b-4f83-ad73-78b90dd3df77",
          "manager_id": "fb94de4d-47ff-4079-89e8-b0186c0a3be8",
          "profile_picture": "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
          "language": "English",
          "address": "Kigali",
          "createdAt": "2021-03-16T07:32:00.556Z",
          "updatedAt": "2021-03-26T10:39:35.382Z"
        }
      ]
    }
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

  it('Creates FETCH_USERS_SUCCESS action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(verifiedUsersResponse);
    });
    store.dispatch(Assigning.getVerifiedUsers(1)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0]).toEqual(Assigning.FETCH_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.FETCH_USERS_SUCCESS);
    });
  });

  it('Creates FETCH_USERS_ERROR action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        message: 'Fatal Error!'
      });
    });
    store.dispatch(Assigning.getVerifiedUsers(1)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(Assigning.FETCH_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.FETCH_USERS_ERROR);
    });
  });
});
