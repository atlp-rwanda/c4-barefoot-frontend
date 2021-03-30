import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/userProfileAction';
import moxios from 'moxios';
import { userProfile } from '../../dummyData'

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('get user profile', () => {
    let store;

    beforeEach(() => {
        moxios.install()
        store = mockStore({ fetchUserProfile: {} })
    });

    afterEach(() => moxios.uninstall());
    it('dispatches FETCH_USER_PROFILE_FAILED after fetchUserProfile failed ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: {
                    user: userProfile
                }
            });
        });

        return store.dispatch(actions.fetchUserProfile()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('FETCH_USER_PROFILE_LOADING');
            expect(expectedActions[1].type).toEqual('FETCH_USER_PROFILE_FAILED');
        })

    })

    it('dispatches FETCH_USER_PROFILE_LOADING and FETCH_USER_PROFILE_SUCCESS  after fetchUserProfile success ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    user: {
                        data: userProfile
                    }
                }
            });
        });

        return store.dispatch(actions.fetchUserProfile()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('FETCH_USER_PROFILE_LOADING');
            expect(expectedActions[1].type).toEqual('FETCH_USER_PROFILE_SUCCESS');
        })

    });



})