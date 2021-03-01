import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import UsersList from './UsersList';
import SideMenu from './SideMenu';
import { getManagersList, getVerifiedUsers } from '../../redux/actions/assignUserActions';

const AssignUsersToManagers = (props) => {
  const { fetchVerifiedUsers, fetchAllManagers } = props;
  const pending = (fetchAllManagers.pending && fetchVerifiedUsers.pending)
                  && !fetchAllManagers.loaded;
  console.log({fetchVerifiedUsers,fetchAllManagers});
  console.log({pending});
  const dispatch = useDispatch();
  useEffect(() => {
    props.getVerifiedUsers(dispatch);
    props.getManagersList(dispatch);
  }, []);

  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <SideMenu />
      <UsersList loading={pending} />
    </Container>
  );
}

const mapStateToProps = state => ({
  fetchVerifiedUsers: state.fetchVerifiedUsers,
  fetchAllManagers: state.fetchAllManagers
});

export { AssignUsersToManagers };

export default connect(mapStateToProps, { getVerifiedUsers, getManagersList })(AssignUsersToManagers);
