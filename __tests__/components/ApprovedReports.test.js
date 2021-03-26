import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ApprovedReports } from '../../src/components/manageTravel/ApprovedReports';


describe(' <ApprovedReports />', ()=>{
    let wrapper;
    it( 'It should render the ApprovedReports component', ()=>{
        wrapper= shallow(<ApprovedReports />)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    })


})

