import { shallow, mount } from "enzyme";
import React from 'react';
import toJson from "enzyme-to-json";
import { Confirm } from "../../src/components/signup/thirdStep";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import CreateLocation from '../../src/components/views/travelManager/CreateLocation';
import LocImage from '../../src/components/views/travelManager/createLocation/formSections/LocImage';
import { location } from '../../dummyData'
import thunk from "redux-thunk";
import { act } from "@testing-library/react";
import LocData from "../../src/components/views/travelManager/createLocation/formSections/LocData";

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
describe('CreateLocation', () => {
    
    describe('CreateLocation Rendering', ()=>{
        
 
        it('renders the component correctly', () => {
            store = mockStore({
                createLoc: {
                    pending: false,
                    location: null,
                    error: null,
                }
            });
            const props = {
                createLocation: jest.fn(),
                createLoc: {
                    pending: false,
                    location: null,
                    error: null,
                }
            }

            const wrapper = mount(<Provider store={store}><CreateLocation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it('renders the component when there is error', () => {
            store = mockStore({
                createLoc: {
                    pending: false,
                    location: null,
                    error: {
                        status: 500,
                        error: 'Internal server',
                    },
                }
            });
            const props = {
                createLocation: jest.fn(),
                createLoc: {
                    pending: false,
                    location: null,
                    error: {
                        status: 500,
                        error: 'Internal server'
                    },
                }
            }
            
            const wrapper = mount(<Provider store={store}><CreateLocation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it('renders the component when there is located is created successfully', () => {
            store = mockStore({
                createLoc: {
                    pending: false,
                    location: location,
                    error: null,
                }
            });
            const props = {
                createLocation: jest.fn(),
                createLoc: {
                    pending: false,
                    location: location,
                    error: null,
                }
            }
            
            const wrapper = mount(<Provider store={store}><CreateLocation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
       
        
    })

    describe( 'Testing Functionalities: ',()=>{
        const data = {
            id: "0880b2d1-662c-4782-8aed-252fdd0644c4",
            LocationName: "Dubai",
            country: "United Arab Emirates",
            description: "The world's biggest trade hub and tourist attractor",
            currency: "EUR",
            link: "",
        }
        const handleChange= jest.fn();
        const props= {
            data,
            handleChange,
        }
        it('Image input', async()=>{
            const wrapper= mount(<LocImage {...props} /> );
            await act( async ()=>{
                wrapper.find('#upload').simulate('change');
            })

        })
        it('Currency selector', ()=>{
            const wrapper= mount(<LocData {...props} /> );
            act(()=>{
                wrapper.find('#currency').at(0).simulate('change');
                // console.log(toJson(wrapper.find('#currency')));
            })

        })


    })
    

})
