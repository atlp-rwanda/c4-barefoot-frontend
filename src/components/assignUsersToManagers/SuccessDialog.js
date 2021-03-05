import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SuccessDialog(props) {
  let [open, setOpen] = React.useState(props.open);
  return (
    <Dialog
      open={open}
      onClose={()=>{setOpen(!open)}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{color: 'green'}}>Success!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{color: '#219653'}}>
          The users have been assigned to respective managers successfully!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{setOpen(false)}} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
