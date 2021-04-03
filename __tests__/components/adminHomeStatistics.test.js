import React from 'react'
import Home, { SectionSkeleton } from '../../src/components/views/Admin/Home';
import {statistics } from '../../dummyData'
import { shallow , mount} from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;

store = mockStore({
  fetchAllUsers: {pending: false, count: 2},
  fetchStatistics:  {pending: false, statistics},
  fetchVisitors: {pending: false, count: 3}
});

describe('admin Home / Statistics test', () => {
  
  it('Renders without crashing', () => {
    const adminHome = shallow(
      <Provider store = {store}>
        <Home/>
      </Provider>
    );
    const tree = toJson(adminHome);
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const wrapper = mount(
    <Provider store = {store}>
      <Home />
    </Provider>);
    expect(wrapper.find(Home)).toBeTruthy();
  });

  it("renders <SectionSkeleton />", () => {
      const wrapper = mount(
          <SectionSkeleton />
      );
      expect(wrapper).toMatchSnapshot();
  })
});
