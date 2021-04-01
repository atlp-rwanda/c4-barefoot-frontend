import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../src/redux/actions/CommentActon";
import moxios from "moxios";
import { comments } from "../../dummyData";

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("Create comments", () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({ fetchUserProfile: {} });
  });

  afterEach(() => moxios.uninstall());

  it("Creates comments successfully", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_SUCCESS");
    });
  });

  it("Create comments is unsuccessful with response porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          data: "Internal server error",
        },
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("Create comment is unsuccessful with message porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        message: "network error",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("Create comment is unsuccessful with requeat porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 403,
        request: "Unathorised",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("Create comment is unsuccessful with error porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        error: "resource not found",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });
});

describe("retrieve comments", () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({ fetchUserProfile: {} });
  });

  afterEach(() => moxios.uninstall());

  it("retrieve comments successfully", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_SUCCESS");
    });
  });

  it("retrieve comments is unsuccessful with response porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          data: "Internal server error",
        },
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("retrieve comment is unsuccessful with message porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        message: "network error",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("retrieve comment is unsuccessful with requeat porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 403,
        request: "Unathorised",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });

  it("retrieve comment is unsuccessful with error porperty", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        error: "resource not found",
      });
    });

    return store.dispatch(actions.retrieveComments()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual("RETRIEVE_COMMENTS_PENDING");
      expect(expectedActions[1].type).toEqual("RETRIEVE_COMMENTS_FAIL");
    });
  });
});
