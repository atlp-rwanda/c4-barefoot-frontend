import {ResetPasswordEmailReducer} from '../../src/redux/reducers/resetPasswordEmail';
import {LOADING, SEND_RESET_EMAIL_SUCCESS, SEND_RESET_EMAIL_FAIL} from '../../src/redux/resetPasswordType';
const initialState = {
    loading:false,
    open:false,
    success:false,
    error: '',
    message:''
}
const errorState = {
    loading:false,
    error: 'User not found',
    open:true,
    message:''
}
describe('Sending email to request password reset', () =>{
    it('should return initial state', () => {
        expect(ResetPasswordEmailReducer(undefined, {})).toEqual(initialState)
    })
    it('Should handle SEND_RESET_EMAIL error', () => {
        const action = {
            type: SEND_RESET_EMAIL_FAIL,
            error:'User not found'
            }
        expect(ResetPasswordEmailReducer(initialState, action)).toEqual({
    ...initialState,
    loading:false,
    error: 'User not found',
    open:true,
    message:''
        })
})
it('Should handle SEND_RESET_EMAIL without error', () => {
    const action = {
        type: SEND_RESET_EMAIL_SUCCESS,
        message:'Request sent successfully, please check your email to reset your password'
        }
        expect(ResetPasswordEmailReducer(initialState, action)).toEqual({
            ...initialState,
            loading:false,
            error: '',
            success:true,
            open:true,
            message:'Request sent successfully, please check your email to reset your password'
        })
    })
    it('should loading before sending email', () => {
        expect(ResetPasswordEmailReducer(initialState, {type: LOADING})).toEqual({...initialState,loading:true, open:false})
    })
})