import { LOADING, SEND_RESET_EMAIL, CLOSE_SNACKBAR, SEND_RESET_EMAIL_SUCCESS, RESET_PASSWORD } from "../resetPasswordType"

const initialState = {
    isLoading:false,
    open:false,
    error: '',
    message:''
}
export const ResetPasswordEmailReducer = (state = initialState, action) =>{
    // const {type, payload} = action;
    switch(action.type){
        case SEND_RESET_EMAIL_SUCCESS:
            if(action.error){
                return {
                    ...state,
                    isLoading: false,
                    error: action.error,
                    open:true,
                    message:''
                };
            }
            return {
                ...state,
                isLoading: false,
                open:true,
                message: action.message
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
                open: false
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
        case RESET_PASSWORD:
            if(action.error){
                return {
                    ...state,
                    isLoading:false,
                   error: action.error,
                   open:true,
                   message:''
                }
            };
            return {
                ...state,
                isLoading: false,
                open:true,
                error:'',
                message: action.message
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
                open:false
            }
        // case CLOSE_SNACKBAR:
        //     return {
        //         ...state,
        //         open: false
        //     }
        default:
            return state
    }
}