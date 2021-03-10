import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/ChatAction';
import { chattedUsers, allUsers, vList, messageList, supportReply } from '../../dummyData'
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
            expect(expectedActions[0].type).toEqual('CHATTED_USERS')
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
                status: 200,
                response: {
                    visitors: {
                        rows: vList
                    }
                }
            })
        })
        return store.dispatch(actions.getVisitorsList()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('GET_VISITORS')
        })
    })
})


describe('test getting all users', () => {
    let store;
    beforeEach(() => {
        moxios.install()
        store = mockStore({fetchUsers: {}})
    })
    afterEach(() => moxios.uninstall())

    it('should get a list of all users', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    allusers: {
                        rows: allUsers
                    }
                }
            })
        })
        return store.dispatch(actions.fetchUsers()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('ALL_USERS')
        })
    })

    
})


describe('test getting all messages between two users', () => {
    let store;
    beforeEach(() => {
        moxios.install()
        store = mockStore({getChats: {}})
    })
    afterEach(() => moxios.uninstall())

    it('should get all messages between users', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    messages: messageList
                }
            })
        })
        return store.dispatch(actions.getChats()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('GETALL_CHATS')
        })
    })
})

describe('visitors get support message', () => {
    let store;
    beforeEach(() => {
        moxios.install()
        store = mockStore({getSupportResponse: {}})
    })
    afterEach(() => moxios.uninstall())

    it('should getSupportResponse', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    support: supportReply
                }
            })
        })
        return store.dispatch(actions.getChats()).then(() => {
            const expectedActions = store.getSupportResponse();
            expect(expectedActions[0].type).toEqual('GETSUPPORT_RESPONSE')
        })
    })
})