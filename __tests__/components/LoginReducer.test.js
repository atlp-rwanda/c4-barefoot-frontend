import {loginReducer} from '../../src/redux/reducers/loginReducer';
import { USER_LOGIN, LoGIN_LOADING, CLOSE_SNACKBAR } from "../../src/redux/actions/loginAction";

describe('loginReducer(state, action)', () =>{
    const initialState ={
        loading: false,
        success: false,
        snackBarMessage: false,
        error: ''
    }  
    it('should return the initialState for no action', () =>{
        const reducer = loginReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    })
    it('should return success with true when login success', () =>{
        const action ={
            type: USER_LOGIN
        } 
        const reducer = loginReducer(initialState, action);
        expect(reducer).toEqual({
            loading: false,
            success: true,
            snackBarMessage: false,
            error: ""
            }
        );

    })
    
    it('should return error when login fails', () =>{
        const action ={
            type: USER_LOGIN,
            error: 'Network Error'
        } 
        const reducer = loginReducer(initialState, action);
        console.log(reducer);
        expect(reducer).toEqual({
            loading: false,
            success: false,
            snackBarMessage: true,
            error: "Network Error"
            }
        );

    })
    it('should return with changes of loading status to true', () =>{
        const action ={
            type: LoGIN_LOADING
        } 
        const reducer = loginReducer(initialState, action);
        console.log(reducer);
        expect(reducer).toEqual({
            loading: true,
            success: false,
            snackBarMessage: false,
            error: ""
            }
        );

    })
    it('should return with changes of snackBarMessage status to false', () =>{
        const action ={
            type: CLOSE_SNACKBAR
        } 
        const reducer = loginReducer(initialState, action);
        console.log(reducer);
        expect(reducer).toEqual({
            loading: false,
            success: false,
            snackBarMessage: false,
            error: ""
            }
        );

    })
})

