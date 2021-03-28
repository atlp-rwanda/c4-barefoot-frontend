import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getTripHistory, getTripLocations} from '../../src/redux/actions/userTravelHistoryAction'
import { allTravelPayload,locationsPayload} from '../../dummyData'
import moxios from 'moxios'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)

describe('Fetch trip history actions', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({tripHistory: {}})
  })
  afterEach(() => moxios.uninstall())
  
  it('Creates FETCH_TRIP_HISTORY_SUCCESS after task is successful', () => {
    mock.onGet(`${URL}/travel-history`)
    .reply(200,{response:{trips:allTravelPayload}})
    store.dispatch(getTripHistory()).then((res)=>{
      const action=[{type:'FETCH_TRIP_HISTORY_SUCCESS',payload:allTravelPayload }]
      expect(store.getActions().type).toEqual(action.type)
    })

  })

  it('CreatesFETCH_TRIP_HISTORY_ERROR after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 500,
       response: {
          Error: "Internal server error"
       }
       })
    })

    return store.dispatch(getTripHistory()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_TRIP_HISTORY_PENDING ')
    })
  })
  it('Creates GET_LOCATIONS_TRAVELLED after task is successful', () => {
    mock.onGet(`${URL}/locations`)
    .reply(200,{response:{locations:locationsPayload}})
    store.dispatch(getTripLocations()).then((res)=>{
      const action=[{type:'GET_LOCATIONS_TRAVELLED',payload:locationsPayload }]
      expect(store.getActions().type).toEqual(action.type)
    })


})
})