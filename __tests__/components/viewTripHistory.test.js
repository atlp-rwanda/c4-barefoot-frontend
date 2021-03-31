import React from "react";
// import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import toJson from "enzyme-to-json";
import { ViewTripHistoryCard } from "../../src/components/userTripHistory/ViewTripHistoryCard";
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
      match: {
        params: {
          location: "Nyanza",
        },
      },
      userInfo: UserInfo,
      accomodationsInfo: accommodationInfo,
      travel: travelRequestInfo,
      getTripHistory: jest.fn(),
      getAccommodation: jest.fn(),
      trips: [
        {
          tripId: "98624254-da4c-47bd-91da-53d9d89172cc",
          originCity: "MUSANZE",
          destination: "KARONGI",
          reason: "Research and market development trip in rular areas",
          tripDate: "2020-12-20T08:53:31.303Z",
          returnDate: null,
          accommodationId: "598d90a3-68e6-43ac-970a-2855657be478",
          createdAt: "2021-03-02T11:18:36.600Z",
          updatedAt: "2021-03-02T11:18:36.600Z",
          travelId: "59ba77ce-3649-4b8a-bed6-b127cc1c530f",
        },
      ],
    };
    wrapper = shallow(
      <Provider store={store}>
        <ViewTripHistoryCard {...props} />
      </Provider>
    );
    const component = toJson(wrapper);
    expect(component).toMatchSnapshot();
    // console.log('component', component);
  });
});
