import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/LogoutAction';
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('logout actions', () => {
  let store;

  beforeEach(() => {
    moxios.install()
    store = mockStore({logout: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates LOGOUT_SUCCESS after logout is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          data: {
            results: "data"
          }
       }
       })
    })

    return store.dispatch(actions.logoutAction('the token')).then(() => {
      const expectedActions = store.getActions();
      // console.log(store.getActions());
      expect(expectedActions[0].type).toEqual('LOGOUT_PENDING')
      expect(expectedActions[1].type).toEqual('LOGOUT_SUCCESS')
    })
  })

  // it('Dispatches FETCH_ACCOMMODATIONS_ERROR after task is unsuccessful', () => {

  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent()
  //     request.respondWith({
  //      status: 200,
  //      response: {
  //        data: {
  //         accommodations: {
  //           rows: accommodationsPayload
  //         }
  //       }
  //      }
  //      })
  //   })

  //   return store.dispatch(actions.getAccommodations()).then(() => {
  //     const expectedActions = store.getActions();
  //     expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_PENDING')
  //     expect(expectedActions[1].type).toEqual('FETCH_ACCOMMODATIONS_ERROR')
  //   })
  // })

})