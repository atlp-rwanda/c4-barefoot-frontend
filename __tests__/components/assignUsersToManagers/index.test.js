import React from 'react';
import { shallow , mount} from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import { Container } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import renderer from 'react-test-renderer';
import { AssignUsersToManagers } from '../../../src/components/assignUsersToManagers/index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
const props = {
  fetchVerifiedUsers: {
    page: 1,
    pending: false,
    error: null,
    verifiedUsers: {
      count: 12,
      loaded: true,
      rows: [
        {
          id: '83b2a3e7-9ba4-4d3f-b3a3-d31940ee2edc',
          first_name: 'Requester',
          last_name: 'One',
          email: 'sequester@gmail.com',
          username: 'requesterOne',
          occupation: 'requester_occupation',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-26T10:18:32.069Z'
        },
        {
          id: '122a0d86-8b78-4bb8-b28f-8e5f7811c456',
          first_name: 'SUper',
          last_name: 'Admin',
          email: 'superadmin@gmail.com',
          username: 'superadmin',
          occupation: 'admin_occupation',
          bio: null,
          verified: true,
          user_role_id: 'eface43c-2e49-473b-bbe2-305d1a5190f1',
          manager_id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-26T10:39:51.193Z'
        },
        {
          id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          first_name: 'Manager',
          last_name: 'Two',
          email: 'managertwo@gmail.com',
          username: 'managertwo',
          occupation: 'manager_occupation',
          bio: null,
          verified: true,
          user_role_id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
          manager_id: 'a9610cf3-4056-41dd-92ca-463088e23d07',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-16T23:19:22.766Z'
        },
        {
          id: '0ce36391-2c08-4703-bddb-a4ea8cccbbc5',
          first_name: 'Manager',
          last_name: 'One',
          email: 'mj@gmail.com',
          username: 'managerOne',
          occupation: 'manager_occupation',
          bio: null,
          verified: true,
          user_role_id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
          manager_id: 'a9610cf3-4056-41dd-92ca-463088e23d07',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-16T23:19:22.770Z'
        },
        {
          id: '4e15eacb-d617-4b94-9dea-1a296b661a8a',
          first_name: 'TestName',
          last_name: 'TestName',
          email: 'renedeolynda@gmail.com',
          username: 'TestAdmin',
          occupation: 'software development',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: '0ce36391-2c08-4703-bddb-a4ea8cccbbc5',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T14:42:02.698Z',
          updatedAt: '2021-03-17T09:02:09.407Z'
        },
        {
          id: 'a9610cf3-4056-41dd-92ca-463088e23d07',
          first_name: 'Manager',
          last_name: 'Manager',
          email: 'With_LineManager@gmail.com',
          username: 'With_LineManager',
          occupation: 'manager_occupation',
          bio: null,
          verified: true,
          user_role_id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
          manager_id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-27T21:32:18.661Z'
        },
        {
          id: 'd74fcc5e-5755-4366-83ef-cf306b013c46',
          first_name: 'pushRequester',
          last_name: 'One',
          email: 'pushnotfication@gmail.com',
          username: 'pushrequester',
          occupation: 'push_notification_requester',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: '0ce36391-2c08-4703-bddb-a4ea8cccbbc5',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T07:32:00.556Z',
          updatedAt: '2021-03-26T09:45:35.098Z'
        },
        {
          id: '32898fa8-7f3c-4b0a-908a-b2a9f506ea5d',
          first_name: 'Robby',
          last_name: 'Rob',
          email: 'mungerifraffaak@gmail.com',
          username: 'mfrawk37w',
          occupation: 'Engineer',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T16:59:46.490Z',
          updatedAt: '2021-03-26T10:33:54.319Z'
        },
        {
          id: '0833c3bb-7525-40fc-ba66-9d778c1008eb',
          first_name: 'Mun',
          last_name: 'Frank',
          email: 'mungerifranfffk@gmail.com',
          username: 'mfrank37w',
          occupation: 'Engineer',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: 'a9610cf3-4056-41dd-92ca-463088e23d07',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T16:55:51.553Z',
          updatedAt: '2021-03-26T10:12:25.093Z'
        },
        {
          id: '7cc49081-43fe-413c-a1d7-fb8d21ad1927',
          first_name: 'MUNGERI',
          last_name: 'Frank',
          email: 'mungerifrank@gmail.com',
          username: 'mfrank37',
          occupation: 'Engineer',
          bio: null,
          verified: true,
          user_role_id: '45429837-ed2c-435d-bc22-ad9c5dbe3782',
          manager_id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          profile_picture: 'https://cdn.filestackcontent.com/Nvdf2SQRFSR8adGrueTw',
          language: 'English',
          address: 'Kigali',
          createdAt: '2021-03-16T16:51:50.516Z',
          updatedAt: '2021-03-26T10:33:54.315Z'
        }
      ]
    }
  },
    fetchAllManagers: {
      pending: false,
      error: null,
      getAllManagers: [
        {
          id: 'fb94de4d-47ff-4079-89e8-b0186c0a3be8',
          first_name: 'Manager',
          last_name: 'Two',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          email: 'managertwo@gmail.com',
          username: 'managertwo',
          address: 'Kigali',
          user_role: {
            id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
            name: 'manager',
            description: null,
            createdAt: '2021-03-16T07:31:59.564Z',
            updatedAt: '2021-03-16T07:31:59.564Z'
          }
        },
        {
          id: '0ce36391-2c08-4703-bddb-a4ea8cccbbc5',
          first_name: 'Manager',
          last_name: 'One',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          email: 'mj@gmail.com',
          username: 'managerOne',
          address: 'Kigali',
          user_role: {
            id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
            name: 'manager',
            description: null,
            createdAt: '2021-03-16T07:31:59.564Z',
            updatedAt: '2021-03-16T07:31:59.564Z'
          }
        },
        {
          id: 'a9610cf3-4056-41dd-92ca-463088e23d07',
          first_name: 'Manager',
          last_name: 'Manager',
          profile_picture: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          email: 'With_LineManager@gmail.com',
          username: 'With_LineManager',
          address: 'Kigali',
          user_role: {
            id: '7254a9e7-2e1b-4f83-ad73-78b90dd3df77',
            name: 'manager',
            description: null,
            createdAt: '2021-03-16T07:31:59.564Z',
            updatedAt: '2021-03-16T07:31:59.564Z'
          }
        }
      ],
      loaded: false
  },
  addAssignActionToQueue: {
    addAssignActionToQueue: {
      loading: false,
      loaded: false,
      errors: [],
      success: [],
      pendingTasks: {}
    }
  }
};
store = mockStore({
  fetchVerifiedUsers: props.fetchVerifiedUsers,
  fetchAllManagers: props.fetchAllManagers,
  addAssignActionToQueue: props.addAssignActionToQueue
});

describe('<AssignUsersToManager /> : ', () => {
  
  it('Renders without crashing', () => {
    const assignUsers = renderer.create(
      <Provider store={store}>
        <AssignUsersToManagers {...props} />
      </Provider>
    ).toJSON();
    // const tree = toJson(assignUsers);
    expect(assignUsers).toMatchSnapshot();
  });
});
