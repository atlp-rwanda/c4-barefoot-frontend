import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/CommentActon';
import { commentPayload } from '../../dummyData'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('Fetch comment actions', () => {
  let store;

  beforeEach(() => {
    moxios.install()
    store = mockStore({CommentAction: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates RETRIEVE_COMMENTS_SUCCESS after task is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          comment: {
            rows: commentPayload
          }
       }
       })
    })

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('RETRIEVE_COMMENTS_PENDING')

      expect(expectedActions[1].type).toEqual('RETRIEVE_COMMENTS_SUCCESS')


    })
  })

  it('Dispatches RETRIEVE_COMMENTS_FAIL after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
         data: {
          accommodations: {
            rows: commentPayload
          }
        }
       }
       })
    })

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('RETRIEVE_COMMENTS_PENDING')
      expect(expectedActions[0].type).toEqual('RETRIEVE_COMMENTS_FAIL')
    })
  })

})



describe('submit comment ', () => {
  let store;

  beforeEach(() => {
    moxios.install()
    store = mockStore({CommentAction: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Creates SUBMIT_COMMENTS_SUCCESS after task is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          comment: {
            rows: commentPayload
          }
       }
       })
    })

    return store.dispatch(actions.submitComment()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('SUBMIT_COMMENTS_PENDING')

      expect(expectedActions[1].type).toEqual('SUBMIT_COMMENTS_SUCCESS')


    })
  })

  it('Dispatches SUBMIT_COMMENTS_FAIL after task is unsuccessful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
         data: {
         comment: {
            rows: commentPayload
          }
        }
       }
       })
    })

    return store.dispatch(actions.submitComment()).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('RETRIEVE_COMMENTS_PENDING')
      expect(expectedActions[0].type).toEqual('SUBMIT_COMMENTS_FAIL')
    })
  })

})