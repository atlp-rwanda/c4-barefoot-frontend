import React from 'react';
import ChatRoom from '../../src/components/Chat/ChatRoom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Grid } from '@material-ui/core'

describe('<ChatRoom /> tests', () => {
    it('Should render ChatRoom component without any errors', () => {
        const wrapper = shallow(<ChatRoom ><Grid/></ChatRoom>);
        expect(wrapper.find(<Grid></Grid>)).to.have.lengthOf(0);
    })
})