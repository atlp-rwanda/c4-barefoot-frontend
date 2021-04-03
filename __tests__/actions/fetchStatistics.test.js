import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/fetchStatisticsAction';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('FETCH STATISTICS actions', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({
      fetchAccommodations: {}
    });
  });
  afterEach(() => moxios.uninstall());

  it('handles FETCH_STATISTICS_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: 'valid data'
        }
      });
    });
    return store.dispatch(actions.getStatistics()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(actions.FETCH_STATISTICS_PENDING);
      expect(expectedActions[1].type).toEqual(actions.FETCH_STATISTICS_SUCCESS);
    });
  });

  it('handles FETCH_STATISTICS_ERROR', () => {
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
    return store.dispatch(actions.getStatistics()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(actions.FETCH_STATISTICS_PENDING);
      expect(expectedActions[1].type).toEqual(actions.FETCH_STATISTICS_ERROR);
    });
  });
});
