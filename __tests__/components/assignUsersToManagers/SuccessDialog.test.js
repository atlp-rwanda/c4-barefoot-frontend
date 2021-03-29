import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SuccessDialog from '../../../src/components/assignUsersToManagers/SuccessDialog';

describe('<SuccessDialog />', ()=> {
    let wrapper;
    const props = { open: true };
    it( 'It should render the SuccessDialog component', ()=>{
        wrapper= shallow(<SuccessDialog {...props}/>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    });
});
