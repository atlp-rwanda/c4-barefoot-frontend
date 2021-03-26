import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import{ useDispatch, useSelector }from 'react-redux';
import { assignUsersFromQueue, cancelAllQueue } from '../../redux/actions/managerSelectedActions';

export default function FailureDialog(props) {
  const retryAssign = useSelector(state => state.addAssignActionToQueue);
  const dispatch = useDispatch(); // for resetting the real [user to manager] state
  const handleTryAgain = () => {
    assignUsersFromQueue(dispatch, retryAssign.pendingTasks);
  }
  const handleCancel = () => {
    cancelAllQueue(dispatch);
  }
  return (
    <Dialog
      open={props.open}
      onClose={()=>{}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{color: '#EB5757'}}>{"Error!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{color: '#EB5757'}}>
          Could not assign user(s) to manager(s)
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleTryAgain} color="primary">
          TRY AGAIN
        </Button>
        <Button onClick={handleCancel} style={{color: '#333333'}}>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
}
