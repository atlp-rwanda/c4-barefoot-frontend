import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {SEND_RESET_EMAIL, RESET_PASSWORD_SUCCESS, SEND_RESET_EMAIL_FAIL, LOADING} from '../../../src/redux/resetPasswordType'
import moxios from 'moxios'
import {sendEmail} from '../../../src/redux/actions/resetPasswordAction'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('testing action creator', () => {
    let store;
    beforeEach(() => {
        moxios.install();
        store=mockStore({sendEmailToResetPassword: {}})
        });
    afterEach(() => moxios.uninstall());

    it('Creates SEND_RESET_EMAIL_SUCCESS action', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status:200,
                response:{
                        messages:'Request sent successfully, please check your email to reset your password',
                        status:200 
                }
            })
        })
        store.dispatch(sendEmail({email:'habajeunes2@gmail.com'})).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('LOADING')
            expect(expectedActions[1].type).toEqual('SEND_RESET_EMAIL_SUCCESS')
        })
    })
})