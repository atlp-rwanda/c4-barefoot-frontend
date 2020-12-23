import React from 'react'
import LandingPage from '../../src/components/views/LandingPage'
import { locationState, accommodationState } from '../../dummyData'
import { shallow , mount} from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json';
const mockStore = configureStore([]);

const store = mockStore({
  fetchLocations: locationState,
  fetchAccommodations:  accommodationState,
})

const props = {
  getLocations: jest.fn(),
  getAccommodations: jest.fn()
}

const landingPageComponent = shallow(
  <Provider store = {store}>
    <LandingPage/>
  </Provider>
)

describe('Landing Page test', () => {
  
  it('Renders without crashing', () => {
   const tree = toJson(landingPageComponent)
   expect(tree).toMatchSnapshot();
    
  })

  it("renders correctly", () => {
    const wrapper = mount(
    <Provider store = {store}>
      <LandingPage {...props} />
    </Provider>);
    expect(wrapper.state("error")).toEqual(null);
  });
})

