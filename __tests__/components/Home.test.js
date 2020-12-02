import React from 'react';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';

describe('<Home />', ()=>{
    it('matches the snapshot', ()=>{
        let tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})