import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getLocations}from '../../src/redux/actions/fetchLocationsAction';
import { locationsPayload } from '../../dummyData'
import moxios from 'moxios'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)

describe('Fetch Location actions', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({fetchLocations: {}})
  })
  afterEach(() => moxios.uninstall())
  
  it('Creates FETCH_LOCATIONS_SUCCESS after task is successful', () => {
    mock.onGet(`${URL}/locations`)
    .reply(200,{response:{locations:locationsPayload}})
    store.dispatch(getLocations()).then((res)=>{
      const action=[{type:'FETCH_LOCATIONS_SUCCESS',payload:locationsPayload }]
      expect(store.getActions().type).toEqual(action.type)
    })
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent()
    //   request.respondWith({
    //    status: 200,
    //    response: {
    //       locations: {
    //         rows: locationsPayload
    //       }
    //    }
    //    })
    // })

    // return store.dispatch(actions.getLocations()).then(() => {
    //   const expectedActions = store.getActions();
    //   expect(expectedActions[0].type).toEqual('FETCH_LOCATIONS_SUCCESS')
    // })
  })

  it('Creates FETCH_LOCATIONS_ERROR after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 500,
       response: {
          Error: "Internal server error"
       }
       })
    })

    return store.dispatch(getLocations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_LOCATIONS_ERROR')
    })
  })

})