import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/createLocAction';
import moxios from 'moxios';
import { location } from '../../dummyData'

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Create Location', () => {
    let store;

    beforeEach(() => {
        moxios.install()
        store = mockStore({ fetchUserProfile: {} })
    });

    afterEach(() => moxios.uninstall());
  

    it('Creates Location successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: location                    
            });
        });

        return store.dispatch(actions.createLocation()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CREATE_LOC_PENDING');
            expect(expectedActions[1].type).toEqual('CREATE_LOC_SUCCESS');
        })

    });

    it('Create Location is unsuccessful with response porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 500,
           response: {
            data: 'Internal server error',
           }
           })
        })
    
        return store.dispatch(actions.createLocation()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_LOC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_LOC_ERROR')
        })
      })

      it('Create Location is unsuccessful with message porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 400,
           message: 'network error',
           })
        })
    
        return store.dispatch(actions.createLocation()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_LOC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_LOC_ERROR')
        })
      })

      it('Create Location is unsuccessful with requeat porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 403,
           request: 'Unathorised',
           })
        })
    
        return store.dispatch(actions.createLocation()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_LOC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_LOC_ERROR')
        })
      })

      it('Create Location is unsuccessful with error porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 404,
           error: 'resource not found',
           })
        })
    
        return store.dispatch(actions.createLocation()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_LOC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_LOC_ERROR')
        })
      })


})