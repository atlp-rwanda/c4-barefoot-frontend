import { shallow, mount } from "enzyme";
import React from 'react';
import toJson from "enzyme-to-json";
import { FirstStep } from "../../../src/components/bookAccommodation/firstStep";
import { SecondStep } from "../../../src/components/bookAccommodation/secondStep";
//import Signup from '../../src/components/signup'
import { ThirdStep } from "../../../src/components/bookAccommodation/thirdStep";
//import SocialButtons from '../../src/components/signup/socialButton'
//import SideDiv from "../../src/components/signup/sideDiv";
import {act} from 'react-dom/test-utils'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { accommodationsPayload,bookAccommodationState,accommodationState} from '../../../dummyData'
import thunk from "redux-thunk";

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
describe('Book Accommodation', () => {
    let formData = new FormData()
    store = mockStore({
        fetchAccommodations:  accommodationState,
        bookAccommodations:bookAccommodationState
      });
    const props = {
        accommodation:{
      
            id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
            country: "Rwanda",
            city: "Kigali",
            title: "Marriot Hotel",
            description: "A serene environment for relaxation",
            photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",
        
        },
        selectedAccommodation:'1243534gfdggs-ggfdrdrd-t66fytftf',
        accommodations:accommodationsPayload.rows,
        count:6,
        snackBarMessage: {
            open: false,
            severity: '',
            message: null
          },
        formData:formData,
        clearBookSnackbar:jest.fn(),
        setFormData: function(){},
        nextStep: function(){},
        prevStep: function(){},
        profile_picture: 'image.jpg'
    }
    describe('Signup Rendering', ()=>{
        
        it('renders correctly first step', () => {
            const wrapper = shallow(<Provider store={store}><FirstStep {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        // it('renders correctly Signup index', () => {
        //     const wrapper = shallow(<Signup {...props}/>)
        //     expect(toJson(wrapper)).toMatchSnapshot();
        // });
        it('renders correctly Third step', () => {
            const wrapper = shallow(<Provider store={store}><ThirdStep {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        // it('renders side div correctly', () => {
        //     const wrapper = shallow(<SideDiv />)
        //     expect(toJson(wrapper)).toMatchSnapshot();
        // });
        // it('renders Social buttons correctly', () => {
        //     const wrapper = shallow(<SocialButtons />)            
        //     expect(toJson(wrapper)).toMatchSnapshot();
        // });
        
    })
    describe('Functionalities', () => {
        // it('should call onChange prop with input value', () => {
        
        //         const onSearchMock = jest.fn();
        //         const component = mount(<Provider store={store}><SecondStep onChange={onSearchMock} {...props}/></Provider>);
        //         act( () => {   
        //             component.find('#file').simulate('change');
        //         })
            
        // });
        it('should call onSubmit on first step', () => {
        
            const onSubmit = jest.fn();
            const component = mount(<Provider store={store}><FirstStep onSubmit={onSubmit} {...props}/></Provider>);
            act( () => {   
                component.find('[type="submit"]').first().simulate('click');
            })
        
        });

        it('should call onSubmit on first step', () => {
        
            const handleChange = jest.fn();
            const component = mount(<Provider store={store}><FirstStep onChange={handleChange} {...props}/></Provider>);
            act( () => {   
                component.find('#pagination').first().simulate('change');
            })
        
        });

        it('should call onSubmit on Second step', () => {
        
            const onSubmit = jest.fn();
            const component = mount(<Provider store={store}><SecondStep onSubmit={onSubmit} {...props} values="custom value" /></Provider>);
            act( () => {   
                component.find('[type="submit"]').first().simulate('click');
            })
        
        });
        it('should call onSubmit on Third step', () => {
        
            const onClick = jest.fn();
            const component = mount(<Provider store={store}><ThirdStep onClick={onClick} {...props} values="custom value" /></Provider>);
            act( () => {   
                component.find('[id="backBtn"]').first().simulate('click');
            })
        
        });
        it('should call onClick for backward on second step', async() => {
            
            const signupRequest = jest.fn()
                         
            const component = mount(<Provider store={store}><SecondStep onClick={signupRequest} {...props} /></Provider>) 
            const button = component.find('#backBtn').at(0)
            await act( async() => {
                button.simulate('click');
            });
            expect(button.length).toBe(1)
            expect(signupRequest.mock.calls.length).toEqual(0);
        });
        it('should call onClick to submit form', async() => {
            
            const signupRequest = jest.fn()
                         
            const component = mount(<Provider store={store}><ThirdStep {...props} /></Provider>) 
            const button = component.find('[btn="submitBtn"]').first()
            await act( async() => {
                button.simulate('click');
            });
            expect(button.length).toBe(1)
            expect(signupRequest.mock.calls.length).toEqual(0);
        });
        // it('submit form', async() => {
        //     const component = mount(<Provider store={store}><FirstStep {...props} /></Provider>) 
        //     const button = component.find('[form-data="form-1"]').first()
        //     await act( async() => {
        //         button.simulate('submit');
        //     });
        //     expect(button.length).toBe(1)
        // });

    })

})
