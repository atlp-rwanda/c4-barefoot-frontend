import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Done } from '../../src/components/manageTravel/Done';


describe(' <Done />', ()=>{
    let wrapper;
    it( 'It should render the Done component', ()=>{
        wrapper= shallow(<Done />)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    })


})

