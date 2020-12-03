import React from 'react';
import App from '../src/App';
import Navbar from '../src/components/NavBar';
import Routers from '../src/routes/Routers';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../src/redux/store';

describe('<App />', () =>{
    let wrapper = shallow(<App />);
    it('renders without crashing', () => {
        wrapper = shallow(<App />);
    });
    it('should render one <Navbar /> and <Routers /> component', () => {
        expect(wrapper.find(Navbar)).toHaveLength(1);
        expect(wrapper.find(Routers)).toHaveLength(1);
    });

    it('should render with a class of container', () => {
        expect(wrapper.find('.container')).toHaveLength(1);
    });

    it('matches snapshot', () => {
        let apptest = (<Provider store={store}><App/></Provider>);
        let tree = renderer.create(apptest).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
})