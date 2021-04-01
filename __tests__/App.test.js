import React from 'react';
import App from '../src/App';
import history from '../src/history';
import {BrowserRouter as Router} from 'react-router-dom'
import Routers from '../src/routes/Routers';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () =>{

    it('matches snapshot', () => {
        const props = {
            history : jest.fn()
        }
        const wrapper = shallow(<App {...props} /> );
        let apptest = (<Router history={history}><Routers/></Router>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
})