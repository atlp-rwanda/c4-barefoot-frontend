import { fetchAllManagers } from '../../src/redux/reducers/assignUserReducers';
import * as actions from '../../src/redux/actions/assignUserActions';

describe('FETCH VERIFIED MANAGERS reducer', () => {
  const initialState = {
    pending: false,
    error: null,
    getAllManagers: [ ],
    loaded: false
  };

  it('Should get initial state', () => {
    expect(fetchAllManagers(undefined, {})).toEqual(initialState)
  });

  it('Should handle FETCH_MANAGERS_ERROR', () => {
    expect(fetchAllManagers({
        ...initialState,
        pending: true
      }, {
      type: actions.FETCH_MANAGERS_ERROR,
      error: 'Fatal'
    })).toEqual({
      ...initialState,
      pending: false,
      error: 'Fatal'
    });
  });

  it('Should handle FETCH_MANAGERS_PENDING', () => {
    expect(fetchAllManagers(initialState, { type: actions.FETCH_MANAGERS_PENDING }))
      .toEqual({
        ...initialState,
        pending: true,
    });
  });

  it('Should handle FETCH_MANAGERS_SUCCESS', () => {
    expect(fetchAllManagers({...initialState, pending: true}, 
      { type: actions.FETCH_MANAGERS_SUCCESS, getAllManagers: { count: 1, rows: ['one', 'two']} }
      ))
      .toEqual({
        ...initialState,
        pending: false,
        getAllManagers: {
          count: 1,
          rows: ['one', 'two']
        }
    });
  });
});
