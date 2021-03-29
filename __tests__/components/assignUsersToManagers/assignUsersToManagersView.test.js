import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AssignUsers from '../../../src/components/views/assignUsersToManagers';

describe('<AssignUsers />', () => {
    let wrapper;
    it( 'It should Redirect if not logged in', ()=>{
        localStorage.removeItem('barefootUserToken');
        wrapper= shallow(<AssignUsers />);
        const component = toJson(wrapper);
        expect(component).toMatchSnapshot();
        expect(wrapper.find('Redirect')).toBeTruthy();
    });

    it( 'It should forward if logged in', () => {
        localStorage.setItem('barefootUserToken', 'ok');
        wrapper= shallow(<AssignUsers />);
        const component = toJson(wrapper);
        expect(component).toMatchSnapshot();
    });
});
