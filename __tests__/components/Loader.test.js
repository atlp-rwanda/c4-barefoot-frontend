import React from 'react';
import Loader from '../../src/components/Loader';
import {Fade, CircularProgress,Typography, Modal} from '@material-ui/core';
import {shallow, mount} from 'enzyme';
import toJson from "enzyme-to-json";
describe('<Loader />', () =>{
    let wrapper;
    it('should be rendered without errors', ()=>{
        const props ={ open:true}
        wrapper = shallow(<Loader {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('should open', () =>{
        expect(wrapper.find(Fade).props().children.props.children[1].props.children).toEqual("Processing ...");
        expect(wrapper.find(Fade).length).toBe(1);
        expect(wrapper.find(Modal).length).toBe(1);
        expect(wrapper.find(Modal).props().open).toBe(true);
        expect(wrapper.find(Fade).props().in).toBe(true);
        
    })
    it('should close', () =>{
        const props ={ open:false}
        wrapper = shallow(<Loader {...props}/>);
        expect(wrapper.find(Fade).props().in).toBe(false);
        expect(wrapper.find(Modal).props().open).toBe(false);

    });
    it('should have 1 circular Progress', () =>{
        expect(wrapper.find(CircularProgress).length).toBe(1);
    })
    it('should have 1 Typography', () =>{
        expect(wrapper.find(Typography).length).toBe(1);
    })
    it('should have the Typography of Processing ...', () =>{
        expect(wrapper.find(Fade).props().children.props.children[1].props.children).toEqual('Processing ...');
    })
    it('should use mount as well', () =>{
        const props={open: true}
        wrapper  = mount(<Loader {...props}/>);
        expect(wrapper.find(Fade).props().children.props.children[1].props.children).toEqual('Processing ...');
    })
})