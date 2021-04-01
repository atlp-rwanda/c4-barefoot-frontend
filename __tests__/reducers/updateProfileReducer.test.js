import { updateUserProfileReducer } from '../../src/redux/reducers/userProfileReducer';
import * as types from "../../src/redux/types/userProfileTypes";

describe('Update userprofile reducer', () => {
    it('Should update user profile initial state', () => {
        expect(updateUserProfileReducer(undefined, {})).toEqual(
            {
                loading: false,
                profileLoading: false,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })

    it('Should handle UPDATE_USER_PROFILE_LOADING', () => {
        expect(updateUserProfileReducer(undefined, {
            type: types.UPDATE_USER_PROFILE_LOADING
        })
        ).toEqual(
            {
                loading: true,
                profileLoading: false,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })

    it('Should handle UPDATE_USER_PROFILE_SUCCESS', () => {
        expect(updateUserProfileReducer(undefined, {
            type: types.UPDATE_USER_PROFILE_SUCCESS,
            payload: { message: "successfully update your user profile" }
        })
        ).toEqual(
            {
                loading: false,
                profileLoading: false,
                successMsg: "successfully update your profile",
                error: null,
                success: true,
                snackbarOpen: true,
            }
        )
    })

    it('Should handle UPDATE_USER_PROFILE_FAILED', () => {
        expect(updateUserProfileReducer(undefined, {
            type: types.UPDATE_USER_PROFILE_FAILED,
            payload: 'Error occured while updating your profile info'
        })
        ).toEqual(
            {
                loading: false,
                profileLoading: false,
                successMsg: null,
                error: 'Error occured while updating your profile info',
                success: false,
                snackbarOpen: true,
            }
        )
    })

    it('Should handle CLOSE_SNACKBAR', () => {
        expect(updateUserProfileReducer(undefined, {
            type: types.CLOSE_SNACKBAR,
        })
        ).toEqual(
            {
                loading: false,
                profileLoading: false,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })
})