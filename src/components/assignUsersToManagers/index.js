import React from 'react';
import UsersList from './UsersList';
import SideMenu from './SideMenu';

const AssignUsersToManagers = () => {
  let loading = true;
  return (
    <div>
      <SideMenu />      
      <UsersList />
    </div>
  );
}

export default AssignUsersToManagers;
