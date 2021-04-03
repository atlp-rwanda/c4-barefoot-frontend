import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {convertorAction} from '../../..//src/redux/actions/convertorAction';
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
    store = mockStore({convertMoney: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Convert money from one currency to another successfully', () => {
    mock.onGet(`${URL}/convert/converter/5000?from=[RWF]&to=[USD]`)
    .reply(200,{response:{USD:5}})
    store.dispatch(convertorAction(5000,'RWF','USD')).then((res)=>{
      const action=[{type:'CONVERT_MONEY_SUCCESS',result:{USD:5}}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })


it('Convert money from one currency to another failed', () => {
  mock.onGet(`${URL}/convert/converter/5000?from=[RWF]&to=[USD]`)
  .reply(500,{response:{Error: 'Internal Error'}})
  store.dispatch(convertorAction(5000,'RWF','USD')).then((res)=>{
    const action=[{type:'CONVERT_MONEY_SUCCESS',result:{USD:5}}]
    expect(store.getActions().type).toEqual(action.type)
  }).catch(err=>{
    const action=[{type:'CONVERT_MONEY_ERROR',error:err}]
    expect(store.getActions().type).toEqual(action.type)
  })
})
})