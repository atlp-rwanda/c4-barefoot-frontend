import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getAccommodationsByLocation,selectAccommodation} from '../../../src/redux/actions/fetchAccommodationByLocation';
import { fetchAccommodationByLocationPayload} from '../../../dummyData'
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

  it('FETCH ACCOMMODATION by location successfully', () => {
    mock.onGet(`${URL}/accommodations/location/123?page=1`)
    .reply(200,{response:fetchAccommodationByLocationPayload})
    store.dispatch(getAccommodationsByLocation(123)).then((res)=>{
      const action=[{type:'FETCH_ACCOMMODATIONS_BY_LOCATION',payload:fetchAccommodationByLocationPayload.accommodations,nation:fetchAccommodationByLocationPayload.nation,id:123}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

it('FETCH ACCOMMODATION by location unsuccessfully', () => {
  mock.onGet(`${URL}/accommodations/location/123?page=1`)
  .reply(500,{response:{Error: 'Internal Error'}})
  store.dispatch(getAccommodationsByLocation(123)).then((res)=>{
    const action=[{type:'FETCH_ACCOMMODATIONS_BY_LOCATION',payload:fetchAccommodationByLocationPayload.accommodations,nation:fetchAccommodationByLocationPayload.nation,id:123}]
    expect(store.getActions().type).toEqual(action.type)
  }).catch(err=>{
    const action=[{type:'FETCH_AMENITIES_ERROR',error:err}]
    expect(store.getActions().type).toEqual(action.type)
  })
})

// it('Get one accommodation from the list of accommodations', () => {
//   store.dispatch(selectAccommodation(2121222)).then((res)=>{
//     const action=[{type:'SELECT_ACCOMMODATION',payload:2121222}]
//     expect(store.getActions().type).toEqual(action.type)
//   })
// })
})