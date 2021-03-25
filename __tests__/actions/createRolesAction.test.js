import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createRoleAction} from '../../src/redux/actions/createRoleAction';
import { accommodationsPayload,accommodationAminitiesPayload } from '../../dummyData'
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)
describe('Create roles reducer', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({roles: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates CREATE_ROLE_SUCCESS after task is successful', () => {
    mock.onPost(`${URL}/admin/roles`)
    .reply(200)
    store.dispatch(createRoleAction()).then((res)=>{
      const action=[{type:'CREATE_ROLE_SUCCESS'}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

  it('Creates CREATE_ROLE_SUCCESS  failed', () => {
    mock.onGet(`${URL}/admin/roles`)
    .reply(500,{response:{Error: 'Internal Error'}})
    store.dispatch(createRoleAction()).then((res)=>{
        const action=[{type:'CREATE_ROLE_SUCCESS'}]
        expect(store.getActions().type).toEqual(action.type)
      }).catch(err=>{
      const action=[{type:'CREATE_ROLE_ERROR',error:err}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

  it('Update UPDATE_ROLE after task is successful', () => {
    mock.onPost(`${URL}//admin/roles/12`)
    .reply(200)
    store.dispatch(createRoleAction()).then((res)=>{
      const action=[{type:'UPDATE_ROLE'}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

  it('Update UPDATE_ROLE  failed', () => {
    mock.onGet(`${URL}/admin/roles`)
    .reply(500,{response:{Error: 'Internal Error'}})
    store.dispatch(createRoleAction()).then((res)=>{
        const action=[{type:'UPDATE_ROLE'}]
        expect(store.getActions().type).toEqual(action.type)
      }).catch(err=>{
      const action=[{type:'UPDATE_ROLE_FAILED',error:err}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

})
