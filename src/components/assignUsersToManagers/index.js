import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import UsersList from './UsersList';
import { getManagersList, getVerifiedUsers } from '../../redux/actions/assignUserActions';
import FailureDialog from './FailureDialog';
import SuccessDialog from './SuccessDialog';

const AssignUsersToManagers = (props) => {
  const { addAssignActionToQueue, fetchVerifiedUsers, fetchAllManagers } = props;
  
  const dialog = addAssignActionToQueue.loaded && !addAssignActionToQueue.loading;
    const succeededDialog = (
      dialog
      && addAssignActionToQueue.success.length > 0 
      && addAssignActionToQueue.errors.length == 0
    );
  const failedDialog = dialog && !succeededDialog;
  const pending = (fetchAllManagers.pending && fetchVerifiedUsers.pending)
                  && !fetchAllManagers.loaded;
  const dispatch = useDispatch();
  useEffect(() => {
    props.getVerifiedUsers( 1, dispatch);
    props.getManagersList(dispatch);
  }, []);
  
  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <UsersList loading={pending} />
      {
        dialog
        ? <><SuccessDialog open={succeededDialog} /><FailureDialog open={failedDialog} /></>
        : <></>
      }
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
