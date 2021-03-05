import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FailureDialog(props) {
  open = props.open;

  return (
    <Dialog
      open={open}
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
        <Button onClick={()=>{}} color="primary">
          TRY AGAIN
        </Button>
        <Button onClick={()=>{}} style={{color: '#333333'}}>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
}
