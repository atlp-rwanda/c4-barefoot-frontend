import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/ChatAction';
import { CHATTED_USERS, ALL_USERS } from '../../src/redux/actions/ChatAction';
import { chattedUsers, allUsers } from '../../dummyData'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('Teting chat actions', () => {

    it('should get list of chatted users', () => {
        const payload = chattedUsers
        const fetchUsersChatted = {
            type: CHATTED_USERS,
            chattedUsers
        }
        expect(actions.fetchUsersChat(payload)).toEqual(fetchUsersChatted)
    })

    it('should get list of chatted users', () => {
        const payload = allUsers
        const fetchAllUsers = {
            type: ALL_USERS,
            allUsers
        }
        expect(actions.fetchUsers(payload)).toEqual(fetchAllUsers)
    })
})