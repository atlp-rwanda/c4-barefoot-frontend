import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getTemperature} from '../../../src/redux/actions/getWeather';
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

  it('Get waither condition of a place', () => {
    mock.onGet(`${URL}/weather/weather?city=kigali`)
    .reply(200,{response:{info:{main:{temp:23}}}})
    store.dispatch(getTemperature('Kigali')).then((res)=>{
      const action=[{type:'FETCH_WEATHER_SUCCESS',payload:23}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

it('Get waither condition of a place failed', () => {
  mock.onGet(`${URL}/weather/weather?city=kigali`)
  .reply(500,{response:{Error: 'Internal Error'}})
  store.dispatch(getTemperature('Kigali')).then((res)=>{
    const action=[{type:'FETCH_WEATHER_SUCCESS',payload:23}]
    expect(store.getActions().type).toEqual(action.type)
  }).catch(err=>{
    const action=[{type:'FETCH_WEATHER_ERROR',error:err}]
    expect(store.getActions().type).toEqual(action.type)
  })
})

})