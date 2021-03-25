import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function ConfirmModal(props) {

    const {isOpen, setIsOpen, handleUpdateTravel, travelId}= props



  const handleClose = () => {
    setIsOpen({
        ...isOpen,
        open: false
    });
  };
  const handleConfirm= ()=>{
    handleClose();
    handleUpdateTravel(travelId, isOpen.action);
  }
  const handleCancel= ()=>{
    handleClose();
  }

  return (

      <Dialog
        open={isOpen.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Do you want to ${isOpen.action} this travel request?`}</DialogTitle>
        <DialogContent >
            <Typography 
                style={{padding: '0px 20px'}} 
                variant='subtitle1' 
                component='h6'
            >
                {`After you ${isOpen.action} this travel request, you will not be able to undo this action`}
            </Typography>

        </DialogContent>
        <DialogActions>
          <Button onClick={()=> handleCancel()} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> handleConfirm()} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  );
}
