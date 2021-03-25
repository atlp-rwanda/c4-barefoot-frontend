import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getAccommodations,getAccommodation,getAccommodationAminity} from '../../src/redux/actions/fetchAccommodations';
import { accommodationsPayload,accommodationAminitiesPayload } from '../../dummyData'
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)
describe('Fetch accommodations actions', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({fetchAccommodations: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates FETCH_ACCOMMODATIONS_SUCCESS after task is successful', () => {
    mock.onGet(`${URL}/accommodations`)
    .reply(200,{response:{accommodations:accommodationsPayload}})
    store.dispatch(getAccommodations()).then((res)=>{
      const action=[{type:'FETCH_ACCOMMODATIONS_SUCCESS',payload:accommodationsPayload}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

  it('Dispatches FETCH_ACCOMMODATIONS_ERROR after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 500,
       response: {
         Error: 'Internal Error'
        }
       
       })
    })

    return store.dispatch(getAccommodations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_ERROR')
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



})