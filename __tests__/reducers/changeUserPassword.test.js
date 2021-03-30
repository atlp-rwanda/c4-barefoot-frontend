import { changeUserPasswordeReducer } from '../../src/redux/reducers/userProfileReducer';
import * as types from "../../src/redux/types/userProfileTypes";

describe('change user password reducer', () => {
    it('Should chnage user password initial state', () => {
        expect(changeUserPasswordeReducer(undefined, {})).toEqual(
            {
                loading: false,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })

    it('Should handle CHANGE_USER_PASSWORD_LOADING', () => {
        expect(changeUserPasswordeReducer(undefined, {
            type: types.CHANGE_USER_PASSWORD_LOADING
        })
        ).toEqual(
            {
                loading: true,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })

    it('Should handle CHANGE_USER_PASSWORD_SUCCESS', () => {
        expect(changeUserPasswordeReducer(undefined, {
            type: types.CHANGE_USER_PASSWORD_SUCCESS,
            payload: { message: "successfully changed your password " }
        })
        ).toEqual(
            {
                loading: false,
                successMsg: { message: "successfully changed your password " },
                error: null,
                success: true,
                snackbarOpen: true,
            }
        )
    })

    it('Should handle CHANGE_USER_PASSWORD_FAILED', () => {
        expect(changeUserPasswordeReducer(undefined, {
            type: types.CHANGE_USER_PASSWORD_FAILED,
            payload: 'Error occured while updating your profile info'
        })
        ).toEqual(
            {
                loading: false,
                successMsg: null,
                error: 'Error occured while updating your profile info',
                success: false,
                snackbarOpen: true,
            }
        )
    })

    it('Should handle CLOSE_SNACKBAR', () => {
        expect(changeUserPasswordeReducer(undefined, {
            type: types.CLOSE_SNACKBAR,
        })
        ).toEqual(
            {
                loading: false,
                successMsg: null,
                error: null,
                snackbarOpen: false,
                success: false
            }
        )
    })
})