import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { manageTravelDashboard } from '../../src/components/manageTravel/manageTravelDashboard';


describe(' <manageTravelDashboard />', ()=>{
    let wrapper;
    it( 'It should render the manageTravelDashboard component', ()=>{
        wrapper= shallow(<manageTravelDashboard />)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    })


})

