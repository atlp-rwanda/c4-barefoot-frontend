import React from 'react';
import ConfirmSendTravelRequest from '../../src/components/travelRequests/ConfirmSendTraveRequest';
import { CssBaseline, Grid, Snackbar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../src/components/Loader';
import { props, props2, comfirmProps } from '../../dummyData';

describe('<ConfirmSendTravelRequest />', () => {
    let wrapper;

    it('if it matches snapshot', () => {

        wrapper = mount(<ConfirmSendTravelRequest travelRequest={comfirmProps} {...props} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });


})