import {USER_LOGIN, LoGIN_LOADING} from '../actions/loginAction';

const initialState ={
    loading: false,
    success: false,
    error: '',
}

export const loginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case USER_LOGIN:
            if(action.error){
                return {
                    ...state,
                    success: false,
                    error: action.error
                }
            }
            return {
                ...state,
                loading: false,
                success: true
            }
        case LoGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}