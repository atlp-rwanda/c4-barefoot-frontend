import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { AccountCircle, Email, BusinessCenter, Language, Subject, EventBusy } from "@material-ui/icons";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'left'
  },
  textCenter: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  }
}));


export const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const { first_name, last_name, email, username, occupation, bio, address, language, profile_picture} = formData;
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const signupRequest = () => {
    const{confirmPassword, ...user} = {...formData}
    axios.post(`https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/signup`, user)
    .then(res => {
      setSuccessOpen(true)
      nextStep()
    })
    .catch(err => { 
      if (err.response){
        setError(err.response.data.error)
        setErrorOpen(true);
      }else if(err.request){
        setError(err.request.data.error)
        setErrorOpen(true)
      }else if(err.message){
        setError(err.message.data.error)
        setErrorOpen(true)      
      }
    })
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <>
      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Error: {error ? JSON.stringify(error).replace(/[\\'"]+/g, '') : 'Error Not set'}
        </Alert>
      </Snackbar>
      <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Success: {success ? JSON.stringify(success) : 'Message Not set'}
        </Alert>
      </Snackbar>
      <div>
        <List>
        <ListItem>
            <Avatar alt="user" name='file' src={profile_picture ? profile_picture : ''} className={classes.large}/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              primary='Names'
              secondary={first_name + ' ' + last_name}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              primary='Username'
              secondary={username}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email/>
            </ListItemIcon>
            <ListItemText
              primary='Email'
              secondary={email}
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              primary='Occupation'
              secondary={occupation}
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessCenter />
            </ListItemIcon>
            <ListItemText
              primary='Address'
              secondary={address}
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText
              primary='Language'
              secondary={language}
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Subject />
            </ListItemIcon>
            <ListItemText
              primary='Biography'
              secondary={bio}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventBusy />
            </ListItemIcon>
            <ListItemText
              primary='Occupation'
              secondary={occupation}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => signupRequest()}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
