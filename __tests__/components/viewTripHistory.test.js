import React from "react";
// import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import toJson from "enzyme-to-json";
import ViewTripHistoryCard from "../../src/components/userTripHistory/ViewTripHistoryCard";
import {
  accommodationInfo,
  allTravelRequestState,
  travelRequestInfo,
  locationState,
  UserInfo,
} from "../../dummyData";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
describe(" <ViewTripHistoryCard />", () => {
  let props;
  let wrapper;

  it("It should render the trip history compnent", () => {
    store = mockStore({
      manageTravel: allTravelRequestState,
    });

    props = {
      userInfo: UserInfo,
      accomodationsInfo: accommodationInfo,
      travel: travelRequestInfo,
      getTripHistory: jest.fn(),
      getAccommodation: jest.fn(),
    };
    wrapper = mount(
      <Provider store={store}>
        <ViewTripHistoryCard {...props} />
      </Provider>
    );
    const component = toJson(wrapper);
    expect(component).toMatchSnapshot();
    // console.log('component', component);
  });
});
