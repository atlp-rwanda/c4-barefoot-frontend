import React, {useState} from 'react';
import {Login} from '../../src/components/views/Login';
import { FormGroup, TextField, Link, Slide, Button} from '@material-ui/core';
import {CssBaseline, Grid, Paper, Snackbar, Avatar, Typography} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../src/components/Loader';
import { renderHook, act, render, waitFor } from '@testing-library/react';
describe('<Login />', () =>{
    let wrapper;
    it('if it matches snapshot', () => {
        const props = {
            loginAction : jest.fn(),
            closeSnackbar : jest.fn(),
            loadSkeletons: jest.fn(),
            login:{
                success: false,
                loading: false,
                snackBarMessage: false,
                error: '',
                showSkeletons: false
            }
        }

        wrapper = shallow(<Login {...props} /> );
        
        // const wraps = shallow(<Login {...props}></Login>).children().props().children[1].props.children[2].props.children.props.children[1];
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('if it should render the skeletons and grids', () =>{
        
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

    it("should get the login button", () =>{
        const props = {
            loginAction : jest.fn(),
            closeSnackbar : jest.fn(),
            loadSkeletons: jest.fn(),
            login:{
                success: false,
                loading: false,
                snackBarMessage: false,
                error: '',
                showSkeletons: false
            }
        }
        jest.useFakeTimers();
        const {getByText}= render(<Login {...props} />);
        
        act(() => {
            // console.log(wraps.children().props().children[1].props.children[1]);
            // console.log(wraps.find(Button).length);
            jest.advanceTimersByTime(2500); // trigger setTimeout
          });
        // wraps.update();
        // console.log("==============================");
        // console.log(wraps.children().props().children[1].props.children[1]);
        // console.log(wraps.find(Button).length);

        // console.log(baseElement.firstChild);
        console.log('----------------------')
        console.log(getByText('Login'));
        // console.log(jest.spyOn(wrapper, 'useState'));
        // expect(wrapper.state(loadingSkeleton)).toBe(false);
        // console.log(wrapper.instance().state.load);
    })


})