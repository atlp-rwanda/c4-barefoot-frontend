import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NotificationDetails } from '../../src/components/notificationDetails';
import { singleTravelPayload } from '../../dummyData';
import { Typography } from '@material-ui/core';

describe('NOTIFICATION DETAILS COMPONENT', ()=>{
    let wrapper;
    const props = {
        match: {
            params: {
                id: '9b1e1ca6-2fc2-42bb-86c0-86a329703393'
            }
        }, 
        getNotifications: jest.fn(),
        readTravelRequestInfo: jest.fn(),
        request: singleTravelPayload
        
    }
    beforeEach(()=>{
        wrapper = shallow(<NotificationDetails {...props}/>);
    })
    it('Should capture the snapshot', ()=>{
        
        const component = toJson(wrapper);
        expect(component).toMatchSnapshot();
    })
    it('Should render the component', ()=>{
        expect(wrapper.find(Typography).length).toEqual(1);
    })
})