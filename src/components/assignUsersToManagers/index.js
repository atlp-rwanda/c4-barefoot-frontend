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
  let dialog = false;
  if(addAssignActionToQueue instanceof Promise) {
    const something = addAssignActionToQueue.then(res => res);
    const succeededDialog = (
      addAssignActionToQueue.hasOwnProperty('success')
      && addAssignActionToQueue.success.length != 0 
      && addAssignActionToQueue.errors.length == 0
    );
    console.log({something});
  }
  const pending = (fetchAllManagers.pending && fetchVerifiedUsers.pending)
                  && !fetchAllManagers.loaded;
  console.log({fetchVerifiedUsers, fetchAllManagers, addAssignActionToQueue});
  const dispatch = useDispatch();
  const [page, handlePage] = useState(1);
  useEffect(() => {
    props.getVerifiedUsers(page, dispatch);
    props.getManagersList(dispatch);
  }, []);
  
  const handlePageChange = (evt, page) => {
    usersListPage(page)(dispatch);
  }
  console.log({addAssignActionToQueue}, addAssignActionToQueue.hasOwnProperty('success'));
  return (
    <Container style={{display: 'flex', flexDirection: 'row', justify: 'flex-start', padding: 'unset'}}>
      <UsersList loading={pending} page={page} handlePageChange={handlePageChange} />
      {
        dialog
        ? ( succeededDialog ? <SuccessDialog open={true} /> : <FailureDialog open={false} /> )
        : <></>
        // addAssignActionToQueue.hasOwnProperty('success') ? <SuccessDialog />
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
