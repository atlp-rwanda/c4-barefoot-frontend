import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import UsersList from './UsersList';
import { getManagersList, getVerifiedUsers } from '../../redux/actions/assignUserActions';
import { usersListPage } from '../../redux/actions/assignUserActions';
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
  // const failedDialog = false;
  const pending = (fetchAllManagers.pending && fetchVerifiedUsers.pending)
                  && !fetchAllManagers.loaded;
  // console.log({fetchVerifiedUsers, fetchAllManagers, addAssignActionToQueue});
  const dispatch = useDispatch();
  if(addAssignActionToQueue.refresh) {
    dispatch({type: 'REFRESH_USERS_LIST_WITH_MANAGERS'});
  }
  const [page, handlePage] = useState(1);
  useEffect(() => {
    props.getVerifiedUsers(page, dispatch);
    props.getManagersList(dispatch);
  }, []);
  
  const handlePageChange = (evt, page) => {
    usersListPage(page)(dispatch);
  }
  console.log({addAssignActionToQueue});
  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <UsersList loading={pending} page={page} handlePageChange={handlePageChange} />
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
