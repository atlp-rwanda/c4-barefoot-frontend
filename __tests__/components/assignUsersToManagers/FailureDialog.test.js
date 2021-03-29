import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow , mount} from "enzyme";
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import FailureDialog from '../../../src/components/assignUsersToManagers/FailureDialog';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
store = mockStore({
  addAssignActionToQueue: { pendingTasks: undefined }
});

describe('Failure Dialog while assigning users to managers', () => {
    const props = { open: true };
    it('should be rendered without errors', () => {
      const failureDialog = shallow(
        <Provider store={store}>
          <FailureDialog {...props} />
        </Provider>
      );
      expect(toJson(failureDialog)).toMatchSnapshot();
    });
});
