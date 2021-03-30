import React from "react";
import IndividualHistory from "../../src/components/userTripHistory/IndividualHistory";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { getAccommodationState } from "../../dummyData";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

store = mockStore({
  fetchTripHistory: getAccommodationState,
});

const props = {
  getAccommodation: jest.fn(),
};

describe("<IndividualHistory />", () => {
  let wrapper;
  it("should be rendered without errors", () => {
    wrapper = mount(
      <Provider store={store}>
        <IndividualHistory {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
