import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';	
import axios from 'axios';	
import MockAdapter from 'axios-mock-adapter';
import {loginAction} from '../../src/redux/actions/loginAction';	
const middleware = [thunk];	
const mockStore = configureStore(middleware);	
const mock = new MockAdapter(axios);	
const store = mockStore({});
import { USER_LOGIN, LoGIN_LOADING, CLOSE_SNACKBAR } from "../../src/redux/actions/loginAction";

describe('loginStore(creds)', () =>{
    // beforeEach(()=>{
    //     store.clearActions();
    // });

    it('dispatches USER_LOGIN after login success', () =>{
        mock.onPost('https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/login')
        .reply(200, {response:{data:'success login'}});
        console.log(loginAction({email:'eee',password:'dafdf'}));
        store.dispatch(loginAction({email:'test@test.test', password:'test12345678'})).then(()=>{
            let expectedActions =[
                {type: LoGIN_LOADING},
                {type: USER_LOGIN}
            ];
            console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedActions);
        });
        

    })
})