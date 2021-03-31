import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getAccommodations } from "../../src/redux/actions/fetchAccommodations";
import { accommodationsPayload } from "../../dummyData";
import moxios from "moxios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const URL = process.env.REACT_APP_BACKEND_LINK;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});
let mock = new MockAdapter(axios);
describe("Fetch accommodations actions", () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({ fetchAccommodations: {} });
  });
  afterEach(() => moxios.uninstall());

  it("Creates FETCH_ACCOMMODATIONS_SUCCESS after task is successful", () => {
    mock
      .onGet(`${URL}/accommodations`)
      .reply(200, { response: { accommodations: accommodationsPayload } });
    store.dispatch(getAccommodations()).then((res) => {
      const action = [
        {
          type: "FETCH_ACCOMMODATIONS_SUCCESS",
          payload: accommodationsPayload,
        },
      ];
      expect(store.getActions().type).toEqual(action.type);
    });
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent()
    //   request.respondWith({
    //    status: 200,
    //    response: {
    //       accommodations: {
    //         rows: accommodationsPayload
    //       }
    //    }
    //    })
    // })

    // return store.dispatch(actions.getAccommodations()).then(() => {
    //   const expectedActions = store.getActions();
    //   expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_SUCCESS')
    // })
  }, 5000);

  it("Dispatches FETCH_ACCOMMODATIONS_ERROR after task is unsuccessful", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          data: "internal server error",
        },
      });
    });

    return store.dispatch(getAccommodations()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[1].type).toEqual("FETCH_ACCOMMODATIONS_ERROR");
    });
  });
});
