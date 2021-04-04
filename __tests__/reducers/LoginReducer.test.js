import {loginReducer} from '../../src/redux/reducers/loginReducer';
import { USER_LOGIN, LoGIN_LOADING, CLOSE_SNACKBAR, DISPLAY_SKELETONS } from "../../src/redux/actions/loginAction";

describe('loginReducer(state, action)', () =>{
    const initialState ={
        loading: false,
        success: false,
        snackBarMessage: false,
        error: '',
        showSkeletons: false
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
            ...initialState,
            success: true
            }
        );

    })
    
    it('should return error when login fails', () =>{
        const action ={
            type: USER_LOGIN,
            error: 'Network Error'
        } 
        const reducer = loginReducer(initialState, action);
        expect(reducer).toEqual({
            ...initialState,
            loading: false,
            success: false,
            snackBarMessage: true,
            error: action.error
            }
        );

    })
    it('should return with changes of loading status to true', () =>{
        const action ={
            type: LoGIN_LOADING
        } 
        const reducer = loginReducer(initialState, action);
        expect(reducer).toEqual({
            ...initialState,
            loading: true,
            snackBarMessage: false
            }
        );

    })
    it('should return with changes of snackBarMessage status to false', () =>{
        const action ={
            type: CLOSE_SNACKBAR
        } 
        const reducer = loginReducer(initialState, action);
        expect(reducer).toEqual({
            ...initialState,
            snackBarMessage: false
            }
        );

    })
    it('should return the state with showSkeletons true', () =>{
        const action = { type: DISPLAY_SKELETONS, payload: true}
        const reducer = loginReducer(initialState,action);
        expect(reducer).toEqual({
            ...initialState,
            showSkeletons:true
        })
    })
    it('should return the state with showSkeletons false', () =>{
        const action = { type: DISPLAY_SKELETONS, payload: false}
        const reducer = loginReducer(initialState,action);
        expect(reducer).toEqual({
            ...initialState,
            showSkeletons:false
        })
    })
})

