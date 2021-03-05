import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import UsersList from './UsersList';
import { getManagersList, getVerifiedUsers } from '../../redux/actions/assignUserActions';
import FailureDialog from './FailureDialog';
import SuccessDialog from './SuccessDialog';

const AssignUsersToManagers = (props) => {
  const { addAssignActionToQueue, fetchVerifiedUsers, fetchAllManagers } = props;
  const successDialog = true, failureDialog = !successDialog;
  const pending = (fetchAllManagers.pending && fetchVerifiedUsers.pending)
                  && !fetchAllManagers.loaded;
  console.log({fetchVerifiedUsers,fetchAllManagers, addAssignActionToQueue});
  const dispatch = useDispatch();
  useEffect(() => {
    props.getVerifiedUsers(dispatch);
    props.getManagersList(dispatch);
  }, []);

  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <UsersList loading={pending} />
        <SuccessDialog open={successDialog} />
        <FailureDialog open={failureDialog}/>
    </Container>
  );
}

const mapStateToProps = state => ({
  fetchVerifiedUsers: state.fetchVerifiedUsers,
  fetchAllManagers: state.fetchAllManagers,
  addAssignActionToQueue: state.addAssignActionToQueue
});

export { AssignUsersToManagers };

export default connect(mapStateToProps, { getVerifiedUsers, getManagersList })(AssignUsersToManagers);
