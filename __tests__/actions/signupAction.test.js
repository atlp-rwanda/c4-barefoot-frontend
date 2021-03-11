import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/signupRequestAction';
import * as types from "../../src/redux/actions/signupRequestAction";
import { user } from '../../dummyData'
import moxios from 'moxios'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { request } from 'express';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)
describe('Fetch Signup actions', () => {
  
  beforeEach(() => {
    moxios.install()
    store = mockStore({signup: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates REQUEST_ERROR after task is unsuccessful', () => {
    mock.onGet(`${URL}/user/signup`)
    .reply(400,{response:{ error: "\"username\" length must be at least 5 characters long"}})
    store.dispatch(actions.requestSignup()).then((res)=>{
     //const action=[{type:'FETCH_LOCATIONS_SUCCESS',payload:locationsPayload }]
      const expectedActions = store.getActions()
      expect(expectedActions[0].type).toEqual('REQUEST_SIGNUP')
      expect(expectedActions[1].type).toEqual('REQUEST_ERROR')
      //expect(store.getActions().type).toEqual(action.type)
    })
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent()
    //   request.respondWith({
    //    status: 400,
    //    response: {
    //        error: "\"username\" length must be at least 5 characters long",
    //    }
          
    //    })
    // })

    // return store.dispatch(actions.requestSignup()).then(() => {
    //   const expectedActions = store.getActions();
    //   expect(expectedActions[0].type).toEqual('REQUEST_SIGNUP')
    //   expect(expectedActions[1].type).toEqual('REQUEST_ERROR')
    // })
  },5000)

  it('Creates REQUEST_SUCCESS after task is successful', () => {
    mock.onGet(`${URL}/user/signup`)
    .reply(200,{response:{ Message: "User M has been created. Check email for verification"}})
    store.dispatch(actions.requestSignup()).then((res)=>{
       const expectedActions = store.getActions()
       expect(expectedActions[0].type).toEqual('REQUEST_SIGNUP')
       expect(expectedActions[1].type).toEqual('REQUEST_SUCCESS')
       //expect(store.getActions().type).toEqual(action.type)
     })
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent()
    //   request.respondWith({
    //    status: 200,
    //    response: {
    //       Message: "User M has been created. Check email for verification"
    //    }
    //    })
    // })

    // return store.dispatch(actions.requestSignup()).then(() => {
    //   const expectedActions = store.getActions();
    //   expect(expectedActions[0].type).toEqual('REQUEST_SIGNUP')
    //   expect(expectedActions[1].type).toEqual('REQUEST_SUCCESS')
    // })
  },5000)
  it('should dispatch the CLOSE_SNACKBAR action', () => {
    store.clearActions();
    store.dispatch(actions.closeSnackbar())
    expect(store.getActions()).toEqual([{"type": "CLOSE_SNACKBAR"}]);
   })

})
describe('signupStore(creds)', () =>{
  const store = mockStore({});
  const mock = new MockAdapter(axios);	
  beforeEach(()=>{
      store.clearActions();
  });

  it('dispatches REQUEST_SIGNUP after signup success', () =>{
      mock.onPost(process.env.REACT_APP_BACKEND_LINK+'/user/signup')
      .reply(200, {response:{data:{data:'User M has been created. Check email for verification'}}});
      store.dispatch(actions.requestSignup(user)).then(()=>{
          let expectedActions =[
              {type: actions.REQUEST_SIGNUP},
              {type: actions.REQUEST_SUCCESS}
          ];
          expect(store.getActions()).toEqual(expectedActions);
      }).catch(err => {});
      
  },50000)
  
})