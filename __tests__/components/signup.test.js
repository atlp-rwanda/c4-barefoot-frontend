import { shallow, mount } from "enzyme";
import React from 'react';
import toJson from "enzyme-to-json";
import { FirstStep } from "../../src/components/signup/firstStep";
import { SecondStep } from "../../src/components/signup/secondStep";
import Signup from '../../src/components/signup'
import { Confirm } from "../../src/components/signup/thirdStep";
import verifyAccount from "../../src/components/signup/verifyAccount";
import SocialButtons from '../../src/components/signup/socialButton'
import SideDiv from "../../src/components/signup/sideDiv";
import {act} from 'react-dom/test-utils'
import { BrowserRouter as Router } from "react-router-dom";

describe('Signup', () => {
    let formData = new FormData()

    const props = {
        formData:formData,
        setFormData: function(){},
        nextStep: function(){},
        prevStep: function(){},
        profile_picture: 'image.jpg'
    }
    describe('Signup Rendering', ()=>{
        
        it('renders correctly first step', () => {
            const wrapper = shallow(<FirstStep {...props}/>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('renders correctly Signup index', () => {
            const wrapper = shallow(<Signup {...props}/>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('renders correctly Third step', () => {
            const wrapper = shallow(<Confirm {...props}/>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('renders side div correctly', () => {
            const wrapper = shallow(<SideDiv />)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('renders Social buttons correctly', () => {
            const wrapper = shallow(<SocialButtons />)            
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        
    })
    describe('Functionalities', () => {
        it('should call onChange prop with input value', () => {
        
                const onSearchMock = jest.fn();
                const component = mount(<SecondStep onChange={onSearchMock} {...props} value="custom value" />);
                act( () => {   
                    component.find('#file').simulate('change');
                    // expect(onSearchMock).toBeCalledWith('image.jpg');
                })
            
        });
        it('should call onSubmit on first step', () => {
        
            const onSubmit = jest.fn();
            const component = mount(<Router><FirstStep onSubmit={onSubmit} {...props} values="custom value" /></Router>);
            act( () => {   
                component.find('[type="submit"]').first().simulate('click');
            })
        
        });
        it('should call onSubmit on Second step', () => {
        
            const onSubmit = jest.fn();
            const component = mount(<Router><SecondStep onSubmit={onSubmit} {...props} values="custom value" /></Router>);
            act( () => {   
                component.find('[type="submit"]').first().simulate('click');
            })
        
        });
        it('should call onSubmit on Third step', () => {
        
            const onClick = jest.fn();
            const component = mount(<Router><Confirm onClick={onClick} {...props} values="custom value" /></Router>);
            act( () => {   
                component.find('[id="backBtn"]').first().simulate('click');
            })
        
        });
        // it('should call onClick to submit form', async (done) => {
            
        //         const signupRequest = jest.fn();
        //         const handleClose = jest.fn();
        //         try{
        //             console.log("try.........................")
        //             act(() => { 
        //                 // const component = 
        //                     mount(<Confirm onClick={signupRequest} handleClose={handleClose} {...props} />).find('[btn="submitBtn"]').first().simulate('click');
        //                 // component
                       
        //             }); 
        //             done()
        //             console.log("try end___________________________")
        //         }catch(e){
        //             console.log("catch_________________________")
        //             done.fail(e)
        //         }
                
        // });
    })

})
