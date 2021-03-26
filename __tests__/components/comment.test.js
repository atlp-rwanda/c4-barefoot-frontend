import React from 'react'
import {shallow,mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toJson from 'enzyme-to-json'
import Comments from '../../src/components/comment/Comment'
import { accommodationInfo, allTravelRequestState, singleTravelState, travelRequestInfo, updateTravelState, UserInfo } from '../../dummyData'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
let  store = useStore();

describe('<Comments />', ()=>{
let props;
let wrapper

t( 'It should render the ReportsView compnent', ()=>{
    store = mockStore({
        manageTravel: allTravelRequestState,
        manageSingleTravel: singleTravelState,

      });

    props= {
        userInfo: UserInfo,
        accomodationsInfo: accommodationInfo,
        travel: travelRequestInfo,
        handleSingleTravel: jest.fn(),
           
    }
    wrapper= mount(<Provider store= {store} ><Comments { ...props } /></Provider>)
    const component= toJson(wrapper);
    expect(component).toMatchSnapshot();
    // console.log('component', component);
})



})