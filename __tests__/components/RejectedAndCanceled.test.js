import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RejectedAndCanceled } from '../../src/components/manageTravel/RejectedAndCanceledReports';


describe(' <RejectedAndCanceled />', ()=>{
    let wrapper;
    it( 'It should render the RejectedAndCanceled component', ()=>{
        wrapper= shallow(<RejectedAndCanceled />)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    })


})