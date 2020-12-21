import { LOADING, RESET_PASSWORD, SEND_RESET_EMAIL } from "../resetPasswordType"

const initialState = {
    email:'',
    success:false,
    isLoading:false,
    error: ''
}
export const ResetPasswordEmailReducer = (state = initialState, action) =>{
    // const {type, payload} = action;
    switch(action.type){
        case SEND_RESET_EMAIL:
            if(action.error){
                return {
                    ...state,
                    success: false,
                    isLoading: false,
                    error: action.error
                };
            }
            return {
                ...state,
                isLoading: false,
                success: true,
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
};

export const NewPasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case RESET_PASSWORD:
            if(action.error){
                return {
                    ...state,
                    success: false,
                    isLoading:false,
                    error: action.error
                }
            };
            return {
                ...state,
                isLoading: false,
                success: true,
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}