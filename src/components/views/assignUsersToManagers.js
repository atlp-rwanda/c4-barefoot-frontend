import React from 'react';
import { Redirect } from 'react-router-dom';
import AssignUsers from '../assignUsersToManagers';

const AssignUsersToManagers = (props) => {
  const userToken = localStorage.getItem("barefootUserToken");
  let authenticated = false;
  if(!userToken) {
    return <Redirect to={{pathname: '/login'}} />;
  };
  return <AssignUsers />;
}

export default AssignUsersToManagers;
