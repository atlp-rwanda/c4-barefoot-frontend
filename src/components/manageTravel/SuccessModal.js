import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SuccessModal= (props)=> {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const {isOpen, setIsOpen, success, clearUpdateTravelRequest, handleModalClose}= props

  useEffect( ()=>{
    if(success){
        setIsOpen(true);

    }
  }, [])


  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
    clearUpdateTravelRequest()

  };

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
            <Typography variant='subtitle1' component='h6' id="simple-modal-description">
               Status: { success && success.status? success.status: "Done"} Message: {success && success.message? success.message: (success && success.data ? success.data : t("Operation carried out successfully"))}
            </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
export default SuccessModal;