import assignUsers from '../../src/redux/reducers/addAssignActionToQueue';
import * as actions from '../../src/redux/actions/managerSelectedActions';

describe('ASSIGN USER TO MANAGER reducer', () => {
  const initialState = {
    loading: false,
    loaded: false,
    errors: [],
    success: []
  };

  it('Should get initial state', () => {
    expect(assignUsers(undefined, {})).toEqual(initialState)
  });

  it('Should handle MANAGER_SELECTED_TO_QUEUE', () => {
    expect(assignUsers(initialState, {
      type: actions.MANAGER_SELECTED_TO_QUEUE,
      userId: '1234',
      managerId: 'asdf'
    })).toEqual({
      ...initialState,
      pendingTasks: {
        '1234': {
          managerId: 'asdf',
          status: 'pending'
        }
      }
    })
  });

  it('Should handle ASSIGNING_USERS_CANCELED', () => {
    expect(assignUsers({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        }
      }, {
        type: actions.ASSIGNING_USERS_CANCELED
      }))
      .toEqual({
        ...initialState,
        pendingTasks: undefined
      });
  });

  it('Should handle ASSIGNING_USERS_PENDING', () => {
    expect(assignUsers({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        }
      }, {
        type: actions.ASSIGNING_USERS_PENDING
      }))
      .toEqual({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        },
        loading: true
      });
  });

  it('Should handle ASSIGNING_USERS_ERROR', () => {
    expect(assignUsers({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        }
      }, {
        type: actions.ASSIGNING_USERS_ERROR,
        errors: ['Forbidden', 'ForTrump'],
        success: ['ForFrank']
      }))
      .toEqual({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        },
        loading: false,
        loaded: true,
        errors: ['Forbidden', 'ForTrump'],
        success: ['ForFrank']
      });
  });

  it('Should handle ASSIGNING_USERS_ERROR', () => {
    expect(assignUsers({
        ...initialState,
        pendingTasks: {
          '1234': {
            managerId: 'asdf',
            status: 'pending'
          }
        }
      }, {
        type: actions.ASSIGNING_USERS_SUCCESS,
        errors: ['Forbidden', 'ForTrump'],
        success: ['ForFrank']
      }))
      .toEqual({
        ...initialState,
        pendingTasks: undefined,
        loading: false,
        loaded: true,
        errors: ['Forbidden', 'ForTrump'],
        success: ['ForFrank']
      });
  });
});
