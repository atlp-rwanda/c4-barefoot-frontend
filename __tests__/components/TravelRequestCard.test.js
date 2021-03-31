import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import toJson from 'enzyme-to-json';
import { TravelRequestCard } from '../../src/components/manageTravel/TravelRequestCard';
import { accommodationInfo, allTravelRequestState, singleTravelState, travelRequestInfo, updateTravelState, UserInfo } from '../../dummyData';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
describe(' <TravelRequestcard />', () => {
    let props;
    let wrapper;



    it('It should render the ReportsView compnent', () => {
        store = mockStore({
            manageTravel: allTravelRequestState,
            manageSingleTravel: singleTravelState,
            updateTravel: updateTravelState,
        });

        props = {
            userInfo: UserInfo,
            accomodationsInfo: accommodationInfo,
            travel: travelRequestInfo,
            category: 'approved',
            handleSingleTravel: jest.fn(),

        }
        wrapper = mount(<Provider store={store} ><TravelRequestCard {...props} /></Provider>)
        const component = toJson(wrapper);
        expect(component).toMatchSnapshot();
        // console.log('component', component);
    })

})