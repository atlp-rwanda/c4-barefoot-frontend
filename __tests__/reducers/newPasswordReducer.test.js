import {NewPasswordReducer} from '../../src/redux/reducers/resetPasswordEmail';
import {LOADING, SEND_RESET_EMAIL, RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL} from '../../src/redux/resetPasswordType';
const initialState = {
    isLoading:false,
    open:false,
    success:false,
    error: '',
    message:''
}
const errorState = {
    isLoading:false,
    error: 'User not found',
    open:true,
    message:''
}
describe('Reset new password', () =>{
    it('should return initial state', () => {
        expect(NewPasswordReducer(undefined, {})).toEqual(initialState)
    })
    it('Should handle RESET_PASSWORD error', () => {
        const action = {
            type: RESET_PASSWORD_FAIL,
            error:'password must be more than 8 characters'
            }
        expect(NewPasswordReducer(initialState, action)).toEqual({
    ...initialState,
    isLoading:false,
    error: 'password must be more than 8 characters',
    open:true,
    message:''
        })
})
it('Should handle RESET_PASSWORD without error', () => {
    const action= {
        type: RESET_PASSWORD_SUCCESS,
        message:'password reset successfully 👍 you can login with new password'
        }
        expect(NewPasswordReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading:false,
            error: '',
            success:true,
            open:true,
            message:'password reset successfully 👍 you can login with new password'
        })
    })
    it('should loading before reseting new password', () => {
        expect(NewPasswordReducer(initialState, {type: LOADING})).toEqual({...initialState,isLoading:true, open:false})
    })
})