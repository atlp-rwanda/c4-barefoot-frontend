import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/redux/actions/fetchLocationsAction';
import { locationsPayload } from '../../../dummyData'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('Fetch Location actions', () => {
  let store;

  beforeEach(() => {
    moxios.install()
    store = mockStore({fetchLocations: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates FETCH_LOCATIONS_SUCCESS after task is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        data: {
        locations: {
          rows: locationsPayload
        }
      } })
    })

    

    store.dispatch(actions.getLocations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_LOCATIONS_PENDING')
      expect(expectedActions[1].type).toEqual('FETCH_LOCATIONS_SUCCESS')
    })
  })

})