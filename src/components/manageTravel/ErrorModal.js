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

const ErrorModal= (props)=> {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const {isOpen, setIsOpen, error, clearUpdateTravelRequest}= props

  useEffect( ()=>{
    if(error){
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
        <Alert onClose={handleClose} severity="error">
            <Typography variant='subtitle1' component='h6' id="simple-modal-description">
               Status: { error && error.status? error.status: "Error occured"} Error: {error && error.message? error.message: (error && error.error ? error.error : t("Unable to load data from server"))}
            </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ErrorModal; 
