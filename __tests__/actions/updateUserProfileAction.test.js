import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/userProfileAction';
import moxios from 'moxios';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('get user profile', () => {
    let store;

    beforeEach(() => {
        moxios.install()
        store = mockStore({ updateUserProfile: {} })
    });

    afterEach(() => moxios.uninstall());
    it('dispatches UPDATE_USER_PROFILE_LOADING and UPDATE_USER_PROFILE_FAILED after updateUserProfile failed ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: {
                    data: { message: "network error occured failed to update profile info" }
                }
            });
        });

        return store.dispatch(actions.updateUserProfile({ firstName: "testName" })).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('UPDATE_USER_PROFILE_LOADING');
            expect(expectedActions[1].type).toEqual('UPDATE_USER_PROFILE_FAILED');
        })

    })

    it('dispatches UPDATE_USER_PROFILE_LOADING and UPDATE_USER_PROFILE_SUCCESS after updateUserProfile success ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    data: { message: "successfully updated your profile" }
                }
            });
        });

        return store.dispatch(actions.updateUserProfile({ firstName: "testName" })).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('UPDATE_USER_PROFILE_LOADING');
            expect(expectedActions[1].type).toEqual('UPDATE_USER_PROFILE_SUCCESS');
        })

    });



})