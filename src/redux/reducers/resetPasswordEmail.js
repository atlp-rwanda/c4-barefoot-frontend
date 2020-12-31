import { LOADING, SEND_RESET_EMAIL_FAIL, CLOSE_SNACKBAR, SEND_RESET_EMAIL_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../resetPasswordType"

const initialState = {
    isLoading:false,
    open:false,
    error: '',
    message:''
}
export const ResetPasswordEmailReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOADING:
            return {
                ...state,
                isLoading: true,
                open: false
            };
        case SEND_RESET_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                open:true,
                message: action.message
            };
        case SEND_RESET_EMAIL_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    error: action.error,
                    open:true,
                    message:''
                };
        // case CLOSE_SNACKBAR:
        //     return {
        //         ...state,
        //         open: false,
        //         isLoading: false,
        //     }
        default:
            return state;
    }
};

export const NewPasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                isLoading: true,
                open:false
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                open:true,
                error:'',
                message: action.message
            };
        case RESET_PASSWORD_FAIL:
                return {
                    ...state,
                    isLoading:false,
                   error: action.error,
                   open:true,
                   message:''
            };
        // case CLOSE_SNACKBAR:
        //     return {
        //         ...state,
        //         open: false
        //     }
        default:
            return state
    }
}