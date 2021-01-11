import React from 'react';
import Enzyme, { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Field, Form, Formik } from 'formik'
import { FormGroup, Grid, makeStyles, Paper, TextField, Typography, Button, CircularProgress, Snackbar, Slide, Container, Input  } from '@material-ui/core'
import { NewPassword } from '../../../src/components/resetPassword/NewPassword';

Enzyme.configure({ adapter: new EnzymeAdapter()});
describe('reset new password', ()=>{
    //  let wrapper;
         const props = {
             resetNewPassword: jest.fn(),
             history : {
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '/user/reset_password',
                state: '',
                hash: ''
            }},
             newpassword: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
     it('it match snapshoot', () => {
         const props = {
             resetNewPassword: jest.fn(),
             history : {
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '/user/reset_password',
                state: '',
                hash: ''
            }},
             newpassword: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
        //  const history = createMemoryHistory('/user/reset_password')
          const wrapper = shallow(<NewPassword  {...props} />)
         const component = wrapper.find("[data-test='container']");
         expect(toJson(wrapper)).toMatchSnapshot();
     });
   it('should render container component', ()=>{
       const props = {
             resetNewPassword: jest.fn(),
             history : {
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '/user/reset_password',
                state: '',
                hash: ''
            }},
             newpassword: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
       const wrapper = shallow(<NewPassword  {...props} />)
        const component = wrapper.find("[data-test='container']");
        expect(component.length).toBe(1)
   });
   it('should render container component', ()=>{
       const props = {
             resetNewPassword: jest.fn(),
             history : {
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '/user/reset_password',
                state: '',
                hash: ''
            }},
             newpassword: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
       const wrapper = shallow(<NewPassword  {...props} />)
        const component = wrapper.find(Typography);
        expect(component.length).toBe(1)
        expect(component.text()).toBe('Reset Password')
   });
   it('should render Formik component', ()=>{
       const props = {
             resetNewPassword: jest.fn(),
             history : {
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '/user/reset_password',
                state: '',
                hash: ''
            }},
             newpassword: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
       const wrapper = shallow(<NewPassword  {...props} />)
        const component = wrapper.find(Formik);
        expect(component.length).toBe(1)
   });

    
 })