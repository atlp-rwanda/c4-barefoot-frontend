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
        store = mockStore({ changeUserPassword: {} })
    });

    afterEach(() => moxios.uninstall());
    it('dispatches CHANGE_USER_PASSWORD_LOADING and CHANGE_USER_PASSWORD_FAILED after updateUserProfile failed ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: {
                    data: { message: "network error occured failed to change your password" }
                }
            });
        });

        return store.dispatch(actions.changeUserPassword({ currentPassword: "oldPassword", newPassword: "newPassword" })).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CHANGE_USER_PASSWORD_LOADING');
            expect(expectedActions[1].type).toEqual('CHANGE_USER_PASSWORD_FAILED');
        })

    })

    it('dispatches CHANGE_USER_PASSWORD_LOADING and CHANGE_USER_PASSWORD_SUCCESS after changeUserPassword success ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    data: { message: "successfully updated your password" }
                }
            });
        });

        return store.dispatch(actions.changeUserPassword({ currentPassword: "oldPassword", newPassword: "newPassword" })).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CHANGE_USER_PASSWORD_LOADING');
            expect(expectedActions[1].type).toEqual('CHANGE_USER_PASSWORD_SUCCESS');
        })

    });

    it('dispatches CLOSE_SNACKBAR ', () => {
        return store.dispatch(actions.closeSnackbar()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CLOSE_SNACKBAR');
        })

    });
})