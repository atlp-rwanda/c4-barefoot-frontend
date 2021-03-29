import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserCardSkeleton } from '../../../src/components/assignUsersToManagers/UserCard';

describe('<UserCardSkeleton />', ()=> {
    let wrapper;
    it( 'It should render without crashing', ()=>{
        wrapper= shallow(<UserCardSkeleton />)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
    });
});
