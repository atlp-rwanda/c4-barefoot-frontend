import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import UsersList from './UsersList';
import SideMenu from './SideMenu';
import { getVerifiedUsers } from '../../redux/actions/assignUserActions';

const AssignUsersToManagers = (props) => {
  const { fetchVerifiedUsers } = props;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log({dispatch, test: 'useEffect()'});
  //   getVerifiedUsers(dispatch);
  // });
  useEffect(() => {
    props.getVerifiedUsers(dispatch);
  }, []);
  console.log(props.fetchVerifiedUsers);

  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <SideMenu />
      <UsersList loading={fetchVerifiedUsers.pending}/>
    </Container>
  );
}

const mapStateToProps = state => ({
  fetchVerifiedUsers: state.fetchVerifiedUsers
});

export { AssignUsersToManagers };

export default connect(mapStateToProps, { getVerifiedUsers })(AssignUsersToManagers);
