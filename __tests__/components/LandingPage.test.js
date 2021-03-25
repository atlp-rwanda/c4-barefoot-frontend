import React from 'react'
import LandingPage from '../../src/components/views/LandingPage'
import { locationState, accommodationState } from '../../dummyData'
import { shallow , mount} from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import { Container } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;

store = mockStore({
  fetchLocations: locationState,
  fetchAccommodations:  accommodationState,
})

const props = {
  getLocations: jest.fn(),
  getAccommodations: jest.fn()
}

describe('Landing Page test', () => {
  
  it('Renders without crashing', () => {
    const landingPageComponent = shallow(
      <Provider store = {store}>
        <LandingPage/>
      </Provider>
    )
    const tree = toJson(landingPageComponent)
    expect(tree).toMatchSnapshot();
    
  })

  it("renders correctly", () => {
    const wrapper = mount(
    <Provider store = {store}>
      <LandingPage {...props} />
    </Provider>);
    expect(wrapper.find(Container).length).toBe(2);
  });

  it("Shows skeletons when there is no data", () => {
    store = mockStore({
      fetchLocations: {pending: true},
      fetchAccommodations:  {pending: true},
    })

    const wrapper = mount(
      <Provider store = {store}>
        <LandingPage {...props} />
      </Provider>);

    expect(wrapper.find(Skeleton).length).toBe(13)
  })
})

