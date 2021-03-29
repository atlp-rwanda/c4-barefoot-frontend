import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as Assigning from '../../../src/redux/actions/managerSelectedActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('SELECT AND ASSIGN MANAGERS actions', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({
      addAssignActionToQueue: {}
    });
  });
  afterEach(() => moxios.uninstall());


  it('Creates MANAGER_SELECTED_TO_QUEUE action', () => {
    const expectedActions = Assigning.addUsersToAssignQueue('user1', 'manager1');
    expect(expectedActions.type).toEqual(Assigning.MANAGER_SELECTED_TO_QUEUE)
  });

  it('Creates ASSIGNING_USERS_SUCCESS action', () => {
    let pendingTasks = {
      '1234': {managerId: 'asdf-asdf', status: 'pending'}
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        message: 'Users were assigned to respective managers'
      });
    });
    store.dispatch(Assigning.assignUsersFromQueue(pendingTasks)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(Assigning.ASSIGNING_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.ASSIGNING_USERS_SUCCESS);
    });
  });

  it('Creates FETCH_USERS_ERROR action', () => {
    let pendingTasks = {
      '1234': {managerId: 'asdf-asdf', status: 'pending'}
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        message: 'Bad userId'
      });
    });
    store.dispatch(Assigning.assignUsersFromQueue(pendingTasks)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(Assigning.ASSIGNING_USERS_PENDING);
      expect(expectedActions[1].type).toEqual(Assigning.ASSIGNING_USERS_ERROR);
    });
  });
});
