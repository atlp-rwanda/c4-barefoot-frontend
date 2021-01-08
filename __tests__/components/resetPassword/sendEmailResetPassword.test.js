import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme, { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Field, Form, Formik } from 'formik'
import { FormGroup, Grid, makeStyles, Paper, TextField, Typography, Button, CircularProgress, Snackbar, Slide, Container, Input  } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
 
import { ResetPasswordEmailForm } from '../../../src/components/resetPassword/ResetPasswordEmailForm';
 
 Enzyme.configure({ adapter: new EnzymeAdapter()});

 describe('send email for request password reset', ()=>{
     let wrapper;
    
     it('it match snapshoot', () => {
         const props ={
             resetPassword: jest.fn(),
             closeSnackbar : jest.fn(),
             sendemail: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
         wrapper = shallow(<ResetPasswordEmailForm  {...props} />)
         const component = wrapper.find("[data-test='main-grid']");
         expect(component.length).toBe(1)
     });
     it('it should render the typography', ()=>{
         expect(wrapper.find("[data-test='typography-test']").length).toBe(2)
     });
     it('should render form', ()=>{
         expect(wrapper.find(Formik).length).toBe(1)
     });
     it('should Snackbar', ()=>{
         const props ={
             resetPassword: jest.fn(),
              closeSnackbar : jest.fn(),
             sendemail: {
                isLoading:false,
                    open:false,
                    error: '',
                    message:''
            }
         }
         wrapper = shallow(<ResetPasswordEmailForm  {...props} />)
         expect(wrapper.find(Snackbar).length).toBe(1)
     });
 })