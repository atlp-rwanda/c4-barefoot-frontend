import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/ChatAction';
import { chattedUsers, allUsers } from '../../dummyData'
import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('testing fetchUsersChat', () => {
    let store;
    beforeEach(() => {
        moxios.install()
        store = mockStore({fetchUsersChat: {}})
    })
    afterEach(() => moxios.uninstall())

    it('it should fetch chatted users successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    users: {
                        rows: chattedUsers
                    }
                }
            })
        })
        return store.dispatch(actions.fetchUsersChat()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.type).toEqual('CHATTED_USERS')
        })
    })

})

describe('testing getVisitorsList', () => {
    let store;
    beforeEach(() => {
        moxios.install()
        store = mockStore({getVisitorsList: {}})
    })
    afterEach(() => moxios.uninstall())

    it('should get a list of visitors', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 400
            })
        })
        return store.dispatch(actions.getVisitorsList()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.type).toEqual('GET_VISITORS')
        })
    })
})