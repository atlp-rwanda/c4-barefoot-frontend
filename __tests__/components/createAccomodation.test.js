import { shallow, mount } from "enzyme";
import React from 'react';
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import {CreateAccomodation} from '../../src/components/views/travelManager/CreateAccomodation';
import LocImage from '../../src/components/views/travelManager/createLocation/formSections/LocImage';
import { locationsData, accomodation } from '../../dummyData';
import thunk from "redux-thunk";
import { act } from "@testing-library/react";
import AccImage from "../../src/components/views/travelManager/createAccomodation/formSections/AccImage";
import AccCapacity from "../../src/components/views/travelManager/createAccomodation/formSections/AccCapacity";
import { Box, Select, TextField } from "@material-ui/core";
import AccLocation from "../../src/components/views/travelManager/createAccomodation/formSections/AccLocation";
import AccAmenities from "../../src/components/views/travelManager/createAccomodation/formSections/AccAmenities";

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
describe('CreateAccomodation', () => {
    
    describe('CreateAccomodation Rendering: ', ()=>{
        
 
        it('renders the component correctly', () => {
            store = mockStore({
                createAcc: {
                    pending: false,
                    accomodation: null,
                    error: null,
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            });
            const props = {
                createAccomodation: jest.fn(),
                getLocations: jest.fn(),
                createAcc: {
                    pending: false,
                    accomodation: null,
                    error: null,
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            }

            const wrapper = mount(<Provider store={store}><CreateAccomodation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it('renders the component when there is error', () => {
            store = mockStore({
                createAcc: {
                    pending: false,
                    accomodation: null,
                    error: {
                        status: 500,
                        error: "internal server error",
                    },
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            });
            const props = {
                createAccomodation: jest.fn(),
                getLocations: jest.fn(),
                createAcc: {
                    pending: false,
                    accomodation: null,
                    error: {
                        status: 500,
                        error: "internal server error",
                    },
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            }
            
            const wrapper = mount(<Provider store={store}><CreateAccomodation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it('renders the component when there is located is created successfully', () => {
            store = mockStore({
                createAcc: {
                    pending: false,
                    accomodation: accomodation,
                    error: null,
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            });
            const props = {
                createAccomodation: jest.fn(),
                getLocations: jest.fn(),
                createAcc: {
                    pending: false,
                    accomodation: accomodation,
                    error: null,
                },
                locationsData: {
                    pending: false,
                    locations: locationsData,
                    error: null,
                }
            }
            const wrapper = mount(<Provider store={store}><CreateAccomodation {...props}/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot();
        });
       
        
    })

    describe( 'Testing Functionalities: ',()=>{
        const data = {
            country: "Dubai",
            city: "Dubai",
            state: "Al Hilal",
            streetAddress: "St 21, Dub, UAE",
            locationID: "0880b2d1-662c-4782-8aed-252fdd0644c4",
            propertyType: "Motel",
            numberOfRooms: 12,
            price: 123000,
            typeOfBed: "single",
            title: "Dubai rest view hotel",
            description: "This the best place for tourists to rest in Dubai",
            photos: "",

        }
        
        it('Image input', async()=>{
            const toggles= {
            
                location:{
                    open: false,
                },
                capacity:{
                    open: false,
                },
                description:{
                    open: false,
                },
                image:{
                    open: true,
                },
                amenities:{
                    open: false,
                },                
            };
            const handleToggle= jest.fn();

            const handlePhoto= jest.fn();
            const props= {
                data,
                handlePhoto,
                toggles,
                handleToggle,
            }
            const wrapper= mount(<AccImage {...props} /> );
            await act( async ()=>{
                wrapper.find('#upload').simulate('change');
            })

        })

        it('Image input section when there is an image input', async()=>{
            const toggles= {
            
                location:{
                    open: false,
                },
                capacity:{
                    open: false,
                },
                description:{
                    open: false,
                },
                image:{
                    open: true,
                },
                amenities:{
                    open: false,
                },                
            };
            const handleToggle= jest.fn();

            const handlePhoto= jest.fn();
            const props= {
                data: {
                    ...data, 
                    photos: 'https://res.cloudinary.com/nowo-ltd/image/upload/v1616179879/barefoot%20uploads/txmzilh8lxwv4u63mvz3.jpg'
                },
                handlePhoto,
                toggles,
                handleToggle,
            }
            const wrapper= mount(<AccImage {...props} /> );
            expect(wrapper.find('img').length).toBe(1);
            
        });

        it('AccCapacity section', async()=>{
            const toggles= {
            
                location:{
                    open: false,
                },
                capacity:{
                    open: true,
                },
                description:{
                    open: false,
                },
                image:{
                    open: false,
                },
                amenities:{
                    open: false,
                },                
            };
            const handleToggle= jest.fn();

            const handleChange= jest.fn();
            const props= {
                data,
                handleChange,
                toggles,
                handleToggle,
            }
            const wrapper= mount(<AccCapacity {...props} /> );
            expect(toJson(wrapper)).toMatchSnapshot();

        });

        it('AccLocation section', async()=>{
            const toggles= {
            
                location:{
                    open: true,
                },
                capacity:{
                    open: false,
                },
                description:{
                    open: false,
                },
                image:{
                    open: false,
                },
                amenities:{
                    open: false,
                },                
            };
            const regionInfo= '';
            const handleToggle= jest.fn();

            const handleChange= jest.fn();
            const props= {
                data,
                handleChange,
                toggles,
                handleToggle,
                regionInfo,
                handleLocation: jest.fn(),
                locationsData,
            }
            const wrapper= mount(<AccLocation {...props} /> );
            expect(toJson(wrapper)).toMatchSnapshot();

        });

        it('AccAmenities section', async()=>{
            const amenities= {
                wifi: false,
                airConditioner: false,
                shampoo: false,
                ironing: false,
                tv: false,
                smokeDetector: false,
                fireExtinguisher: false,
                lockOnDoor: false,
            };

            const toggles= {
            
                location:{
                    open: false,
                },
                capacity:{
                    open: false,
                },
                description:{
                    open: false,
                },
                image:{
                    open: false,
                },
                amenities:{
                    open: true,
                },                
            };
            const handleToggle= jest.fn();
            

            const props= {
                data,
                toggles,
                handleToggle,
                handleAmenity: jest.fn(),
                amenities,
            }
            const wrapper= mount(<AccAmenities {...props} /> );
            expect(toJson(wrapper)).toMatchSnapshot();
            wrapper.find(Box).at(1).simulate('click');
            wrapper.find({name: 'tv'}).at(0).simulate('change');

        });

    })
    

})
