import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {t, i18n} from 'react-i18next';

import toJson from 'enzyme-to-json';
import { ReportsView } from '../../src/components/manageTravel/ReportsView';
import { allTravelRequestState, singleTravelState, updateTravelState } from '../../dummyData';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
describe(' <ReportsView />', ()=>{
    let props;
    let wrapper;
   
    it( 'It should render the ReportsView skeleton', ()=>{
        store = mockStore({
            manageTravel: {
                loading: true,
                travel: [],
                error: null
            },
            manageSingleTravel: {
                loading: true,
                travel: [],
                error: null
            },
            updateTravel: {
                loading: true,
                travel: [],
                error: null
            },
          });

        props= {
            travelRequest: {
                loading: true,
                travel: [],
                error: null
            },
            updateSingleTravel: {
                loading: true,
                travel: [],
                error: null
            },
            singleTravel: {
                loading: true,
                travel: [],
                error: null
            },
            category: 'approved',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        // console.log('component', component);
        expect(component).toMatchSnapshot();
    });

    it( 'It should render the ReportsView compnent', ()=>{
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
          });
    
        props= {
            travelRequest: allTravelRequestState,
            updateSingleTravel: updateTravelState,
            singleTravel: singleTravelState,
            category: 'approved',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })

    it( 'It should render the ReportsView component for pending reports', ()=>{
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
          });
    
        props= {
            travelRequest: allTravelRequestState,
            updateSingleTravel: updateTravelState,
            singleTravel: singleTravelState,
            category: 'pending',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })

    it( 'It should render the ReportsView component for Done reports', ()=>{
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
          });
    
        props= {
            travelRequest: allTravelRequestState,
            updateSingleTravel: updateTravelState,
            singleTravel: singleTravelState,
            category: 'done',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })

    it( 'It should render the ReportsView component for rejected reports', ()=>{
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
          });
    
        props= {
            travelRequest: allTravelRequestState,
            updateSingleTravel: updateTravelState,
            singleTravel: singleTravelState,
            category: 'rejected',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })
    it( 'It should render the ReportsView component for invalid category', ()=>{
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
          });
    
        props= {
            travelRequest: allTravelRequestState,
            updateSingleTravel: updateTravelState,
            singleTravel: singleTravelState,
            category: 'invalid',
            getTravelRequest: jest.fn(),
            updateSingleTravelRequest: jest.fn(),
            getSingleTravelRequest: jest.fn(),
            clearSingleRequest: jest.fn(),
            clearUpdateTravelRequest: jest.fn(),
    
        }
        wrapper= mount(<Provider store= {store} ><ReportsView { ...props } /></Provider>)
        const component= toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })
    
})

