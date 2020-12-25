import React, {useState} from 'react';
import {Login} from '../../src/components/views/Login';
import { FormGroup, TextField, Link, Slide, Button} from '@material-ui/core';
import {CssBaseline, Grid, Paper, Snackbar, Avatar, Typography} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Skeleton } from '@material-ui/lab';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../src/components/Loader';
describe('<Login />', () =>{
    let wrapper;
    it('if it matches snapshot', () => {
        const props = {
            loginAction : jest.fn(),
            closeSnackbar : jest.fn(),
            login:{
                success: false,
                loading: false,
                snackBarMessage: false,
                error: ''
            }
        }
        wrapper = shallow(<Login {...props} /> );
        const wraps = shallow(<Login {...props}></Login>).children().props().children[1].props.children[2].props.children.props.children[1];
        console.log('++++++++++++++++++++++wraps');
        console.log(wraps);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('if it should render the skeletons and grids', () =>{
        
        console.log(...wrapper.find(Button));
        expect(wrapper.children().props().children.length).toBe(3);
        expect(wrapper.find(CssBaseline).length).toBe(1);
        expect(wrapper.children().find(Grid).length).toBe(8);
        expect(wrapper.find(Skeleton).length).toBe(13);

    });
    it('should have a loader', () =>{
        expect(wrapper.find(Loader).length).toBe(1);
    })
    it('should have a Snackbar for messages', () =>{
        expect(wrapper.children().find(Snackbar).length).toBe(1);
        expect(wrapper.find(MuiAlert).length).toBe(1);

    })
    it('should have change the size on small screens', () =>{
    
        expect(wrapper.children().props().children[1].props.xs).toBe(12);
        expect(wrapper.children().props().children[1].props.sm).toBe(8);
        expect(wrapper.children().props().children[2].props.xs).toBe(12);
        expect(wrapper.children().props().children[2].props.sm).toBe(4);

    });

    
})