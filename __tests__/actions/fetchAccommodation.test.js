import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/fetchAccommodations';
import {getAccommodations,getAccommodation,getAccommodationAminity} from '../../src/redux/actions/fetchAccommodations';
import { accommodationsPayload,accommodationAminitiesPayload } from '../../dummyData'
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('Fetch accommodations actions', () => {
  let store;

  beforeEach(() => {
    moxios.install()
    store = mockStore({fetchAccommodations: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates FETCH_ACCOMMODATIONS_SUCCESS after task is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          accommodations: {
            rows: accommodationsPayload
          }
       }
       })
    })

    return store.dispatch(actions.getAccommodations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_PENDING')
      expect(expectedActions[1].type).toEqual('FETCH_ACCOMMODATIONS_SUCCESS')
    })
  })

  it('Dispatches FETCH_ACCOMMODATIONS_ERROR after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.reject({
       status: 500,
       response: {
         data: 'internal server error',
        }
       })
    })

    return store.dispatch(actions.getAccommodations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_PENDING')
      expect(expectedActions[1].type).toEqual('FETCH_ACCOMMODATIONS_ERROR')
    })
  })

it('Get accommodation with thier aminities successfully', () => {
  mock.onGet(`${URL}/accommodations/2121222`)
  .reply(200,{response:accommodationAminitiesPayload})
  store.dispatch(getAccommodationAminity(2121222)).then((res)=>{
    const action=[{type:'FETCH_AMENITIES_SUCCESS',payload:accommodationAminitiesPayload}]
    expect(store.getActions().type).toEqual(action.type)
  })
})

it('Get accommodation with thier aminities failed', () => {
  mock.onGet(`${URL}/accommodations/2121222`)
  .reply(500,{response:{Error: 'Internal Error'}})
  store.dispatch(getAccommodationAminity(2121222)).then((res)=>{
    const action=[{type:'FETCH_AMENITIES_SUCCESS',payload:accommodationAminitiesPayload}]
    expect(store.getActions().type).toEqual(action.type)
  }).catch(err=>{
    const action=[{type:'FETCH_AMENITIES_ERROR',error:err}]
    expect(store.getActions().type).toEqual(action.type)
  })
})

// it('Get one accommodation from the list of occommodations', () => {
//   store.dispatch(getAccommodation(2121222)).then((res)=>{
//     const action=[{type:'FETCH_ACCOMMODATION_SUCCESS',payload:2121222}]
//     expect(store.getActions().type).toEqual(action.type)
//   })
// })

})