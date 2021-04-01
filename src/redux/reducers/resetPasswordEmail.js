import { LOADING, SEND_RESET_EMAIL_FAIL, CLOSE_SNACKBAR, SEND_RESET_EMAIL_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../resetPasswordType"

const initialState = {
    loading:false,
    success:false,
    open:false,
    error: '',
    message:''
}
export const ResetPasswordEmailReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true,
                success:false,
                open: false
            };
        case SEND_RESET_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                open:true,
                success:true,
                message: action.message
            };
        case SEND_RESET_EMAIL_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                    success:false,
                    open:true,
                    message:''
                };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                open: false,
                loading: false,
                message:'',
                error:''
            }
        default:
            return state;
    }
};

export const NewPasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true,
                success:false,
                open:false
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success:true,
                open:false,
                error:'',
                message: action.message
            };
        case RESET_PASSWORD_FAIL:
                return {
                    ...state,
                    loading:false,
                   error: action.error,
                   success:false,
                   open:true,
                   message:''
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                open: false,
                message:'',
                error:''
            }
        default:
            return state
    }
}