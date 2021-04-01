import React from 'react';
import AddTravelReason from '../../src/components/travelRequests/addTravelReason';
import { CssBaseline, Grid, Snackbar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../src/components/Loader';
import { props, props2, comfirmProps } from '../../dummyData';


describe('<AddTravelReason />', () => {
    let wrapper;
    it('if it matches snapshot', () => {

        wrapper = mount(<AddTravelReason travelRequest={comfirmProps} {...props} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });


})
