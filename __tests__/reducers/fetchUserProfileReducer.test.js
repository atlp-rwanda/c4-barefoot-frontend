import { fetchUserProfileReducer } from '../../src/redux/reducers/userProfileReducer';
import * as types from "../../src/redux/types/userProfileTypes";

describe('Fetch userprofile reducer', () => {
    it('Should get user profile initial state', () => {
        expect(fetchUserProfileReducer(undefined, {})).toEqual(
            {
                loading: false,
                user: {},
                error: null
            }
        )
    })

    it('Should handle FETCH_USER_PROFILE_LOADING', () => {
        expect(fetchUserProfileReducer(undefined, {
            type: types.FETCH_USER_PROFILE_LOADING
        })
        ).toEqual(
            {
                loading: true,
                user: {},
                error: null
            }
        )
    })

    it('Should handle FETCH_USER_PROFILE_SUCCESS', () => {
        expect(fetchUserProfileReducer(undefined, {
            type: types.FETCH_USER_PROFILE_SUCCESS,
            payload: { data: { profile: {} }, status: 200 }
        })
        ).toEqual(
            {
                loading: false,
                user: { data: { profile: {} }, status: 200 },
                error: null
            }
        )
    })

    it('Should handle FETCH_USER_PROFILE_FAILED', () => {
        expect(fetchUserProfileReducer(undefined, {
            type: types.FETCH_USER_PROFILE_FAILED,
            payload: 'Error fetching user profile info'
        })
        ).toEqual(
            {
                loading: false,
                user: {},
                error: 'Error fetching user profile info',
            }
        )
    })
})