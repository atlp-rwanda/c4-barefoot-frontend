import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoggedInUserLayout from '../../src/components/layouts/LoggedInUser/LoggedInUser';
import { ThemeProvider } from '@material-ui/core/styles';
describe('< LoggedInUser/>', () => {
    let wrapper;
    it("should be rendered without errors", () => {
        wrapper = shallow(
            <ThemeProvider theme={{ success: { main: '#fff' } }}>
                <LoggedInUserLayout />
            </ThemeProvider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});