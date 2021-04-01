import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotificationMenu from '../../src/components/NotificationMenu';
import { notificationPayload } from '../../dummyData';
import { Box, Menu, Typography } from '@material-ui/core';

describe('NOTIFICATION MENU COMPONENT', ()=>{
    let wrapper;
    const props = {
        anchorEl: false,
        handleClose: jest.fn(),
        notifications: {
           notifications: notificationPayload.notifications
        }
    }
    beforeEach(()=>{
        wrapper = mount(<NotificationMenu {...props}/>);
    })
    
    it('Should render the component', ()=>{
        console.log(props.notifications)
        expect(wrapper.find(Menu).length).toEqual(1);
        expect(wrapper.find(Box).length).toEqual(2);
    })
})