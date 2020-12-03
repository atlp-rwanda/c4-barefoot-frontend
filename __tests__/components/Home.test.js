import React from 'react';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../../src/redux/store';
describe('<Home />', ()=>{
    it('matches the snapshot', ()=>{
        let hometest = (<Provider store={store}><Home/></Provider>);
        let tree = renderer.create(hometest).toJSON();
        expect(tree).toMatchSnapshot();
    })
})