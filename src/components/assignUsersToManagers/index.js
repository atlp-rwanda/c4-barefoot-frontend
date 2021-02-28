import React from 'react';
import UsersList from './UsersList';
import SideMenu from './SideMenu';
import { Container } from '@material-ui/core';

const AssignUsersToManagers = () => {
  let loading = true;
  return (
    <div style={{display: 'flex', flexDirection: 'row', justify: 'flex-start'}}>
      <SideMenu />
      <UsersList />
    </div>
  );
}

export default AssignUsersToManagers;
