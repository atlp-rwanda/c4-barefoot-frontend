import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getTripHistory} from '../../src/redux/actions/userTravelHistoryAction';
// import { accommodationsPayload } from '../../dummyData'
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)
describe('Fetch trip actions', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({userTravelHistory: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates FETCH_TRIP_HISTORY_SUCCESS after task is successful', () => {
    mock.onGet(`${URL}/trips`)
    .reply(200,{response:{trips:tripsPayload}})
    store.dispatch(getTripHistory()).then((res)=>{
      const action=[{type:'FETCH_TRIP_HISTORY_SUCCESS',payload:tripsPayload}]
      expect(store.getActions().type).toEqual(action.type)
    })
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent()
    //   request.respondWith({
    //    status: 200,
    //    response: {
    //       accommodations: {
    //         rows: accommodationsPayload
    //       }
    //    }
    //    })
    // })

    // return store.dispatch(actions.getAccommodations()).then(() => {
    //   const expectedActions = store.getActions();
    //   expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_SUCCESS')
    // })
  },5000)

  it('Dispatches FETCH_TRIP_HISTORY_ERROR after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 500,
       response: {
         Error: 'Internal Error'
        }
       
       })
    })

    return store.dispatch(getTripHistory()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_TRIP_HISTORY_ERROR')
    })
  })

})